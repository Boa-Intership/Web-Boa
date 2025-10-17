import { BlocksContent } from '@strapi/blocks-react-renderer';
import { SectionEntity, SectionRepository, ContenidoSeccion } from '../entities/SectionEntity';

export class GetSectionByDocumentIdUseCase {
  constructor(private repository: SectionRepository) {}

  async execute(documentId: string): Promise<SectionEntity | null> {
    try {
      return await this.repository.getSectionByDocumentId(documentId);
    } catch (error) {
      console.error('Error fetching sections:', error);
      // Fallback: contenido por defecto
      return this.getDefaultContent();
    }
  }
  private getDefaultContent(): SectionEntity {
    return {
      id: 1,
      documentId: 'sec1',
      titulo: '¿Qué es Carga general?',
      orden: 1,
      activo: true,
      slug: 'que-es-carga-general',
      contenido_seccion: [
        // {
        //   __component: 'recursos.alerta',
        //   id: 53,
        //   titulo: null,
        //   tipo: 'INFORMACION',
        //   contenido: [
        //     {
        //       type: 'paragraph',
        //       children: [
        //         {
        //           text: 'Las imagenes que se muestran son solo ejemplos y pueden no corresponder exactamente a la carga que usted desea enviar.',
        //           type: 'text',
        //         },
        //       ],
        //     },
        //   ] as BlocksContent[],
        // },
        // {
        //   __component: 'recursos.contenido',
        //   id: 36,
        //   titulo: 'Cargas comunes en carga general',
        //   contenido: [
        //     {
        //       type: 'paragraph',
        //       children: [
        //         {
        //           text: 'Las siguientes cargas son ejemplos generales que se vieron en BoA Cargo',
        //           type: 'text',
        //         },
        //       ],
        //     },
        //   ] as BlocksContent[],
        //   imagen_url: null,
        // },
        // {
        //   __component: 'recursos.imagen',
        //   id: 25,
        //   titulo: 'Bienes manufacturados',
        //   descripcion: 'Ropa, calzado, juguetes',
        //   imagen_url: '/informacioPage/cargaGeneral/GGI_manu.webp',
        // },
        // {
        //   __component: 'recursos.imagen',
        //   id: 26,
        //   titulo: 'Material impreso y papelería',
        //   descripcion: 'Libros, revistas, catálogos',
        //   imagen_url: '/informacioPage/cargaGeneral/GGI_papeleria.webp',
        // },
      ],
    };
  }
}
