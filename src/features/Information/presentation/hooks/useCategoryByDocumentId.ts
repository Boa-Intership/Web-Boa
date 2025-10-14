import { useEffect, useState } from 'react';
import { StrapiCargaRepository } from '../../data/repositories/StrapiCargaRepository';
import { GetCategoryByDocumentIdUseCase } from '../../domain/usecases/GetCategoryByDocumentIdUseCase';
import { CategoryEntity } from '../../domain/entities/CategoryEntity';

export const useCategoryByDocumentId = (documentId) => {
  const [data, setData] = useState<CategoryEntity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!documentId) return;
    const repo = new StrapiCargaRepository();
    const useCase = new GetCategoryByDocumentIdUseCase(repo);
    useCase
      .execute(documentId)
      .then(setData)
      .finally(() => setLoading(false));
  }, [documentId]);

  return { data, loading };
};
