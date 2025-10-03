import { SeccionCarga } from '../entities/Carga';
import { CargaRepository } from '../repositories/CargaRepository';

export class GetSeccionesByCategoriaUseCase {
  constructor(private repository: CargaRepository) {}

  async execute(categoriaId: number): Promise<SeccionCarga[]> {
    return this.repository.getSeccionesByCategoria(categoriaId);
  }
}
