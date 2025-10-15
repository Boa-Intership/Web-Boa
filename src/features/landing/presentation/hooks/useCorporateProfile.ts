import { useState, useEffect } from 'react';
import { CorporateProfileContent } from '../../domain/entities/CorporateProfileContent';
import { GetCorporateProfileUseCase } from '../../domain/usecases/GetCorporateProfileUseCase';
import { StrapiCorporateProfileRepository } from '../../data/repositories/StrapiCorporateProfileRepository';

export const useCorporateProfile = () => {
  const [data, setData] = useState<CorporateProfileContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const repository = new StrapiCorporateProfileRepository();
        const useCase = new GetCorporateProfileUseCase(repository);

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
