import { CategoryEntity, CategoryRepository } from '../../domain/entities/CategoryEntity';
import { strapiClient } from '@/config/httpClient';
import axios from 'axios';

interface StrapiSection {
  id: number;
  documentId: string;
  titulo: string;
  orden: number;
  activo: boolean;
}

interface StrapiCategoryResponse {
  data: {
    id: number;
    documentId: string;
    titulo: string;
    icono: string | null;
    orden: number;
    activo: boolean;
    seccions: StrapiSection[];
  };
  meta: Record<string, unknown>;
}

export class StrapiCategoriesRepository implements CategoryRepository {
  async getCategoryByDocumentId(documentId: string): Promise<CategoryEntity | null> {
    try {
      const response = await strapiClient.get<StrapiCategoryResponse>(
        `/categorias-cargas/${documentId}?populate=*`
      );

      if (!response.data || !response.data.data) {
        console.warn('No data received from Strapi');
        return null;
      }

      return this.mapStrapiToEntity(response.data.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error fetching category:', {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
        });
      } else {
        console.error('Error fetching category:', error);
      }
      return null;
    }
  }

  private mapStrapiToEntity(data: StrapiCategoryResponse['data']): CategoryEntity {
    return {
      id: data.id,
      documentId: data.documentId,
      titulo: data.titulo,
      icono: data.icono,
      orden: data.orden,
      activo: data.activo,
      seccions: data.seccions.map((s) => ({
        id: s.id,
        documentId: s.documentId,
        titulo: s.titulo,
        orden: s.orden,
        activo: s.activo,
        contenido_seccion: [], // aún no poblado
      })),
    };
  }
}
