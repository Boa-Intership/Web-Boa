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
        descripcion:
          'Según la Asociación de Transporte Aéreo Internacional (IATA), la carga se puede clasificar en carga general y carga especial, además de distinguir entre mercancías peligrosas y no restringidas. La carga especial abarca tipos como la perecedera, frágil y animales vivos, cada una con requisitos específicos de manejo, embalaje y transporte.',
        categorias_cargas: [
          {
            id: 0,
            documentId: 'cat1',
            titulo: 'Carga General',
            slug: 'carga-general',
            icono: 'Inventory2OutlinedIcon',
            orden: 1,
            activo: true,
            seccions: [],
          },
        ],
      },
    ];
  }
}
