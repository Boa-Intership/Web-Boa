import {
  GeneralInfoContent,
  GeneralInfoRepository,
  GeneralInfoItem,
} from '../../domain/entities/GeneralInfoContent';
import { strapiClient } from '@config';

// Tipos para mapear la respuesta de Strapi
interface StrapiImageData {
  id: number;
  documentId: string;
  url: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: Record<string, { url: string }>;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  createdAt: string;
  updatedAt: string;
}

interface StrapiGeneralInfoItemData {
  id: number;
  titulo: string;
  descripcion: string;
  imagen?: StrapiImageData;
  enlace: string;
  orden: number;
}

interface StrapiGeneralInfoData {
  id: number;
  titulo: string;
  subtitulo?: string;
  activo: boolean;
  elementos: StrapiGeneralInfoItemData[];
}

interface StrapiGeneralInfoResponse {
  data: StrapiGeneralInfoData[];
}

export class StrapiGeneralInfoRepository implements GeneralInfoRepository {
  async getGeneralInfo(): Promise<GeneralInfoContent> {
    try {
      const result = await strapiClient.get<StrapiGeneralInfoResponse>(
        '/informacion-generals?populate[elementos][populate][0]=imagen&filters[activo][$eq]=true&sort=createdAt:desc'
      );

      if (!result.data || result.data.length === 0) {
        throw new Error('No active general info found');
      }

      return this.mapStrapiToEntity(result.data[0]);
    } catch (error) {
      console.error('Error fetching from Strapi:', error);
      throw error;
    }
  }

  private mapStrapiToEntity(strapiData: StrapiGeneralInfoData): GeneralInfoContent {
    const elementos: GeneralInfoItem[] = (strapiData.elementos || [])
      .map((item) => ({
        id: item.id.toString(),
        titulo: item.titulo,
        descripcion: item.descripcion,
        //imagen: item.imagen?.url ? `http://localhost:1337${item.imagen.url}` : undefined,
        imagen: item.imagen?.formats?.small?.url || item.imagen?.url || undefined,
        enlace: item.enlace,
        orden: item.orden,
      }))
      .sort((a, b) => a.orden - b.orden);

    return {
      id: strapiData.id.toString(),
      titulo: strapiData.titulo,
      subtitulo: strapiData.subtitulo,
      activo: strapiData.activo,
      elementos,
    };
  }
}
