import {
  CustomerServiceContent,
  CustomerServiceRepository,
  CustomerServiceItem,
} from '../../domain/entities/CustomerServiceContent';
import { strapiClient, STRAPI_CONFIG } from '@/config';

// Tipos para mapear la respuesta de Strapi
interface StrapiCustomerServiceItemData {
  id: number;
  texto: string;
  orden: number;
}

interface StrapiCustomerServiceData {
  id: number;
  titulo: string;
  descripcion?: string;
  image_url?: string;
  texto_boton: string;
  enlace_boton: string;
  activo: boolean;
  elementos_izquierda: StrapiCustomerServiceItemData[];
  elementos_derecha: StrapiCustomerServiceItemData[];
}

interface StrapiCustomerServiceResponse {
  data: StrapiCustomerServiceData[];
}

export class StrapiCustomerServiceRepository implements CustomerServiceRepository {
  async getCustomerService(): Promise<CustomerServiceContent> {
    try {
      const result = await strapiClient.get<StrapiCustomerServiceResponse>(
        '/atencion-clientes?populate[elementos_izquierda]=*&populate[elementos_derecha]=*&filters[activo][$eq]=true&sort=createdAt:desc'
      );

      if (!result.data || result.data.length === 0) {
        if (STRAPI_CONFIG.IS_PRODUCTION) {
          console.info('No active customer service found in Strapi, using fallback data');
          return fallbackData.customerService;
        }
        throw new Error('No active customer service found');
      }

      return this.mapStrapiToEntity(result.data[0]);
    } catch (error) {
      if (STRAPI_CONFIG.IS_PRODUCTION) {
        console.warn('Error fetching from Strapi, using fallback data:', error);
        return fallbackData.customerService;
      }
      console.error('Error fetching from Strapi:', error);
      throw error;
    }
  }

  private mapStrapiToEntity(strapiData: StrapiCustomerServiceData): CustomerServiceContent {
    const elementos_izquierda: CustomerServiceItem[] = (strapiData.elementos_izquierda || [])
      .map((item) => ({
        id: item.id.toString(),
        texto: item.texto,
        orden: item.orden,
      }))
      .sort((a, b) => a.orden - b.orden);

    const elementos_derecha: CustomerServiceItem[] = (strapiData.elementos_derecha || [])
      .map((item) => ({
        id: item.id.toString(),
        texto: item.texto,
        orden: item.orden,
      }))
      .sort((a, b) => a.orden - b.orden);

    return {
      id: strapiData.id.toString(),
      titulo: strapiData.titulo,
      descripcion: strapiData.descripcion,
      imagen_url: strapiData.image_url,
      texto_boton: strapiData.texto_boton,
      enlace_boton: strapiData.enlace_boton,
      activo: strapiData.activo,
      elementos_izquierda,
      elementos_derecha,
    };
  }
}
