import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, ReactNode } from 'react';

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
            staleTime: 5 * 60 * 1000, // 5 minutos
            // Tiempo que los datos permanecen en cache
            cacheTime: 10 * 60 * 1000, // 10 minutos
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

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Solo mostrar devtools en desarrollo */}
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};
