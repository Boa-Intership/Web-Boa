import { StrapiCargaRepository } from '../../data/repositories/StrapiCargaRepository';
import { ViewCategoriesEntity, viewCategoriesRepository } from '../entities/ViewCategoriesEntity';

export class GetViewCategoryUseCase {
  constructor(private readonly repository: viewCategoriesRepository) {}
  async execute(): Promise<ViewCategoriesEntity[]> {
    try {
      return await this.repository.getViewCategories();
    } catch (error) {
      console.error('Error fetching perfil corporativo:', error);
      // Fallback: contenido por defecto
      return this.getDefaultContent();
    }
  }

  private getDefaultContent(): ViewCategoriesEntity[] {
    return [
      {
        id: 0,
        titulo: 'Tipos de Carga',
        descripcion: 'Descripción por defecto de tipos de carga',
        categorias_cargas: [],
      },
    ];
  }
}
