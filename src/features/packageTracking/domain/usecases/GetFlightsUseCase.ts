import type { PackageTrackingRepository } from '@/features/packageTracking/domain/repositories/PackageTrackingRepository';
import type { FlightEntity } from '@/features/packageTracking/domain/entities/Flight';

export class GetFlightsUseCase {
  constructor(private readonly repo: PackageTrackingRepository) {}
  async execute(): Promise<FlightEntity[]> {
    return this.repo.getFlights();
  }
}
