import { CategoryEntity } from './CategoryEntity';
export interface ViewCategoriesEntity {
  id: number;
  titulo: string;
  descripcion?: string;
  categorias_cargas: CategoryEntity[];
}

export interface viewCategoriesRepository {
  getViewCategories(): Promise<ViewCategoriesEntity[]>;
}
