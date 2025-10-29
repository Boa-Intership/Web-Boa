import type { FlightEntity, FlightId } from '../entities/Flight';
import type { ManifestEntity, ManifestId } from '../entities/Manifest';
import type { PackageEntity, PackageId } from '../entities/Package';
import type { PackageStatusEntity } from '../entities/PackageStatus';

export interface PackageTrackingRepository {
  getFlights(): Promise<FlightEntity[]>;
  getManifestsByFlight(flightId: FlightId): Promise<ManifestEntity[]>;
  getPackagesByManifest(manifestId: ManifestId): Promise<PackageEntity[]>;
  getPackageHistory(packageId: PackageId): Promise<PackageStatusEntity[]>;
}
