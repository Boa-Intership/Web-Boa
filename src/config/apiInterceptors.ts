import { AxiosError } from 'axios';
import { httpClient } from './httpClient';
import { authService } from '../features/Auth/data/auth.service';

/**
 * Configuración avanzada de interceptores para manejo automático de tokens
 */
export class ApiInterceptors {
  private isRefreshing = false;
  private failedQueue: Array<{
    resolve: (value: unknown) => void;
    reject: (reason?: unknown) => void;
  }> = [];

  constructor() {
    this.setupResponseInterceptor();
  }

  private setupResponseInterceptor(): void {
    httpClient.getAxiosInstance().interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as any;

        if (error.response?.status === 401 && !originalRequest._retry) {
          if (this.isRefreshing) {
            // Si ya estamos refrescando, agregar a la cola
            return new Promise((resolve, reject) => {
              this.failedQueue.push({ resolve, reject });
            })
              .then((token) => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return httpClient.getAxiosInstance()(originalRequest);
              })
              .catch((err) => {
                return Promise.reject(err);
              });
          }

          originalRequest._retry = true;
          this.isRefreshing = true;

          try {
            const response = await authService.refreshToken();
            const { accessToken } = response.data;

            // Procesar cola de peticiones fallidas
            this.processQueue(null, accessToken);

            // Reintentar petición original
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return httpClient.getAxiosInstance()(originalRequest);
          } catch (refreshError) {
            // Si el refresh falla, limpiar tokens y redirigir al login
            this.processQueue(refreshError, null);
            authService.logout();
            window.location.href = '/login';
            return Promise.reject(refreshError);
          } finally {
            this.isRefreshing = false;
          }
        }

        return Promise.reject(error);
      }
    );
  }

  private processQueue(error: unknown, token: string | null): void {
    this.failedQueue.forEach(({ resolve, reject }) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });

    this.failedQueue = [];
  }
}

// Inicializar interceptores automáticamente
export const apiInterceptors = new ApiInterceptors();
