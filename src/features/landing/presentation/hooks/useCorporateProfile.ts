import { CorporateProfileContent } from '../../domain/entities/CorporateProfileContent';
import { GetCorporateProfileUseCase } from '../../domain/usecases/GetCorporateProfileUseCase';
import { StrapiCorporateProfileRepository } from '../../data/repositories/StrapiCorporateProfileRepository';
import { useLandingQuery } from './useLandingQuery';

export const useCorporateProfile = () => {
  return useLandingQuery(['corporate-profile'] as const, async () => {
    const repository = new StrapiCorporateProfileRepository();
    const useCase = new GetCorporateProfileUseCase(repository);
    return await useCase.execute();
  });
};
