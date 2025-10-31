import type { ManifestId } from '@/features/packageTracking/domain/entities/Manifest';

export interface PackageEntity {
  id: string; // tracking code e.g., "PKG001234567"
  manifestId: ManifestId;
  sender: string;
  recipient: string;
  category: string; // e.g., "Electrónicos", "Documentos"
  priority: 'Normal' | 'Urgente';
  status: 'Procesando' | 'En tránsito' | 'Entregado' | 'Retrasado' | 'Pendiente';
  weightKg?: number;
  dimensions?: string; // e.g., "30x20x15 cm"
  estimatedDelivery?: string; // ISO date
}

export type PackageId = PackageEntity['id'];
