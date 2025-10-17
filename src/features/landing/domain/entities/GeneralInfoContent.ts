// Entity para el contenido de General Info Section
export interface GeneralInfoItem {
  id: string;
  titulo: string;
  descripcion: string;
  imagen?: string; // URL de la imagen de fondo
  enlace: string;
  orden: number;
}

export interface GeneralInfoContent {
  id: string;
  titulo: string;
  subtitulo?: string;
  activo: boolean;
  elementos: GeneralInfoItem[];
}

// Repository contract
export interface GeneralInfoRepository {
  getGeneralInfo(): Promise<GeneralInfoContent>;
}
