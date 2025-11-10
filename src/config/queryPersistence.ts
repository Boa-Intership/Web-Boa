import { QueryClient } from '@tanstack/react-query';

const CACHE_KEY = 'REACT_QUERY_CACHE';
const CACHE_EXPIRY_KEY = 'REACT_QUERY_CACHE_EXPIRY';

interface CacheData {
  queries: Array<{
    queryKey: string;
    state: unknown;
  }>;
}

/**
 * Persistidor de React Query Cache (Solución manual sin dependencies)
 * Guarda el cache en localStorage y lo restaura en recargas
 */
export class QueryCachePersistor {
  static saveCache(queryClient: QueryClient): void {
    try {
      const cache = queryClient.getQueryCache();
      const queries = cache.getAll();

      const cacheData: CacheData = {
        queries: queries.map((query) => ({
          queryKey: JSON.stringify(query.queryKey),
          state: query.state,
        })),
      };

      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
      localStorage.setItem(CACHE_EXPIRY_KEY, String(Date.now() + 24 * 60 * 60 * 1000)); // 24 horas
    } catch (error) {
      console.error('Error saving query cache:', error);
    }
  }

  static restoreCache(queryClient: QueryClient): void {
    try {
      const expiry = localStorage.getItem(CACHE_EXPIRY_KEY);

      // Verificar si el cache ha expirado
      if (!expiry || Date.now() > parseInt(expiry)) {
        localStorage.removeItem(CACHE_KEY);
        localStorage.removeItem(CACHE_EXPIRY_KEY);
        return;
      }

      const cacheData = localStorage.getItem(CACHE_KEY);
      if (!cacheData) return;

      const { queries } = JSON.parse(cacheData) as CacheData;

      queries.forEach(({ queryKey, state }) => {
        const key = JSON.parse(queryKey);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        queryClient.setQueryData(key, (state as any).data);
      });

      console.log('Cache restaurado del localStorage');
    } catch (error) {
      console.error('Error restoring query cache:', error);
    }
  }

  static clearCache(): void {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_EXPIRY_KEY);
  }
}
