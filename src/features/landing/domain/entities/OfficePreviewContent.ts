// Entity para el contenido de Office Preview Section
export interface OfficeInfo {
  id: string;
  nombre: string;
  direccion: string;
  telefono?: string;
  horarios?: string;
  imagen_url?: string;
  orden: number;
}

export interface OfficePreviewContent {
  id: string;
  titulo: string;
  descripcion?: string;
  texto_boton: string;
  enlace_boton: string;
  activo: boolean;
  oficinas: OfficeInfo[];
}

// Repository contract
export interface OfficePreviewRepository {
  getOfficePreview(): Promise<OfficePreviewContent>;
}
