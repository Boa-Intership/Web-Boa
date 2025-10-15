import { NewsContent, NewContentRepository } from '../entities/NewsContent';

export class GetNewUseCase {
  constructor(private readonly repository: NewContentRepository) {}
  async execute(): Promise<NewsContent> {
    try {
      return await this.repository.getNewContent();
    } catch (error) {
      console.error('Error in GetNewUseCase:', error);
      return this.getDefaultNewContent();
    }
  }
  private getDefaultNewContent(): NewsContent {
    return {
      id: 0,
      titulo: 'Noticias',
      activo: true,
      noticias: [
        {
          id: 1,
          imagen_url: 'https://assets.codepen.io/2585/Entertainment.svg',
          titulo: 'Título noticia 4',
          descripcion: 'Descripción de la noticia 4',
          enlace: 'https://ejemplo.com/noticia4',
          activo: true,
        },
        {
          id: 2,
          imagen_url: 'https://assets.codepen.io/2585/Entertainment.svg',
          titulo: 'Título noticia 4',
          descripcion: 'Descripción de la noticia 4',
          enlace: 'https://ejemplo.com/noticia4',
          activo: true,
        },
      ],
    };
  }
}
