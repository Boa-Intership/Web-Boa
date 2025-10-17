import type { BlocksContent } from '@strapi/blocks-react-renderer';

export interface TipoCarga {
  titulo: string;
  descripcion?: string;
  categorias_cargas: CategoriaCarga[];
}

export interface CategoriaCarga {
  id: number;
  documentoId: string;
  titulo: string;
  icono?: string | null;
  orden: number;
  activo: boolean;
  seccions: SeccionCarga[];
}

export interface SeccionCarga {
  id: number;
  documentoId: string;
  titulo: string;
  orden: number;
  activo: boolean;
  contenido_seccion: ContenidoSeccion[];
}

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

export interface CargaRepository {
  getCargaContent(): Promise<TipoCarga>;
}

export const cargaStrapi: Record<string, TipoCarga> = {
  ejemplo: {
    titulo: 'Tipos de carga',
    descripcion:
      'De acuerdo con la IATA, la carga transportada por vía aérea se clasifica en dos grandes categorías: carga general y carga especial. Esta última comprende diversos subgrupos con requisitos específicos.',
    categorias_cargas: [
      {
        id: 1,
        documentoId: 'cat1',
        titulo: 'Carga General',
        icono: 'Inventory2OutlinedIcon',
        orden: 1,
        activo: true,
        seccions: [
          {
            id: 1,
            documentoId: 'sec1',
            titulo: '¿Qué es Carga General?',
            orden: 1,
            activo: true,
            contenido_seccion: [
              {
                __component: 'categorias.contenido',
                id: 2,
                titulo: 'Carga General',
                contenido: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'esta es ',
                        type: 'text',
                      },
                      {
                        bold: true,
                        text: 'carga general',
                        type: 'text',
                      },
                    ],
                  },
                ],
                imagen_url: '/informacioPage/cargaGeneral/GGI_papeleria.webp',
              },
              {
                __component: 'categorias.alerta',
                id: 1,
                titulo: '',
                tipo_alerta: 'ADVERTENCIA',
                contenido: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'La carga dañada o embalada en forma inapropiada con señales de haber estado filtrando, sea esta carga general o mercancías peligrosas no será aceptada para el transporte.',
                        type: 'text',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            documentoId: 'sec2',
            titulo: 'Requisitos Generales para el transporte',
            orden: 1,
            activo: true,
            contenido_seccion: [],
          },
        ],
      },
      {
        id: 2,
        documentoId: 'cat2',
        titulo: 'Animales Vivos',
        icono: 'PetsOutlinedIcon',
        orden: 2,
        activo: true,
        seccions: [],
      },
      {
        id: 3,
        documentoId: 'cat3',
        titulo: 'Perecederos',
        icono: 'SetMealOutlinedIcon',
        orden: 3,
        activo: true,
        seccions: [
          {
            id: 1,
            documentoId: 'sec3',
            titulo: 'Recomendaciones de embalaje',
            orden: 1,
            activo: true,
            contenido_seccion: [
              {
                __component: 'categorias.contenido',
                id: 2,
                titulo: 'Concepto de Carga General',
                contenido: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'La carga general es aquella que no requiere condiciones especiales para su transporte.',
                        type: 'text',
                      },
                    ],
                  },
                ],
              },
              {
                __component: 'categorias.alerta',
                id: 1,
                titulo: 'Importante',
                tipo_alerta: 'ERROR',
                contenido: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'La carga general es aquella que no requiere condiciones especiales para su transporte.',
                        type: 'text',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            documentoId: 'sec2',
            titulo: 'Requisitos Generales para el transporte',
            orden: 1,
            activo: true,
            contenido_seccion: [],
          },
        ],
      },
    ],
  },
};
