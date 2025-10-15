export interface CorporateProfileContent {
  id: string;
  titulo: string;
  descripcion: string;
  textoBoton: string;
  enlaceBoton: string;
  activo: boolean;
  imagenUrl?: string | null;
}

export interface CorporateProfileRepository {
  getCorporateProfileContent(): Promise<CorporateProfileContent>;
}
