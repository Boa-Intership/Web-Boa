import {
  OfficePreviewContent,
  OfficePreviewRepository,
  OfficeInfo,
} from '../../domain/entities/OfficePreviewContent';
import { strapiClient } from '@/config';

// Tipos para mapear la respuesta de Strapi
interface StrapiOfficeData {
  id: number;
  nombre: string;
  direccion: string;
  telefono?: string;
  horarios?: string;
  imagen_url?: string;
  orden: number;
}

interface StrapiOfficePreviewData {
  id: number;
  titulo: string;
  descripcion?: string;
  texto_boton: string;
  enlace_boton: string;
  activo: boolean;
  oficinas: StrapiOfficeData[];
}

interface StrapiOfficePreviewResponse {
  data: StrapiOfficePreviewData[];
}

export class StrapiOfficePreviewRepository implements OfficePreviewRepository {
  async getOfficePreview(): Promise<OfficePreviewContent> {
    try {
      const result = await strapiClient.get<StrapiOfficePreviewResponse>(
        '/vista-oficinas?populate=*&filters[activo][$eq]=true&sort=createdAt:desc'
      );

      if (!result.data || result.data.length === 0) {
        throw new Error('No active office preview found');
      }

      return this.mapStrapiToEntity(result.data[0]);
    } catch (error) {
      console.error('Error fetching from Strapi:', error);
      throw error;
    }
  }

  private mapStrapiToEntity(strapiData: StrapiOfficePreviewData): OfficePreviewContent {
    const oficinas: OfficeInfo[] = (strapiData.oficinas || [])
      .map((office) => ({
        id: office.id.toString(),
        nombre: office.nombre,
        direccion: office.direccion,
        telefono: office.telefono,
        horarios: office.horarios,
        imagen_url: office.imagen_url,
        orden: office.orden,
      }))
      .sort((a, b) => a.orden - b.orden);

    return {
      id: strapiData.id.toString(),
      titulo: strapiData.titulo,
      descripcion: strapiData.descripcion,
      texto_boton: strapiData.texto_boton,
      enlace_boton: strapiData.enlace_boton,
      activo: strapiData.activo,
      oficinas,
    };
  }
}
