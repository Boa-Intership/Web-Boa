// Entity para el contenido de General Info Section
export interface GeneralInfoItem {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string; // Tipo de icono simplificado
  enlace: string;
  texto_boton: string;
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
