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
  getCorporateProfileContent(): Promise<CorporateProfileContent> {
    throw new Error('Method not implemented.');
  }
  async getPerfilCorporativo(): Promise<CorporateProfileContent> {
    try {
      // Petición a tu endpoint de Strapi
      const result = await strapiClient.get<StrapiResponse>('/perfil-corporativo');

      return this.mapStrapiToEntity(result.data);
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
