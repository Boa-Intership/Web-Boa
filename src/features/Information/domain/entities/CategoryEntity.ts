import { SectionEntity } from './SectionEntity';
export interface CategoryEntity {
  id: number;
  documentoId: string;
  titulo: string;
  icono?: string | null;
  orden: number;
  activo: boolean;
  seccions: SectionEntity[];
}

export interface CategoryRepository {
  getCategoryByDocumentId(documentoId: string): Promise<CategoryEntity | null>;
}
