import { NewsContent } from '../../domain/entities/NewsContent';
import { GetNewUseCase } from '../../domain/usecases/GetNewsUseCase';
import { StrapiNewRepository } from '../../data/repositories/StrapiNewsRepository';
import { StaticNewsRepository } from '../../data/repositories/StaticNewsRepository';
import { useLandingQuery } from './useLandingQuery';

export const useNews = () => {
  return useLandingQuery(['news-content'] as const, async () => {
    try {
      const repository = new StrapiNewRepository();
      const useCase = new GetNewUseCase(repository);
      return await useCase.execute();
    } catch (strapiError) {
      console.warn('Strapi fallido, usando datos estáticos:', strapiError);
      const staticRepository = new StaticNewsRepository();
      const useCase = new GetNewUseCase(staticRepository);
      return await useCase.execute();
    }
  });
};
