import type { PackageTrackingRepository } from '@/features/packageTracking/domain/repositories/PackageTrackingRepository';
import type { FlightEntity, FlightId } from '@/features/packageTracking/domain/entities/Flight';
import type {
  ManifestEntity,
  ManifestId,
} from '@/features/packageTracking/domain/entities/Manifest';
import type { PackageEntity, PackageId } from '@/features/packageTracking/domain/entities/Package';
import type { PackageStatusEntity } from '@/features/packageTracking/domain/entities/PackageStatus';
import { flights, manifests, packages, packageHistory } from '@/features/packageTracking/data/mock';

const delay = (ms = 300) => new Promise((res) => setTimeout(res, ms));

export class MockPackageTrackingRepository implements PackageTrackingRepository {
  async getFlights(): Promise<FlightEntity[]> {
    await delay();
    return flights;
  }
  async getManifestsByFlight(flightId: FlightId): Promise<ManifestEntity[]> {
    await delay();
    return manifests.filter((m) => m.flightId === flightId);
  }
  async getPackagesByManifest(manifestId: ManifestId): Promise<PackageEntity[]> {
    await delay();
    return packages.filter((p) => p.manifestId === manifestId);
  }
  async getPackageHistory(packageId: PackageId): Promise<PackageStatusEntity[]> {
    await delay();
    return packageHistory.filter((h) => h.packageId === packageId);
  }
}
