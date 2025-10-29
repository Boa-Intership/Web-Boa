import type { PackageId } from './Package';

export interface PackageStatusEntity {
  id: string; // unique per status entry
  packageId: PackageId;
  dateTime: string; // ISO datetime
  status:
    | 'Creado'
    | 'Procesando'
    | 'En tránsito'
    | 'En escala'
    | 'En aduana'
    | 'Entregado'
    | 'Incidencia';
  location?: string; // e.g., "Cochabamba (CBB)"
  note?: string;
}
