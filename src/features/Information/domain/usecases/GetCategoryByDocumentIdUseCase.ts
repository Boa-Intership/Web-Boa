import { CategoryEntity, CategoryRepository } from '../entities/CategoryEntity';

export class GetCategoryByDocumentIdUseCase {
  constructor(private readonly repository: CategoryRepository) {}

  async execute(documentId: string): Promise<CategoryEntity | null> {
    try {
      // console.log('entro a GetCategoryByDocumentIdUseCase con documentId:', documentId);
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
      slug: 'carga-general',
      icono: 'Inventory2OutlinedIcon',
      orden: 1,
      activo: true,
      seccions: [
        {
          id: 1,
          documentId: 'sec1',
          titulo: '¿Qué es Carga general?',
          orden: 1,
          activo: true,
          slug: 'que-es-carga-general',
          contenido_seccion: [],
        },
      ],
    };
  }
}
