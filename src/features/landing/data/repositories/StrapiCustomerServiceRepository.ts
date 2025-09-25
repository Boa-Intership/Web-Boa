import {
  CustomerServiceContent,
  CustomerServiceRepository,
  CustomerServiceItem,
} from '../../domain/entities/CustomerServiceContent';

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
  private readonly baseUrl =
    import.meta.env.VITE_APP_ENV === 'production'
      ? `${import.meta.env.VITE_STRAPI_URL}/api`
      : '/api/cms';

  async getCustomerService(): Promise<CustomerServiceContent> {
    try {
      const response = await fetch(
        `${this.baseUrl}/atencion-clientes?populate[elementos_izquierda]=*&populate[elementos_derecha]=*&filters[activo][$eq]=true&sort=createdAt:desc`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: StrapiCustomerServiceResponse = await response.json();

      if (!result.data || result.data.length === 0) {
        throw new Error('No active customer service found');
      }

      return this.mapStrapiToEntity(result.data[0]);
    } catch (error) {
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
