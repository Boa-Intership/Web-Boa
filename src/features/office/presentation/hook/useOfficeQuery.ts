import { useQuery } from '@tanstack/react-query';

interface UseOfficeQueryReturn<T> {
  data: T;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useOfficeQuery = <T extends unknown[]>(
  queryKey: readonly string[],
  queryFn: () => Promise<T>
): UseOfficeQueryReturn<T> => {
  const { data, isLoading, error, refetch } = useQuery<T>({
    queryKey: [...queryKey] as const,
    queryFn,
    staleTime: Number.POSITIVE_INFINITY,
    cacheTime: Number.POSITIVE_INFINITY,
    retry: 1,
  });

  return {
    data: data ?? ([] as T),
    loading: isLoading,
    error: error instanceof Error ? error.message : null,
    refetch,
  };
};
