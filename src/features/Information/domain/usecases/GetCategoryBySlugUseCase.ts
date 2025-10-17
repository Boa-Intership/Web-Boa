import { CategoryEntity, CategoryRepository } from '../entities/CategoryEntity';

export class GetCategoryBySlugUseCase {
  constructor(private readonly repository: CategoryRepository) {}
  async execute(slug: string): Promise<CategoryEntity> {
    try {
      return await this.repository.getCategoryBySlug(slug);
    } catch (error) {
      console.error('Error fetching FAQ content:', error);
      // Fallback: contenido por defecto
      return this.getDefaultContent();
    }
  }
  private getDefaultContent(): CategoryEntity {
    return {
      id: 0,
      documentId: 'default',
      titulo: 'Categoría por defecto',
      slug: 'default',
      icono: null,
      orden: 0,
      activo: true,
      seccions: [],
    };
  }
}
