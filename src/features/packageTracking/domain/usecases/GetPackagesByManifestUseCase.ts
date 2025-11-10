import type { PackageTrackingRepository } from '@/features/packageTracking/domain/repositories/PackageTrackingRepository';
import type { PackageEntity } from '@/features/packageTracking/domain/entities/Package';
import type { ManifestId } from '@/features/packageTracking/domain/entities/Manifest';

export class GetPackagesByManifestUseCase {
  constructor(private readonly repo: PackageTrackingRepository) {}
  async execute(manifestId: ManifestId): Promise<PackageEntity[]> {
    return this.repo.getPackagesByManifest(manifestId);
  }
}
