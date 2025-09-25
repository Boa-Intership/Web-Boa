import { useState, useEffect } from 'react';
import { WelcomeContent } from '../../domain/entities/WelcomeContent';
import { GetWelcomeContentUseCase } from '../../domain/usecases/GetWelcomeContentUseCase';
import { StrapiWelcomeContentRepository } from '../../data/repositories/StrapiWelcomeContentRepository';

export const useWelcomeContent = () => {
  const [data, setData] = useState<WelcomeContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Inyección de dependencias siguiendo Clean Architecture
        const repository = new StrapiWelcomeContentRepository();
        const useCase = new GetWelcomeContentUseCase(repository);

        const welcomeContent = await useCase.execute();
        setData(welcomeContent);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
        setError(errorMessage);
        console.error('Error in useWelcomeContent:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
