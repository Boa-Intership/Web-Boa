import { useState, useEffect } from 'react';
import { CustomerServiceContent } from '../../domain/entities/CustomerServiceContent';
import { GetCustomerServiceUseCase } from '../../domain/usecases/GetCustomerServiceUseCase';
import { StrapiCustomerServiceRepository } from '../../data/repositories/StrapiCustomerServiceRepository';
import { StaticCustomerServiceRepository } from '../../data/repositories/StaticCustomerServiceRepository';

export const useCustomerService = () => {
  const [data, setData] = useState<CustomerServiceContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomerService = async () => {
      try {
        setLoading(true);
        setError(null);

        // Intentar primero con Strapi
        const strapiRepository = new StrapiCustomerServiceRepository();
        const strapiUseCase = new GetCustomerServiceUseCase(strapiRepository);

        try {
          const strapiData = await strapiUseCase.execute();
          setData(strapiData);
        } catch (strapiError) {
          console.warn('Strapi fallido, usando datos estáticos:', strapiError);

          // Fallback a datos estáticos
          const staticRepository = new StaticCustomerServiceRepository();
          const staticUseCase = new GetCustomerServiceUseCase(staticRepository);
          const staticData = await staticUseCase.execute();
          setData(staticData);
        }
      } catch (err) {
        console.error('Error getting customer service data:', err);
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchCustomerService();
  }, []);

  return { data, loading, error };
};
