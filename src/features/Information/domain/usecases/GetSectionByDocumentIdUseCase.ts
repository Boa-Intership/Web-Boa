import { SectionEntity } from '../entities/SectionEntity';
import { StrapiCargaRepository } from '../../data/repositories/StrapiCargaRepository';

export class GetSectionByDocumentIdUseCase {
  constructor(private repository: StrapiCargaRepository) {}

  async execute(documentId: string): Promise<SectionEntity | null> {
    return await this.repository.getSectionByDocumentId(documentId);
  }
}
