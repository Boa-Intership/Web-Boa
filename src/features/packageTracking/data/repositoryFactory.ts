import { MockPackageTrackingRepository } from '@/features/packageTracking/data/MockPackageTrackingRepository';
import type { PackageTrackingRepository } from '@/features/packageTracking/domain/repositories/PackageTrackingRepository';

let singletonRepo: PackageTrackingRepository | null = null;

export const getPackageTrackingRepository = (): PackageTrackingRepository => {
  if (!singletonRepo) singletonRepo = new MockPackageTrackingRepository();
  return singletonRepo;
};
