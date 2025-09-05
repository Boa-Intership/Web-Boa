import axios from 'axios';
import { API_CONFIG } from '../../../config/api';

// Instancia de axios configurada
const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

// Servicio simple para probar la API
export const homeApi = {
  // Probar conexión con la API
  testApiConnection: async (): Promise<any> => {
    try {
      const response = await apiClient.get('/openapi');
      return {
        success: true,
        data: response.data,
        message: 'API conectada correctamente',
      };
    } catch (error) {
      console.error('Error conectando con la API:', error);
      return {
        success: false,
        data: null,
        message: 'Error al conectar con la API',
      };
    }
  },
};

export default homeApi;
