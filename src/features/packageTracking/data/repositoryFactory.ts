import { MockPackageTrackingRepository } from './MockPackageTrackingRepository';
import type { PackageTrackingRepository } from '../domain/repositories/PackageTrackingRepository';

let singletonRepo: PackageTrackingRepository | null = null;

export const getPackageTrackingRepository = (): PackageTrackingRepository => {
  if (!singletonRepo) singletonRepo = new MockPackageTrackingRepository();
  return singletonRepo;
};
