import { useQuery, useQueryClient } from '@tanstack/react-query';

interface UseLandingQueryReturn<T> {
  data: T | undefined;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook reutilizable para queries de landing
 * - Caché infinito (no recarga por tiempo)
 * - Recarga manual con refetch()
 * - Invalidación por componente
 */
export const useLandingQuery = <T>(
  queryKey: readonly string[],
  queryFn: () => Promise<T>
): UseLandingQueryReturn<T> => {
  const queryClient = useQueryClient();

  // Create a properly typed query options object
  const queryOptions = {
    queryKey: [...queryKey] as const,
    queryFn,
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: Number.POSITIVE_INFINITY,
    retry: 1,
  };

  const { data, isLoading, error } = useQuery(queryOptions);

  const refetch = () => {
    queryClient.invalidateQueries({ queryKey: [...queryKey] as const });
  };

  const errorMessage = error instanceof Error ? error.message : null;

  return {
    data: data as T | undefined,
    loading: isLoading,
    error: errorMessage,
    refetch,
  };
};
