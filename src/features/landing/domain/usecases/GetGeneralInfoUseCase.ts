import { GeneralInfoContent, GeneralInfoRepository } from '../entities/GeneralInfoContent';

export class GetGeneralInfoUseCase {
  constructor(private repository: GeneralInfoRepository) {}

  async execute(): Promise<GeneralInfoContent> {
    try {
      const generalInfo = await this.repository.getGeneralInfo();

      // Validar que esté activo
      if (!generalInfo.activo) {
        throw new Error('General Info section is not active');
      }

      // Ordenar elementos por orden
      const sortedElementos = [...generalInfo.elementos].sort((a, b) => a.orden - b.orden);

      return {
        ...generalInfo,
        elementos: sortedElementos,
      };
    } catch (error) {
      console.error('Error getting general info:', error);
      throw error;
    }
  }
}
