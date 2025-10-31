import { GeneralInfoContent } from '../../domain/entities/GeneralInfoContent';
import { GetGeneralInfoUseCase } from '../../domain/usecases/GetGeneralInfoUseCase';
import { StrapiGeneralInfoRepository } from '../../data/repositories/StrapiGeneralInfoRepository';
import { StaticGeneralInfoRepository } from '../../data/repositories/StaticGeneralInfoRepository';
import { useLandingQuery } from './useLandingQuery';

export const useGeneralInfo = () => {
  return useLandingQuery(['general-info'] as const, async () => {
    try {
      const strapiRepository = new StrapiGeneralInfoRepository();
      const strapiUseCase = new GetGeneralInfoUseCase(strapiRepository);
      return await strapiUseCase.execute();
    } catch (strapiError) {
      console.warn('Strapi failed, using static data:', strapiError);
      const staticRepository = new StaticGeneralInfoRepository();
      const staticUseCase = new GetGeneralInfoUseCase(staticRepository);
      return await staticUseCase.execute();
    }
  });
};
