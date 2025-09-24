import { useState, useEffect } from 'react';
import { GeneralInfoContent } from '../../domain/entities/GeneralInfoContent';
import { GetGeneralInfoUseCase } from '../../domain/usecases/GetGeneralInfoUseCase';
import { StrapiGeneralInfoRepository } from '../../data/repositories/StrapiGeneralInfoRepository';
import { StaticGeneralInfoRepository } from '../../data/repositories/StaticGeneralInfoRepository';

interface UseGeneralInfoReturn {
  data: GeneralInfoContent | null;
  loading: boolean;
  error: string | null;
}

export const useGeneralInfo = (): UseGeneralInfoReturn => {
  const [data, setData] = useState<GeneralInfoContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeneralInfo = async () => {
      try {
        setLoading(true);
        setError(null);

        // Intentar con Strapi primero
        const strapiRepository = new StrapiGeneralInfoRepository();
        const strapiUseCase = new GetGeneralInfoUseCase(strapiRepository);

        try {
          const strapiData = await strapiUseCase.execute();
          setData(strapiData);
        } catch (strapiError) {
          console.warn('Strapi failed, using static data:', strapiError);

          // Fallback a datos estáticos
          const staticRepository = new StaticGeneralInfoRepository();
          const staticUseCase = new GetGeneralInfoUseCase(staticRepository);
          const staticData = await staticUseCase.execute();
          setData(staticData);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        console.error('Error fetching general info:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGeneralInfo();
  }, []);

  return { data, loading, error };
};
