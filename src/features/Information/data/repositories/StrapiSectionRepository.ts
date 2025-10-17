import type { BlocksContent } from '@strapi/blocks-react-renderer';
import { SectionEntity, SectionRepository } from '../../domain/entities/SectionEntity';
import { strapiClient } from '@/config/httpClient';
import axios from 'axios';

interface ContenidoSeccion {
  __component: string;
  id: number;
  //contenido,requisitos
  titulo: string;
  slug: string;
  contenido?: BlocksContent | null;
  icono?: string | null;
  //galeria
  imagen_url?: string | null;
  descripcion?: string | null;
  //alerta
  tipo?: string | null;
}

interface StrapiSectionRespose {
  id: number;
  documentId: string;
  titulo: string;
  orden: number;
  activo: boolean;
  slug: string;
  contenido_seccion: ContenidoSeccion[];
}

interface StrapiResponseSections {
  data: StrapiSectionRespose[];
  meta: Record<string, unknown>;
}

export class StrapiSectionRepository implements SectionRepository {
  async getSectionByDocumentId(documentId: string): Promise<SectionEntity | null> {
    try {
      console.log(' Buscando sección por documentId:', documentId);
      const response = await strapiClient.get<StrapiResponseSections>(
        `http://localhost:1337/api/seccions/?filters[documentId][$eq]=${documentId}&populate=contenido_seccion`
      );
      const seccion = response?.data?.[0]; // Strapi devuelve un array dentro de "data"

      if (!seccion) {
        console.warn(`⚠️ No se encontró sección con documentId ${documentId}`);
        return null;
      }
      return this.mapStrapiToSingleEntity(seccion);
    } catch (error) {
      this.handleError(error, 'documentId', documentId);
      return null;
    }
  }

  private mapStrapiToSingleEntity(item: StrapiSectionRespose): SectionEntity {
    return {
      id: item.id,
      documentId: item.documentId,
      titulo: item.titulo,
      orden: item.orden,
      activo: item.activo,
      slug: item.slug,
      contenido_seccion:
        item.contenido_seccion?.map((cs) => ({
          __component: cs.__component,
          id: cs.id,
          titulo: cs.titulo,
          slug: cs.slug,
          contenido: cs.contenido,
          icono: cs.icono,
          imagen_url: cs.imagen_url,
          descripcion: cs.descripcion,
          tipo_alerta: cs.tipo as 'INFORMACION' | 'ADVERTENCIA' | 'ERROR' | 'EXITO' | null,
        })) ?? [],
    };
  }

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
