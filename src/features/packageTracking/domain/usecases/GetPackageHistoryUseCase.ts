import type { PackageTrackingRepository } from '@/features/packageTracking/domain/repositories/PackageTrackingRepository';
import type { PackageStatusEntity } from '@/features/packageTracking/domain/entities/PackageStatus';
import type { PackageId } from '@/features/packageTracking/domain/entities/Package';

export class GetPackageHistoryUseCase {
  constructor(private readonly repo: PackageTrackingRepository) {}
  async execute(packageId: PackageId): Promise<PackageStatusEntity[]> {
    return this.repo.getPackageHistory(packageId);
  }
}
