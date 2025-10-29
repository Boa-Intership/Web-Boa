import type { FlightEntity } from '../domain/entities/Flight';
import type { ManifestEntity } from '../domain/entities/Manifest';
import type { PackageEntity } from '../domain/entities/Package';
import type { PackageStatusEntity } from '../domain/entities/PackageStatus';

// Simple mock dataset inspired by the provided mockups
export const flights: FlightEntity[] = [
  {
    id: 'AA1234-2025-01-16',
    code: 'AA1234',
    date: '2025-01-16',
    route: { origin: 'CBB', destination: 'BOG' },
    cargoType: 'Carga General',
    totalWeightKg: 2450,
    manifestCount: 2,
  },
  {
    id: 'BOA5678-2025-01-15',
    code: 'BOA5678',
    date: '2025-01-15',
    route: { origin: 'VVI', destination: 'LPB' },
    cargoType: 'Electrónicos',
    totalWeightKg: 1350,
    manifestCount: 1,
  },
];

export const manifests: ManifestEntity[] = [
  { id: 'MAN-001-2024', flightId: 'AA1234-2025-01-16', status: 'Cargado', packageCount: 156 },
  { id: 'MAN-002-2024', flightId: 'AA1234-2025-01-16', status: 'Pendiente', packageCount: 87 },
  { id: 'MAN-101-2025', flightId: 'BOA5678-2025-01-15', status: 'Cerrado', packageCount: 64 },
];

export const packages: PackageEntity[] = [
  {
    id: 'PKG001234567',
    manifestId: 'MAN-001-2024',
    sender: 'Empresa ABC S.A.',
    recipient: 'Juan Pérez',
    category: 'Documentos',
    priority: 'Normal',
    status: 'En tránsito',
    weightKg: 2.5,
    dimensions: '30x20x15 cm',
    estimatedDelivery: '2025-01-16',
  },
  {
    id: 'PKG001234568',
    manifestId: 'MAN-001-2024',
    sender: 'Tech Solutions Ltd.',
    recipient: 'María González',
    category: 'Electrónicos',
    priority: 'Urgente',
    status: 'Procesando',
    weightKg: 1.8,
    dimensions: '25x15x10 cm',
    estimatedDelivery: '2025-01-15',
  },
  {
    id: 'PKG009999999',
    manifestId: 'MAN-002-2024',
    sender: 'Empresa Demo',
    recipient: 'Luis López',
    category: 'Documentos',
    priority: 'Normal',
    status: 'Pendiente',
  },
];

export const packageHistory: PackageStatusEntity[] = [
  {
    id: 'H1',
    packageId: 'PKG001234567',
    dateTime: '2025-01-14T09:00:00Z',
    status: 'Creado',
    location: 'Cochabamba (CBB)',
  },
  {
    id: 'H2',
    packageId: 'PKG001234567',
    dateTime: '2025-01-14T15:30:00Z',
    status: 'Procesando',
    location: 'Cochabamba (CBB)',
  },
  {
    id: 'H3',
    packageId: 'PKG001234567',
    dateTime: '2025-01-15T10:00:00Z',
    status: 'En tránsito',
    location: 'La Paz (LPB)',
    note: 'Despachado en vuelo AA1234',
  },
  {
    id: 'H4',
    packageId: 'PKG001234567',
    dateTime: '2025-01-15T22:00:00Z',
    status: 'En escala',
    location: 'Bogotá (BOG)',
  },
  {
    id: 'H5',
    packageId: 'PKG001234567',
    dateTime: '2025-01-16T08:30:00Z',
    status: 'En aduana',
    location: 'Bogotá (BOG)',
  },
];
