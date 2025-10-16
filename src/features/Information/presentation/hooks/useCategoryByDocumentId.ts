import { useEffect, useState } from 'react';
import { StrapiCategoriesRepository } from '../../data/repositories/StrapiCategoriesRepository';
import { GetCategoryByDocumentIdUseCase } from '../../domain/usecases/GetCategoryByDocumentIdUseCase';
import { CategoryEntity } from '../../domain/entities/CategoryEntity';

export const useCategoryByDocumentId = (documentId: string) => {
  const [data, setData] = useState<CategoryEntity | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const repository = new StrapiCategoriesRepository();
        const useCase = new GetCategoryByDocumentIdUseCase(repository);

        const categoryData = await useCase.execute(documentId);
        setData(categoryData);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Error desconocido';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    if (documentId) {
      fetchData();
    }
  }, [documentId]);

  return { data, loading, error };
};
