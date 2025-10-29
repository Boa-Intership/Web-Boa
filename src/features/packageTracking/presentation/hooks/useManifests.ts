import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { GetManifestsByFlightUseCase } from '../../domain/usecases/GetManifestsByFlightUseCase';
import { getPackageTrackingRepository } from '../../data/repositoryFactory';

export const useManifests = (flightId: string) => {
  const useCase = useMemo(
    () => new GetManifestsByFlightUseCase(getPackageTrackingRepository()),
    []
  );

  return useQuery({
    queryKey: ['tracking', 'manifests', flightId],
    queryFn: () => useCase.execute(flightId),
    enabled: !!flightId,
  });
};
