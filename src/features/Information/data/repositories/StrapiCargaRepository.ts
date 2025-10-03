import { httpClient } from '@/config/httpClient';
import { CategoriaCarga, SeccionCarga } from '../../domain/entities/Carga';
import { CargaRepository } from '../../domain/repositories/CargaRepository';

interface StrapiResponse<T> {
  data: {
    id: number;
    attributes: T;
  }[];
}

export class StrapiCargaRepository implements CargaRepository {
  private client = httpClient;

  async getCategorias(): Promise<CategoriaCarga[]> {
    const { data } = await this.client.get<StrapiResponse<Omit<CategoriaCarga, 'id'>>>(
      '/api/categorias-cargas?populate=*'
    );
    return data.data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  }

  async getSeccionesByCategoria(categoriaId: number): Promise<SeccionCarga[]> {
    const { data } = await this.client.get<StrapiResponse<Omit<SeccionCarga, 'id'>>>(
      '/api/seccions',
      {
        params: {
          'filters[categorias_carga][id][$eq]': categoriaId,
          populate: '*',
        },
      }
    );
    return data.data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  }

  async getCategoriaByNombre(nombre: string): Promise<CategoriaCarga> {
    const { data } = await this.client.get<StrapiResponse<Omit<CategoriaCarga, 'id'>>>(
      '/api/categorias-cargas',
      {
        params: {
          'filters[nombre][$eq]': nombre,
          populate: '*',
        },
      }
    );
    const item = data.data[0];
    return {
      id: item.id,
      ...item.attributes,
    };
  }
}
