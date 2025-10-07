import { useState, useEffect } from 'react';
import { FAQContent } from '../../domain/entities/FAQContent';
import { GetFAQUseCase } from '../../domain/usecases/GetFAQUseCase';
import { StrapiFAQRepository } from '../../data/repositories/StrapiFAQRepository';

export const useFAQ = () => {
  const [data, setData] = useState<FAQContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const repository = new StrapiFAQRepository();
        const useCase = new GetFAQUseCase(repository);

        const perfilData = await useCase.execute();
        setData(perfilData);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Error desconocido';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
