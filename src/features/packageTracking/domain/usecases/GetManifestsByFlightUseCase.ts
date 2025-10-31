import type { PackageTrackingRepository } from '@/features/packageTracking/domain/repositories/PackageTrackingRepository';
import type { ManifestEntity } from '@/features/packageTracking/domain/entities/Manifest';
import type { FlightId } from '@/features/packageTracking/domain/entities/Flight';

export class GetManifestsByFlightUseCase {
  constructor(private readonly repo: PackageTrackingRepository) {}
  async execute(flightId: FlightId): Promise<ManifestEntity[]> {
    return this.repo.getManifestsByFlight(flightId);
  }
}
