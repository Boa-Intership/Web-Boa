import { NewsContent, NewContentRepository } from '../../domain/entities/NewsContent';

export class StaticNewsRepository implements NewContentRepository {
  async getNewContent(): Promise<NewsContent> {
    // Datos por defecto cuando Strapi no está disponible
    return {
      id: 0,
      titulo: 'Noticias',
      activo: true,
      noticias: [
        {
          id: 1,
          imagen_url: 'https://assets.codepen.io/2585/Entertainment.svg',
          titulo: 'Título noticia 1',
          descripcion: 'Descripción de la noticia 1',
          enlace: 'https://ejemplo.com/noticia1',
          activo: true,
        },
        {
          id: 2,
          imagen_url: 'https://assets.codepen.io/2585/Entertainment.svg',
          titulo: 'Título noticia 2',
          descripcion: 'Descripción de la noticia 2',
          enlace: 'https://ejemplo.com/noticia2',
          activo: true,
        },
        {
          id: 3,
          imagen_url: 'https://assets.codepen.io/2585/Entertainment.svg',
          titulo: 'Título noticia 3',
          descripcion: 'Descripción de la noticia 3',
          enlace: 'https://ejemplo.com/noticia3',
          activo: true,
        },
      ],
    };
  }
}
