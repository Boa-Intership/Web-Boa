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

interface StrapiCustomerServiceResponse {
  data: {
    id: number;
    documentId: string;
    titulo: string;
    descripcion: string;
    image_url: string | null;
    texto_boton: string;
    enlace_boton: string;
    activo: boolean;
    elementos_izquierda: Array<{
      id: number;
      texto: string;
      orden: number;
    }>;
    elementos_derecha: Array<{
      id: number;
      texto: string;
      orden: number;
    }>;
  };
  meta: Record<string, unknown>;
}

export class StrapiCustomerServiceRepository implements CustomerServiceRepository {
  async getCustomerService(): Promise<CustomerServiceContent> {
    try {
      const result = await strapiClient.get<StrapiCustomerServiceResponse>(
        '/atencion-cliente?populate=*'
      );

      if (!result.data) {
        throw new Error('No customer service found');
      }

      return this.mapStrapiToEntity(result.data);
    } catch (error) {
      console.error('Error fetching from Strapi:', error);
      throw error;
    }
  }

  private mapStrapiToEntity(
    strapiData: StrapiCustomerServiceResponse['data']
  ): CustomerServiceContent {
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
      imagen_url: strapiData.image_url || undefined,
      texto_boton: strapiData.texto_boton,
      enlace_boton: strapiData.enlace_boton,
      activo: strapiData.activo,
      elementos_izquierda,
      elementos_derecha,
    };
  }
}
