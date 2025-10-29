import type { PackageTrackingRepository } from '../repositories/PackageTrackingRepository';
import type { ManifestEntity } from '../entities/Manifest';
import type { FlightId } from '../entities/Flight';

export class GetManifestsByFlightUseCase {
  constructor(private readonly repo: PackageTrackingRepository) {}
  async execute(flightId: FlightId): Promise<ManifestEntity[]> {
    return this.repo.getManifestsByFlight(flightId);
  }
}
