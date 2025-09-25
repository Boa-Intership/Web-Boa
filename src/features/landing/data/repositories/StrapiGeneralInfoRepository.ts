import {
  GeneralInfoContent,
  GeneralInfoRepository,
  GeneralInfoItem,
} from '../../domain/entities/GeneralInfoContent';

// Tipos para mapear la respuesta de Strapi
interface StrapiGeneralInfoItemData {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string;
  enlace: string;
  texto_boton: string;
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
  private readonly baseUrl =
    import.meta.env.VITE_APP_ENV === 'production'
      ? `${import.meta.env.VITE_STRAPI_URL}/api`
      : '/api/cms';

  async getGeneralInfo(): Promise<GeneralInfoContent> {
    try {
      const response = await fetch(
        `${this.baseUrl}/informacion-generals?populate=elementos&filters[activo][$eq]=true&sort=createdAt:desc`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: StrapiGeneralInfoResponse = await response.json();

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
    const elementos: GeneralInfoItem[] = (strapiData.elementos || []).map((item) => ({
      id: item.id.toString(),
      titulo: item.titulo,
      descripcion: item.descripcion,
      icono: item.icono,
      enlace: item.enlace,
      texto_boton: item.texto_boton,
      orden: item.orden,
    }));

    return {
      id: strapiData.id.toString(),
      titulo: strapiData.titulo,
      subtitulo: strapiData.subtitulo,
      activo: strapiData.activo,
      elementos,
    };
  }
}
