import { strapiClient } from '@/config';
import {
  CorporateProfileContent,
  CorporateProfileRepository,
} from '../../domain/entities/CorporateProfileContent';

interface StrapiCorporateProfileData {
  id: number;
  titulo: string;
  descripcion: string;
  texto_boton: string;
  enlace_boton: string;
  activo: boolean;
  imagen_url?: string | null;
}

interface StrapiResponse {
  data: StrapiCorporateProfileData;
}

export class StrapiCorporateProfileRepository implements CorporateProfileRepository {
  async getCorporateProfileContent(): Promise<CorporateProfileContent> {
    try {
      // Petición al endpoint de Strapi
      const response = await strapiClient.get<StrapiResponse>('/perfil-corporativo');

      if (!response.data) {
        throw new Error('No se encontró el perfil corporativo');
      }

      return this.mapStrapiToEntity(response.data);
    } catch (error) {
      console.error('Error fetching perfil corporativo:', error);
      throw error;
    }
  }

  private mapStrapiToEntity(strapiData: StrapiCorporateProfileData): CorporateProfileContent {
    return {
      id: strapiData.id.toString(),
      titulo: strapiData.titulo,
      descripcion: strapiData.descripcion,
      textoBoton: strapiData.texto_boton,
      enlaceBoton: strapiData.enlace_boton,
      activo: strapiData.activo,
      imagenUrl: strapiData.imagen_url || null,
    };
  }
}
