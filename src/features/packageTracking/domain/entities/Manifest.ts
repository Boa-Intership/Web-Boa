import type { FlightId } from '@/features/packageTracking/domain/entities/Flight';

export interface ManifestEntity {
  id: string; // e.g., "MAN-001-2024"
  flightId: FlightId;
  status: 'Cargado' | 'En tránsito' | 'Arribado' | 'Cerrado' | 'Pendiente';
  packageCount: number;
  totalWeightKg?: number;
}

export type ManifestId = ManifestEntity['id'];
