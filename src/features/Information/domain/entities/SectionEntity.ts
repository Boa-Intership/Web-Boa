import type { BlocksContent } from '@strapi/blocks-react-renderer';
export interface ContenidoSeccion {
  __component: string;
  id: number;
  //contenido,requisitos
  titulo: string;
  contenido?: BlocksContent | null;
  icono?: string | null;
  //galeria
  imagen_url?: string | null;
  descripcion?: string | null;
  //alerta
  tipo_alerta?: 'INFORMACION' | 'ADVERTENCIA' | 'ERROR' | 'EXITO' | null;
}

export interface SectionEntity {
  id: number;
  documentoId: string;
  titulo: string;
  orden: number;
  activo: boolean;
  contenido_seccion: ContenidoSeccion[];
}

export interface SectionRepository {
  getSectionByDocumentId(documentoId: string): Promise<SectionEntity | null>;
}
