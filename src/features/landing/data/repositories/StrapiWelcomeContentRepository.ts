import { WelcomeContent, WelcomeContentRepository } from '../../domain/entities/WelcomeContent';

// Tipos para mapear la respuesta de Strapi
interface StrapiWelcomeData {
  id: number;
  title: string;
  title2: string;
  title3: string;
  description: string;
  button_text: string;
}

interface StrapiResponse {
  data: StrapiWelcomeData[];
}

export class StrapiWelcomeContentRepository implements WelcomeContentRepository {
  private readonly baseUrl = '/api/cms';

  async getWelcomeContent(): Promise<WelcomeContent> {
    try {
      const response = await fetch(`${this.baseUrl}/bienvenidas`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: StrapiResponse = await response.json();

      if (!result.data || result.data.length === 0) {
        throw new Error('No welcome content found');
      }

      return this.mapStrapiToEntity(result.data[0]);
    } catch (error) {
      console.error('Error fetching from Strapi:', error);
      throw error;
    }
  }

  private mapStrapiToEntity(strapiData: StrapiWelcomeData): WelcomeContent {
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
