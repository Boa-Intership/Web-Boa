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
    slug: string;
    orden: number;
    activo: boolean;
  }>;
}

interface StrapiResponseCategories {
  data: StrapiCategoryResponse[];
  meta: Record<string, unknown>;
}

export class StrapiCategoriesRepository implements CategoryRepository {
  // 🔹 Buscar por documentId
  async getCategoryByDocumentId(documentId: string): Promise<CategoryEntity | null> {
    try {
      // console.log(' Buscando categoría por documentId:', documentId);

      const response = await strapiClient.get<StrapiResponseCategories>(
        `/categorias-cargas?filters[documentId][$eq]=${documentId}&populate=seccions`
      );

      const categoria = response?.data?.[0]; // Strapi devuelve un array dentro de "data"

      if (!categoria) {
        console.warn(`⚠️ No se encontró categoría con documentId ${documentId}`);
        return null;
      }

      return this.mapStrapiToSingleEntity(categoria);
    } catch (error) {
      this.handleError(error, 'documentId', documentId);
      return null;
    }
  }

  // 🔹 Mapear datos de Strapi al dominio
  private mapStrapiToSingleEntity(item: StrapiCategoryResponse): CategoryEntity {
    return {
      id: item.id,
      documentId: item.documentId,
      titulo: item.titulo,
      slug: item.slug,
      icono: item.icono,
      orden: item.orden,
      activo: item.activo,
      seccions:
        item.seccions?.map((s) => ({
          id: s.id,
          documentId: s.documentId,
          titulo: s.titulo,
          slug: s.slug,
          orden: s.orden,
          activo: s.activo,
          contenido_seccion: [],
        })) ?? [],
    };
  }

  // 🔹 Manejo de errores
  private handleError(error: unknown, field: string, value: string) {
    if (axios.isAxiosError(error)) {
      console.error(`❌ Error al buscar categoría por ${field}=${value}:`, {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    } else {
      console.error(`❌ Error inesperado al buscar categoría por ${field}=${value}:`, error);
    }
  }
}
