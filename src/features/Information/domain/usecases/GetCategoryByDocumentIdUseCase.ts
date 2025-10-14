import { CategoryEntity } from '../entities/CategoryEntity';
import { StrapiCargaRepository } from '../../data/repositories/StrapiCargaRepository';

export class GetCategoryByDocumentIdUseCase {
  constructor(private repository: StrapiCargaRepository) {}

  async execute(documentId: string): Promise<CategoryEntity | null> {
    return await this.repository.getCategoryByDocumentId(documentId);
  }
}
