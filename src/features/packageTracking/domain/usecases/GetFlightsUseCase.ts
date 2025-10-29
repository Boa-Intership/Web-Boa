import type { PackageTrackingRepository } from '../repositories/PackageTrackingRepository';
import type { FlightEntity } from '../entities/Flight';

export class GetFlightsUseCase {
  constructor(private readonly repo: PackageTrackingRepository) {}
  async execute(): Promise<FlightEntity[]> {
    return this.repo.getFlights();
  }
}
