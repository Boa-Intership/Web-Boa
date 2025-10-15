import { WelcomeContent, WelcomeContentRepository } from '../../domain/entities/WelcomeContent';
import { strapiClient } from '@/config';

// Tipos para mapear la respuesta de Strapi
interface StrapiResponse {
  data: {
    id: number;
    documentId: string;
    title: string;
    title2: string;
    title3: string;
    description: string;
    button_text: string;
  };
}

export class StrapiWelcomeContentRepository implements WelcomeContentRepository {
  async getWelcomeContent(): Promise<WelcomeContent> {
    try {
      const result = await strapiClient.get<StrapiResponse>('/bienvenida?populate=*');

      if (!result.data) {
        throw new Error('No welcome content found');
      }

      return this.mapStrapiToEntity(result.data);
    } catch (error) {
      console.error('Error fetching from Strapi:', error);
      throw error;
    }
  }

  private mapStrapiToEntity(strapiData: StrapiResponse['data']): WelcomeContent {
    return {
      id: strapiData.id.toString(),
      title: strapiData.title,
      highlightedWord: strapiData.title2,
      subtitle: strapiData.title3,
      description: strapiData.description,
      buttonText: strapiData.button_text,
    };
  }
}
