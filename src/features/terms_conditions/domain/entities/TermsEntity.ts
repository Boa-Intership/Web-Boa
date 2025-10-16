import { BlocksContent } from '@strapi/blocks-react-renderer';
export interface TermsEntity {
  id: number;
  titulo: string;
  descripcion: BlocksContent;
  activo: boolean;
  tituloContrato: string;
  aviso: Aviso;
  reglas: Regla[];
}

interface Aviso {
  id: number;
  titulo: string;
  tipo: string;
  contenido: BlocksContent;
}

interface Regla {
  id: number;
  titulo: string;
  contenido: BlocksContent;
}

export interface TermsRepository {
  getTermsContent(): Promise<TermsEntity>;
}
