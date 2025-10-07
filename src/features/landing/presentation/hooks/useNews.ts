import { NewsContent } from '../../domain/entities/NewsContent';
import { useState, useEffect } from 'react';
import { GetNewUseCase } from '../../domain/usecases/GetNewsUseCase';
import { StrapiNewRepository } from '../../data/repositories/StrapiNewsRepository';

export const useNews = () => {
  const [data, setData] = useState<NewsContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const repository = new StrapiNewRepository();
        const useCase = new GetNewUseCase(repository);

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
