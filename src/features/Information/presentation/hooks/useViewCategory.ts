import { useEffect, useState } from 'react';
import { StrapiCargaRepository } from '../../data/repositories/StrapiCargaRepository';
import { GetViewCategoryUseCase } from '../../domain/usecases/GetViewCategoryUseCase';

import { ViewCategoriesEntity } from '../../domain/entities/ViewCategoriesEntity';

export const useViewCategory = () => {
  const [data, setData] = useState<ViewCategoriesEntity[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const repository = new StrapiCargaRepository();
        const useCase = new GetViewCategoryUseCase(repository);

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
