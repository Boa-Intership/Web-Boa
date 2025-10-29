import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { GetPackagesByManifestUseCase } from '../../domain/usecases/GetPackagesByManifestUseCase';
import { getPackageTrackingRepository } from '../../data/repositoryFactory';

export const usePackages = (manifestId: string) => {
  const useCase = useMemo(
    () => new GetPackagesByManifestUseCase(getPackageTrackingRepository()),
    []
  );

  return useQuery({
    queryKey: ['tracking', 'packages', manifestId],
    queryFn: () => useCase.execute(manifestId),
    enabled: !!manifestId,
  });
};
