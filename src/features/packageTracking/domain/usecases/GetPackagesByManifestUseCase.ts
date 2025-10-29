import type { PackageTrackingRepository } from '../repositories/PackageTrackingRepository';
import type { PackageEntity } from '../entities/Package';
import type { ManifestId } from '../entities/Manifest';

export class GetPackagesByManifestUseCase {
  constructor(private readonly repo: PackageTrackingRepository) {}
  async execute(manifestId: ManifestId): Promise<PackageEntity[]> {
    return this.repo.getPackagesByManifest(manifestId);
  }
}
