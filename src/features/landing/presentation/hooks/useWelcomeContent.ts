import { useState, useEffect } from 'react';
import { WelcomeContent } from '../../domain/entities/WelcomeContent';
import { GetWelcomeContentUseCase } from '../../domain/usecases/GetWelcomeContentUseCase';
import { StrapiWelcomeContentRepository } from '../../data/repositories/StrapiWelcomeContentRepository';
import { StaticWelcomeContentRepository } from '../../data/repositories/StaticWelcomeContentRepository';

export const useWelcomeContent = () => {
  const [data, setData] = useState<WelcomeContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Intentar primero con Strapi
        const strapiRepository = new StrapiWelcomeContentRepository();
        const strapiUseCase = new GetWelcomeContentUseCase(strapiRepository);

        try {
          const strapiData = await strapiUseCase.execute();
          setData(strapiData);
        } catch (strapiError) {
          console.warn('Strapi fallido, usando datos estáticos:', strapiError);

          // Fallback a datos estáticos
          const staticRepository = new StaticWelcomeContentRepository();
          const staticUseCase = new GetWelcomeContentUseCase(staticRepository);
          const staticData = await staticUseCase.execute();
          setData(staticData);
        }
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
