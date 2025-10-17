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
  telefono?: string | null;
  horarios?: string | null;
  imagen_url?: string | null;
  orden: number;
}

interface StrapiOfficePreviewResponse {
  data: {
    id: number;
    documentId: string;
    titulo: string;
    descripcion: string;
    texto_boton: string;
    enlace_boton: string;
    activo: boolean;
    oficinas: StrapiOfficeData[];
  };
}

export class StrapiOfficePreviewRepository implements OfficePreviewRepository {
  async getOfficePreview(): Promise<OfficePreviewContent> {
    try {
      const result = await strapiClient.get<StrapiOfficePreviewResponse>(
        '/vista-oficina?populate=*'
      );

      if (!result.data) {
        throw new Error('No office preview found');
      }

      return this.mapStrapiToEntity(result.data);
    } catch (error) {
      console.error('Error fetching from Strapi:', error);
      throw error;
    }
  }

  private mapStrapiToEntity(strapiData: StrapiOfficePreviewResponse['data']): OfficePreviewContent {
    const oficinas: OfficeInfo[] = (strapiData.oficinas || [])
      .map((office) => ({
        id: office.id.toString(),
        nombre: office.nombre,
        direccion: office.direccion,
        telefono: office.telefono || undefined,
        horarios: office.horarios || undefined,
        imagen_url: office.imagen_url || undefined,
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
