export type DiaCorto = 'Lun' | 'Mar' | 'Mié' | 'Jue' | 'Vie' | 'Sáb' | 'Dom';

export interface Itinerario {
  id: string; // p.ej. "OB-800"
  vuelo: string; // "OB-800"
  origenCodigo: string; // "LPB"
  origenNombre: string; // "La Paz"
  destinoCodigo: string; // "VVI"
  destinoNombre: string; // "Santa Cruz"
  salida: string; // "06:30" (24h)
  llegada: string; // "07:45"
  dias: DiaCorto[]; // ["Lun","Mié","Vie"]
}

export const DIAS_ORDEN: DiaCorto[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

export interface Ciudad {
  codigo: string; // "LPB"
  nombre: string; // "La Paz"
}
