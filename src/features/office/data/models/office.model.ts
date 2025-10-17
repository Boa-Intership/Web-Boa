export interface Horario {
  id: number;
  Dia: string;
  Hora: string;
}

export interface Ubicacion {
  id: number;
  Descripcion: string;
  URL: string;
}

export interface Contacto {
  id: number;
  Numero: string;
}

export interface Oficina {
  id: number;
  Ciudad: string;
  RegionOficinas: 'Nacional' | 'Internacional';
  Email?: string | null;
  Horarios: Horario[];
  Ubicacion: Ubicacion;
  Contacto: Contacto[];
}
