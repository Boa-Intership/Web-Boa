import { SectionEntity } from './SectionEntity';
export interface CategoryEntity {
  id: number;
  documentId: string;
  titulo: string;
  slug: string;
  icono?: string | null;
  orden: number;
  activo: boolean;
  seccions: SectionEntity[];
}

export interface CategoryRepository {
  getCategoryByDocumentId(documentId: string): Promise<CategoryEntity | null>;
<<<<<<< HEAD
=======
  // getCategoryBySlug(slug: string): Promise<CategoryEntity | null>;
>>>>>>> develop
}
