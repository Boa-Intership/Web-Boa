export interface NewsContent {
  id: number;
  titulo: string;
  activo: boolean;
  noticias: Noticia[];
}

interface Noticia {
  id: number;
  titulo?: string;
  descripcion?: string;
  activo: boolean;
  imagen_url: string;
  enlace?: string | null;
}

export interface NewContentRepository {
  getNewContent(): Promise<NewsContent>;
}
