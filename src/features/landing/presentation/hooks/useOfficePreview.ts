import { OfficePreviewContent } from '../../domain/entities/OfficePreviewContent';
import { GetOfficePreviewUseCase } from '../../domain/usecases/GetOfficePreviewUseCase';
import { StrapiOfficePreviewRepository } from '../../data/repositories/StrapiOfficePreviewRepository';
import { StaticOfficePreviewRepository } from '../../data/repositories/StaticOfficePreviewRepository';
import { useLandingQuery } from './useLandingQuery';

export const useOfficePreview = () => {
  return useLandingQuery(['office-preview'] as const, async () => {
    try {
      const strapiRepository = new StrapiOfficePreviewRepository();
      const strapiUseCase = new GetOfficePreviewUseCase(strapiRepository);
      return await strapiUseCase.execute();
    } catch (strapiError) {
      console.warn('Strapi fallido, usando datos estáticos:', strapiError);
      const staticRepository = new StaticOfficePreviewRepository();
      const staticUseCase = new GetOfficePreviewUseCase(staticRepository);
      return await staticUseCase.execute();
    }
  });
};
