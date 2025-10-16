import { useEffect, useState } from 'react';
import { StrapiSectionRepository } from '../../data/repositories/StrapiSectionRepository';
import { GetSectionByDocumentIdUseCase } from '../../domain/usecases/GetSectionByDocumentIdUseCase';
import { SectionEntity } from '../../domain/entities/SectionEntity';

export const useSectionByDocumentId = (documentId: string) => {
  const [data, setData] = useState<SectionEntity | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!documentId) {
        // console.warn('No se proporcionó documentId');
        return;
      }
      try {
        // console.log('Iniciando fetch de seccion para documentId:', documentId);
        setLoading(true);
        setError(null);

        const repository = new StrapiSectionRepository();
        const useCase = new GetSectionByDocumentIdUseCase(repository);

        const categoryData = await useCase.execute(documentId);
        // console.log('Respuesta del useCase:', categoryData);

        if (!categoryData) {
          console.warn('No se encontró la seccion con documentId:', documentId);
          setError('No se encontró la categoría');
        }

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
