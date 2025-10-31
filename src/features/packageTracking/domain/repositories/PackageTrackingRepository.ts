import type { FlightEntity, FlightId } from '@/features/packageTracking/domain/entities/Flight';
import type {
  ManifestEntity,
  ManifestId,
} from '@/features/packageTracking/domain/entities/Manifest';
import type { PackageEntity, PackageId } from '@/features/packageTracking/domain/entities/Package';
import type { PackageStatusEntity } from '@/features/packageTracking/domain/entities/PackageStatus';

export interface PackageTrackingRepository {
  getFlights(): Promise<FlightEntity[]>;
  getManifestsByFlight(flightId: FlightId): Promise<ManifestEntity[]>;
  getPackagesByManifest(manifestId: ManifestId): Promise<PackageEntity[]>;
  getPackageHistory(packageId: PackageId): Promise<PackageStatusEntity[]>;
}
