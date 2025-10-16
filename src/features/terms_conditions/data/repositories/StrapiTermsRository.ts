import { TermsEntity, TermsRepository } from '../../domain/entities/TermsEntity';
import { strapiClient } from '@/config/httpClient';
import { BlocksContent } from '@strapi/blocks-react-renderer';

interface StrapiTermsData {
  id: number;
  documentId: string;
  titulo: string;
  descripcion: BlocksContent;
  activo: boolean;
  tituloContrato: string;
  aviso: Aviso;
  reglas: Array<{
    id: number;
    titulo: string;
    contenido: BlocksContent;
  }>;
}
interface Aviso {
  id: number;
  titulo: string;
  tipo: string;
  contenido: BlocksContent;
}

interface StrapiResponse {
  data: StrapiTermsData;
  meta: Record<string, unknown>;
}

export class StrapiTermsRepository implements TermsRepository {
  async getTermsContent(): Promise<TermsEntity> {
    try {
      const result = await strapiClient.get<StrapiResponse>(
        '/vista-terminos-condicione?populate=*'
      );
      if (!result.data) {
        throw new Error('No se encontraron datos de términos y condiciones');
      }
      return this.mapStrapiToEntity(result.data);
    } catch (error) {
      console.error('Error fetching terms and conditions from Strapi:', error);
      throw error;
    }
  }

  private mapStrapiToEntity(strapiData: StrapiResponse['data']): TermsEntity {
    return {
      id: strapiData.id,
      titulo: strapiData.titulo,
      descripcion: strapiData.descripcion,
      activo: strapiData.activo,
      tituloContrato: strapiData.tituloContrato,
      aviso: {
        id: strapiData.aviso.id,
        titulo: strapiData.aviso.titulo,
        tipo: strapiData.aviso.tipo,
        contenido: strapiData.aviso.contenido,
      },
      reglas: strapiData.reglas.map((item) => ({
        id: item.id,
        titulo: item.titulo,
        contenido: item.contenido,
      })),
    };
  }
}
