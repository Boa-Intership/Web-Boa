import { WelcomeContent } from '../../domain/entities/WelcomeContent';
import { GetWelcomeContentUseCase } from '../../domain/usecases/GetWelcomeContentUseCase';
import { StrapiWelcomeContentRepository } from '../../data/repositories/StrapiWelcomeContentRepository';
import { StaticWelcomeContentRepository } from '../../data/repositories/StaticWelcomeContentRepository';
import { useLandingQuery } from './useLandingQuery';

export const useWelcomeContent = () => {
  return useLandingQuery(['welcome-content'] as const, async () => {
    try {
      // Intentar primero con Strapi
      const strapiRepository = new StrapiWelcomeContentRepository();
      const strapiUseCase = new GetWelcomeContentUseCase(strapiRepository);
      return await strapiUseCase.execute();
    } catch (strapiError) {
      console.warn('Strapi fallido, usando datos estáticos:', strapiError);

      // Fallback a datos estáticos
      const staticRepository = new StaticWelcomeContentRepository();
      const staticUseCase = new GetWelcomeContentUseCase(staticRepository);
      return await staticUseCase.execute();
    }
  });
};
