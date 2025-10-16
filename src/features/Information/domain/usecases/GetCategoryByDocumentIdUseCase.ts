import { CategoryEntity, CategoryRepository } from '../entities/CategoryEntity';

export class GetCategoryByDocumentIdUseCase {
  constructor(private readonly repository: CategoryRepository) {}

  async execute(documentId: string): Promise<CategoryEntity | null> {
    try {
      return await this.repository.getCategoryByDocumentId(documentId);
    } catch (error) {
      console.error('Error fetching categorias:', error);
      // Fallback: contenido por defecto
      return this.getDefaultContent();
    }
  }
  private getDefaultContent(): CategoryEntity {
    return {
      id: 0,
      documentId: 'default',
      titulo: 'Carga general',
      icono: '',
      orden: 0,
      activo: true,
      seccions: [],
    };
  }
}
