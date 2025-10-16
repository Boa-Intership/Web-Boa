import { TermsEntity } from '../../domain/entities/TermsEntity';
import { useState, useEffect } from 'react';
import { GetTermsUseCase } from '../../domain/usecases/GetTermsUseCase';
import { StrapiTermsRepository } from '../../data/repositories/StrapiTermsRository';

export const useTerms = () => {
  const [data, setData] = useState<TermsEntity | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const repository = new StrapiTermsRepository();
        const useCase = new GetTermsUseCase(repository);

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
