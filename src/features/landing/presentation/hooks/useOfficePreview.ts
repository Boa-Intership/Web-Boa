import { useState, useEffect } from 'react';
import { OfficePreviewContent } from '../../domain/entities/OfficePreviewContent';
import { GetOfficePreviewUseCase } from '../../domain/usecases/GetOfficePreviewUseCase';
import { StrapiOfficePreviewRepository } from '../../data/repositories/StrapiOfficePreviewRepository';
import { StaticOfficePreviewRepository } from '../../data/repositories/StaticOfficePreviewRepository';

export const useOfficePreview = () => {
  const [data, setData] = useState<OfficePreviewContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOfficePreview = async () => {
      try {
        setLoading(true);
        setError(null);

        // Intentar primero con Strapi
        const strapiRepository = new StrapiOfficePreviewRepository();
        const strapiUseCase = new GetOfficePreviewUseCase(strapiRepository);

        try {
          const strapiData = await strapiUseCase.execute();
          setData(strapiData);
        } catch (strapiError) {
          console.warn('Strapi fallido, usando datos estáticos:', strapiError);

          // Fallback a datos estáticos
          const staticRepository = new StaticOfficePreviewRepository();
          const staticUseCase = new GetOfficePreviewUseCase(staticRepository);
          const staticData = await staticUseCase.execute();
          setData(staticData);
        }
      } catch (err) {
        console.error('Error getting office preview data:', err);
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchOfficePreview();
  }, []);

  return { data, loading, error };
};
