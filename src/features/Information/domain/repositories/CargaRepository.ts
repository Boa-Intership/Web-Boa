export interface CategoriaCarga {
  id: number;
  titulo: string;
  nombre: string;
  descripcion: string;
  icono: string;
  orden: number;
  activo: boolean;
}

export interface SeccionCarga {
  id: number;
  titulo: string;
  contenido: string;
  orden: number;
  activo: boolean;
  contenido_seccion: ContenidoSeccion[];
  categorias_carga: CategoriaCarga;
}

export interface ContenidoSeccion {
  __component: string;
  id: number;
  titulo: string;
  contenido?: string;
  imagen?: Multimedia[];
  icono?: string;
}

export interface Multimedia {
  id: number;
  titulo: string;
  imagen: {
    url: string;
  }[];
  orden: number;
}

export interface CargaRepository {
  getCategorias(): Promise<CategoriaCarga[]>;
  getSeccionesByCategoria(categoriaId: number): Promise<SeccionCarga[]>;
  getCategoriaByNombre(nombre: string): Promise<CategoriaCarga>;
}
