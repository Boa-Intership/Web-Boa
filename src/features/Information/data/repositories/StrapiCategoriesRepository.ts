import { CategoryEntity, CategoryRepository } from '../../domain/entities/CategoryEntity';
import { strapiClient } from '@/config/httpClient';
import axios from 'axios';

interface StrapiCategoryResponse {
  id: number;
  documentId: string;
  titulo: string;
  slug: string;
  icono?: string | null;
  orden: number;
  activo: boolean;
  seccions: Array<{
    id: number;
    documentId: string;
    titulo: string;
    orden: number;
    activo: boolean;
  }>;
}
interface StrapiResponseCategories {
  data: StrapiCategoryResponse[];
  meta: Record<string, unknown>;
}

export class StrapiCategoriesRepository implements CategoryRepository {
  async getCategoryByDocumentId(documentId: string): Promise<CategoryEntity | null> {
    try {
      const response = await strapiClient.get(`/categorias-cargas/${documentId}?populate=*
`);

      if (!response.data || !response.data.data) {
        console.warn('No hay datos recibidos desde strapi');
        return null;
      }

      // response.data.data is expected to be a single category object
      return this.mapStrapiToSingleEntity(response.data.data);
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
  private mapStrapiToSingleEntity(item: StrapiCategoryResponse): CategoryEntity {
    return {
      id: item.id,
      documentId: item.documentId,
      titulo: item.titulo,
      slug: item.slug,
      icono: item.icono,
      orden: item.orden,
      activo: item.activo,
      seccions: item.seccions.map((s) => ({
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
