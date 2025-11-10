import { CustomerServiceContent } from '../../domain/entities/CustomerServiceContent';
import { GetCustomerServiceUseCase } from '../../domain/usecases/GetCustomerServiceUseCase';
import { StrapiCustomerServiceRepository } from '../../data/repositories/StrapiCustomerServiceRepository';
import { StaticCustomerServiceRepository } from '../../data/repositories/StaticCustomerServiceRepository';
import { useLandingQuery } from './useLandingQuery';

export const useCustomerService = () => {
  return useLandingQuery(['customer-service'] as const, async () => {
    try {
      const strapiRepository = new StrapiCustomerServiceRepository();
      const strapiUseCase = new GetCustomerServiceUseCase(strapiRepository);
      return await strapiUseCase.execute();
    } catch (strapiError) {
      console.warn('Strapi fallido, usando datos estáticos:', strapiError);
      const staticRepository = new StaticCustomerServiceRepository();
      const staticUseCase = new GetCustomerServiceUseCase(staticRepository);
      return await staticUseCase.execute();
    }
  });
};
