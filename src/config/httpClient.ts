import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { API_CONFIG } from './api';
import { STRAPI_CONFIG } from './strapi';

export interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
  details?: Record<string, unknown>;
}

class HttpClient {
  private readonly client: AxiosInstance;
  private readonly isStrapi: boolean;

  constructor(useStrapi = false) {
    this.isStrapi = useStrapi;
    const config = useStrapi ? STRAPI_CONFIG : API_CONFIG;

    this.client = axios.create({
      baseURL: config.BASE_URL,
      timeout: config.TIMEOUT,
      headers: config.HEADERS,
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor - agregar token de autenticación
    this.client.interceptors.request.use(
      (config) => {
        const token = this.getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        config.headers['ngrok-skip-browser-warning'] = 'true';
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor - manejar errores globalmente
    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError<ApiError>) => {
        this.handleApiError(error);
        return Promise.reject(error);
      }
    );
  }

  private getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  private handleApiError(error: AxiosError<ApiError>): void {
    if (error.response?.status === 401) {
      this.clearAuthToken();
    }

    console.error('API Error:', {
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
      url: error.config?.url,
    });
  }

  private clearAuthToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('rToken');
  }

  public async get<T = unknown>(url: string, config?: AxiosRequestConfig) {
    const response = await this.client.get(url, config);
    return response.data;
  }

  public async getById<T = unknown>(
    resource: string,
    id: number | string,
    params?: Record<string, any>
  ) {
    let url = `${resource}/${id}`;
    if (params) {
      const queryString = new URLSearchParams(params).toString();
      url += `?${queryString}`;
    }
    const response = await this.client.get(url);
    return response.data;
  }

  public async post<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    const response = await this.client.post(url, data, config);
    return response.data;
  }

  public async put<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    const response = await this.client.put(url, data, config);
    return response.data;
  }

  public async patch<T = unknown>(url: string, data?: unknown, config?: AxiosRequestConfig) {
    const response = await this.client.patch(url, data, config);
    return response.data;
  }

  public async delete<T = unknown>(url: string, config?: AxiosRequestConfig) {
    const response = await this.client.delete(url, config);
    return response.data;
  }

  public async uploadFile<T = unknown>(
    url: string,
    file: File,
    onProgress?: (percent: number) => void
  ) {
    const formData = new FormData();
    formData.append('file', file);

    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(percent);
        }
      },
    };

    const response = await this.client.post(url, formData, config);
    return response.data;
  }

  public getAxiosInstance(): AxiosInstance {
    return this.client;
  }
}

// Cliente HTTP para la API principal
export const httpClient = new HttpClient();

// Cliente HTTP para Strapi
export const strapiClient = new HttpClient(true);

// Exportar el cliente principal por defecto
export default httpClient;
