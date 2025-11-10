import { FAQContent } from '../../domain/entities/FAQContent';
import { GetFAQUseCase } from '../../domain/usecases/GetFAQUseCase';
import { StrapiFAQRepository } from '../../data/repositories/StrapiFAQRepository';
import { StaticFAQRepository } from '../../data/repositories/StaticFAQRepository';
import { useLandingQuery } from './useLandingQuery';

export const useFAQ = () => {
  return useLandingQuery(['faq-content'] as const, async () => {
    try {
      const repository = new StrapiFAQRepository();
      const useCase = new GetFAQUseCase(repository);
      return await useCase.execute();
    } catch (strapiError) {
      console.warn('Strapi fallido, usando datos estáticos:', strapiError);
      const staticRepository = new StaticFAQRepository();
      const useCase = new GetFAQUseCase(staticRepository);
      return await useCase.execute();
    }
  });
};
