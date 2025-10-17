import { useEffect, useState } from 'react';
import { StrapiCargaRepository } from '../../data/repositories/StrapiCargaRepository';
import { GetSectionByDocumentIdUseCase } from '../../domain/usecases/GetSectionByDocumentIdUseCase';
import { SectionEntity } from '../../domain/entities/SectionEntity';

export const useSectionByDocumentId = (documentId: string) => {
  const [data, setData] = useState<SectionEntity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!documentId) return;
    const repo = new StrapiCargaRepository();
    const useCase = new GetSectionByDocumentIdUseCase(repo);
    useCase
      .execute(documentId)
      .then(setData)
      .finally(() => setLoading(false));
  }, [documentId]);

  return { data, loading };
};
