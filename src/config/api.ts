// Configuración global de la API
export const API_CONFIG = {
  // URL base del backend NestJS
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  TIMEOUT: 10000,
  HEADERS: {
    'Content-Type': 'application/json',
  },
  // Endpoints comunes
  ENDPOINTS: {
    AUTH: '/auth',
    USERS: '/users',
    CARGO: '/cargo',
    SHIPMENTS: '/shipments',
    TRACKING: '/tracking',
  },
};

export default API_CONFIG;
