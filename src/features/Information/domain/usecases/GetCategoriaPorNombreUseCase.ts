import { CategoriaCarga } from '../entities/Carga';
import { CargaRepository } from '../repositories/CargaRepository';

export class GetCategoriaPorNombreUseCase {
  constructor(private repository: CargaRepository) {}

  async execute(nombre: string): Promise<CategoriaCarga> {
    return this.repository.getCategoriaByNombre(nombre);
  }
}
