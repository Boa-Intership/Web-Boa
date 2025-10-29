import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // Temporalmente comentado
import { useState, ReactNode, useEffect } from 'react';
import { QueryCachePersistor } from '@/config/queryPersistence';

interface QueryProviderProps {
  children: ReactNode;
}

interface ApiError {
  response?: {
    status?: number;
  };
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Tiempo que los datos se consideran "frescos" antes de refetch
            // Para landing: usar infinito para no refetch automático
            staleTime: Infinity,
            // Tiempo que los datos permanecen en cache
            // Para landing: usar infinito para mantener en caché
            cacheTime: Infinity,
            // Reintentar en caso de error
            retry: (failureCount, error) => {
              const apiError = error as ApiError;
              // No reintentar para errores 4xx
              if (
                apiError?.response?.status &&
                apiError.response.status >= 400 &&
                apiError.response.status < 500
              ) {
                return false;
              }
              return failureCount < 3;
            },
            // Refetch cuando la ventana vuelve a tener foco
            refetchOnWindowFocus: false,
            // Refetch cuando se reconecta a internet
            refetchOnReconnect: true,
          },
          mutations: {
            // Reintentar mutaciones fallidas
            retry: 1,
          },
        },
      })
  );

  // Restaurar cache al montar
  useEffect(() => {
    QueryCachePersistor.restoreCache(queryClient);
  }, [queryClient]);

  // Guardar cache antes de desmontar
  useEffect(() => {
    const handleBeforeUnload = () => {
      QueryCachePersistor.saveCache(queryClient);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // Guardar cuando se desmonta el proveedor
      QueryCachePersistor.saveCache(queryClient);
    };
  }, [queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Solo mostrar devtools en desarrollo */}
      {/* {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />} */}
    </QueryClientProvider>
  );
};
