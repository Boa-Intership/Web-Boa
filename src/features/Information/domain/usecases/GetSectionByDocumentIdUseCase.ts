import { SectionEntity, SectionRepository } from '../entities/SectionEntity';
export class GetSectionByDocumentIdUseCase {
  constructor(private repository: SectionRepository) {}

  async execute(documentId: string): Promise<SectionEntity | null> {
    try {
      return await this.repository.getSectionByDocumentId(documentId);
    } catch (error) {
      console.error('Error fetching sections:', error);
      // Fallback: contenido por defecto
      return this.getDefaultContent();
    }
  }
  private getDefaultContent(): SectionEntity {
    return {
      id: 0,
      documentId: 'default',
      titulo: '¿ Que es Carga general?',
      slug: 'carga-general-que-es',
      orden: 0,
      activo: true,
      contenido_seccion: [],
    };
  }
}
