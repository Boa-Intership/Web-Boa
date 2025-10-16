import { strapiClient } from '@/config/httpClient';
import {
  ViewCategoriesEntity,
  viewCategoriesRepository,
} from '../../domain/entities/ViewCategoriesEntity';

interface StrapiViewCategoryData {
  id: number;
  titulo: string;
  descripcion: string;
  categorias_cargas: Array<{
    id: number;
    documentId: string;
    titulo: string;
    slug: string;
    icono: string;
    orden: number;
    activo: boolean;
  }>;
}
interface StrapiResponseViewCategories {
  data: StrapiViewCategoryData;
  meta: Record<string, unknown>;
}

export class StrapiCargaRepository implements viewCategoriesRepository {
  async getViewCategories(): Promise<ViewCategoriesEntity[]> {
    try {
      //peticion con strapi
      const response = await strapiClient.get('/vista-categorias-carga?populate=*');
      if (!response.data) {
        throw new Error('No se encontró la vista tipos de carga');
      }
      // Si response.data es un array, mapeamos cada elemento
      if (Array.isArray(response.data)) {
        return response.data.map((item: StrapiResponseViewCategories['data']) =>
          this.mapStrapiToEntity(item)
        );
      }
      // Si es un solo objeto, lo devolvemos como array
      return [this.mapStrapiToEntity(response.data)];
    } catch (error) {
      console.error('Error fetching vista tipos de carga:', error);
      throw error;
    }
  }
  private mapStrapiToEntity(
    strapiData: StrapiResponseViewCategories['data']
  ): ViewCategoriesEntity {
    return {
      id: strapiData.id,
      titulo: strapiData.titulo,
      descripcion: strapiData.descripcion,
      categorias_cargas: strapiData.categorias_cargas.map((item) => ({
        id: item.id,
        documentId: item.documentId,
        titulo: item.titulo,
        slug: item.slug,
        icono: item.icono,
        orden: item.orden,
        activo: item.activo,
        seccions: [], // Add empty array for required property
      })),
    };
  }
}

// async getCategoryByDocumentId(documentoId: string): Promise<CategoryEntity | null> {
//     const response = await strapiClient.get('/categorias-cargas/${documentoId}?populate=*');
//     const data = response.data;
//     if (!data) {
//       return null;
//     }
//     return {
//       id: data.id,
//       documentoId: data.documentoId,
//       titulo: data.titulo,
//       icono: data.icono,
//       orden: data.orden,
//       activo: data.activo,
//       seccions: (data.seccions || []).map((s: any) => ({
//         id: s.id,
//         documentoId: s.documentoId,
//         titulo: s.titulo,
//         orden: s.orden,
//         activo: s.activo,
//       })),
//     };
//   }

//   async getSectionByDocumentId(documentoId: string): Promise<SectionEntity | null> {
//     const response = await strapiClient.get('/seccions/${documentoId}?populate=*');
//     const data = response.data;
//     if (!data) {
//       return null;
//     }
//     return {
//       id: data.id,
//       documentoId: data.documentoId,
//       titulo: data.titulo,
//       orden: data.orden,
//       activo: data.activo,
//       contenido_seccion: data.contenido_seccion || [],
//     };
//   }
