import { WelcomeContent } from '../../domain/entities/WelcomeContent';
import { GetWelcomeContentUseCase } from '../../domain/usecases/GetWelcomeContentUseCase';
import { StrapiWelcomeContentRepository } from '../../data/repositories/StrapiWelcomeContentRepository';
import { useLandingQuery } from './useLandingQuery';

export const useWelcomeContent = () => {
  return useLandingQuery(['welcome-content'] as const, async () => {
    const repository = new StrapiWelcomeContentRepository();
    const useCase = new GetWelcomeContentUseCase(repository);
    return await useCase.execute();
  });
};
