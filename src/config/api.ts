// Configuración global de la API
export const API_CONFIG = {
  // Usa el proxy de Vite para evitar problemas de CORS
  BASE_URL: '/api',
  TIMEOUT: 10000,
  HEADERS: {
    'Content-Type': 'application/json',
  },
};

export default API_CONFIG; 