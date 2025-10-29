import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { GetPackageHistoryUseCase } from '../../domain/usecases/GetPackageHistoryUseCase';
import { getPackageTrackingRepository } from '../../data/repositoryFactory';

export const usePackageHistory = (packageId: string) => {
  const useCase = useMemo(
    () => new GetPackageHistoryUseCase(getPackageTrackingRepository()),
    []
  );

  return useQuery({
    queryKey: ['tracking', 'history', packageId],
    queryFn: () => useCase.execute(packageId),
    enabled: !!packageId,
  });
};
