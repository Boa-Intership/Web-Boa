import { NewsContent, NewContentRepository } from '../../domain/entities/NewsContent';
import { strapiClient } from '@/config';

interface StrapiNewData {
  id: number;
  documentId: string;
  titulo: string;
  activo: boolean;
  noticia: Array<{
    id: number;
    titulo: string | null;
    descripcion: string | null;
    activo: boolean;
    imagen_url: string | null;
    enlace: string | null;
  }>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiResponse {
  data: StrapiNewData;
  meta: Record<string, unknown>;
}

export class StrapiNewRepository implements NewContentRepository {
  async getNewContent(): Promise<NewsContent> {
    try {
      const result = await strapiClient.get<StrapiResponse>('/noticia', {
        params: {
          populate: '*',
        },
      });

      if (!result.data) {
        throw new Error('No se encontraron datos de noticias');
      }

      return this.mapStrapiToEntity(result.data);
    } catch (error) {
      console.error('Error fetching noticias from Strapi:', error);
      throw error;
    }
  }

  private mapStrapiToEntity(strapiData: StrapiNewData): NewsContent {
    return {
      id: strapiData.id,
      titulo: strapiData.titulo,
      activo: strapiData.activo,
      noticias: strapiData.noticia.map((item) => ({
        id: item.id,
        titulo: item.titulo || undefined,
        descripcion: item.descripcion || undefined,
        activo: item.activo,
        imagen_url: item.imagen_url || '',
        enlace: item.enlace || undefined,
      })),
    };
  }
}
