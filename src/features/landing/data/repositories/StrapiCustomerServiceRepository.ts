import {
  CustomerServiceContent,
  CustomerServiceRepository,
  CustomerServiceItem,
} from '../../domain/entities/CustomerServiceContent';
import { strapiClient } from '@/config';

// Tipos para mapear la respuesta de Strapi
interface StrapiCustomerServiceItemData {
  id: number;
  texto: string;
  orden: number;
}

interface StrapiCustomerServiceData {
  titulo: string;
  descripcion?: string;
  image_url?: string;
  texto_boton: string;
  enlace_boton: string;
  elementos_izquierda: {
    data: Array<{
      id: number;
      attributes: StrapiCustomerServiceItemData;
    }>;
  };
  elementos_derecha: {
    data: Array<{
      id: number;
      attributes: StrapiCustomerServiceItemData;
    }>;
  };
}

interface StrapiCustomerServiceResponse {
  data: {
    id: number;
    attributes: StrapiCustomerServiceData;
  };
}

export class StrapiCustomerServiceRepository implements CustomerServiceRepository {
  async getCustomerService(): Promise<CustomerServiceContent> {
    try {
      const result = await strapiClient.get<StrapiCustomerServiceResponse>(
        '/atencion-cliente?populate[elementos_izquierda]=*&populate[elementos_derecha]=*'
      );

      if (!result.data) {
        throw new Error('No customer service found');
      }

      return this.mapStrapiToEntity({
        id: result.data.id,
        ...result.data.attributes,
      });
    } catch (error) {
      console.error('Error fetching from Strapi:', error);
      throw error;
    }
  }

  private mapStrapiToEntity(
    strapiData: StrapiCustomerServiceData & { id: number }
  ): CustomerServiceContent {
    const elementos_izquierda: CustomerServiceItem[] = (strapiData.elementos_izquierda?.data || [])
      .map((item) => ({
        id: item.id.toString(),
        texto: item.attributes.texto,
        orden: item.attributes.orden,
      }))
      .sort((a, b) => a.orden - b.orden);

    const elementos_derecha: CustomerServiceItem[] = (strapiData.elementos_derecha?.data || [])
      .map((item) => ({
        id: item.id.toString(),
        texto: item.attributes.texto,
        orden: item.attributes.orden,
      }))
      .sort((a, b) => a.orden - b.orden);

    return {
      id: strapiData.id.toString(),
      titulo: strapiData.titulo,
      descripcion: strapiData.descripcion,
      imagen_url: strapiData.image_url,
      texto_boton: strapiData.texto_boton,
      enlace_boton: strapiData.enlace_boton,
      activo: true,
      elementos_izquierda,
      elementos_derecha,
    };
  }
}
