import { useEffect, useState } from 'react';
import { StrapiCategoriesRepository } from '../../data/repositories/StrapiCategoriesRepository';
import { GetCategoryByDocumentIdUseCase } from '../../domain/usecases/GetCategoryByDocumentIdUseCase';
import { CategoryEntity } from '../../domain/entities/CategoryEntity';
import { GetCategoryBySlugUseCase } from '../../domain/usecases/GetCategoryBySlugUseCase';

export const useCategoryByDocumentId = (documentId: string) => {
  const [data, setData] = useState<CategoryEntity | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!documentId) {
        console.warn('No se proporcionó documentId');
        return;
      }

      try {
        console.log('Iniciando fetch para documentId:', documentId);
        setLoading(true);
        setError(null);

        const repository = new StrapiCategoriesRepository();
        const useCase = new GetCategoryByDocumentIdUseCase(repository);

        console.log('Ejecutando useCase con documentId:', documentId);
        const categoryData = await useCase.execute(documentId);
        console.log('Respuesta del useCase:', categoryData);

        if (!categoryData) {
          console.warn('No se encontró la categoría con documentId:', documentId);
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

export const useCategoryBySlug = (slug: string) => {
  const [data, setData] = useState<CategoryEntity | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) {
        console.warn('No se proporcionó documentId');
        return;
      }

      try {
        console.log('Iniciando fetch para documentId:', slug);
        setLoading(true);
        setError(null);

        const repository = new StrapiCategoriesRepository();
        const useCase = new GetCategoryBySlugUseCase(repository);

        console.log('Ejecutando useCase con documentId:', slug);
        const categoryData = await useCase.execute(slug);
        console.log('Respuesta del useCase:', categoryData);

        if (!categoryData) {
          console.warn('No se encontró la categoría con slug:', slug);
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

    if (slug) {
      fetchData();
    }
  }, [slug]);
  return { data, loading, error };
};
