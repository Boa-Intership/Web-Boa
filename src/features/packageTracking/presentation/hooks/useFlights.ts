import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { GetFlightsUseCase } from '@/features/packageTracking/domain/usecases/GetFlightsUseCase';
import { getPackageTrackingRepository } from '@/features/packageTracking/data/repositoryFactory';

export const useFlights = () => {
  const useCase = useMemo(() => new GetFlightsUseCase(getPackageTrackingRepository()), []);

  return useQuery({
    queryKey: ['tracking', 'flights'],
    queryFn: () => useCase.execute(),
  });
};
