import { FAQContent, FAQContentRepository } from '../../domain/entities/FAQContent';
import { strapiClient } from '@/config';

interface StrapiFAQData {
  id: number;
  documentId: string;
  titulo: string;
  activo: boolean;
  pregunta: Array<{
    id: number;
    pregunta: string;
    respuesta: string;
  }>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiResponse {
  data: StrapiFAQData;
  meta: Record<string, unknown>;
}

export class StrapiFAQRepository implements FAQContentRepository {
  async getFAQContent(): Promise<FAQContent> {
    try {
      const result = await strapiClient.get<StrapiResponse>('/pregunta-frecuente?populate=*');

      if (!result.data) {
        throw new Error('No se encontraron datos de FAQ');
      }

      return this.mapStrapiToEntity(result.data);
    } catch (error) {
      console.error('Error fetching FAQ from Strapi:', error);
      throw error;
    }
  }

  private mapStrapiToEntity(strapiData: StrapiResponse['data']): FAQContent {
    return {
      id: strapiData.id.toString(),
      titulo: strapiData.titulo,
      activo: strapiData.activo,
      preguntas: strapiData.pregunta.map((item) => ({
        id: item.id.toString(),
        question: item.pregunta,
        answer: item.respuesta,
      })),
    };
  }
}
