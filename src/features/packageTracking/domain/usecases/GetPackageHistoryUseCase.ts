import type { PackageTrackingRepository } from '../repositories/PackageTrackingRepository';
import type { PackageStatusEntity } from '../entities/PackageStatus';
import type { PackageId } from '../entities/Package';

export class GetPackageHistoryUseCase {
  constructor(private readonly repo: PackageTrackingRepository) {}
  async execute(packageId: PackageId): Promise<PackageStatusEntity[]> {
    return this.repo.getPackageHistory(packageId);
  }
}
