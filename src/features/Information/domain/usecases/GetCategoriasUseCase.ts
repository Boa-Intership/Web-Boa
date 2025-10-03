import { CategoriaCarga } from '../entities/Carga';
import { CargaRepository } from '../repositories/CargaRepository';

export class GetCategoriasUseCase {
  constructor(private repository: CargaRepository) {}

  async execute(): Promise<CategoriaCarga[]> {
    return this.repository.getCategorias();
  }
}
