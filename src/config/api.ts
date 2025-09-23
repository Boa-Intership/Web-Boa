// Configuración global de la API
export const API_CONFIG = {
  // URL base del backend NestJS - usa el proxy de Vite en desarrollo
  BASE_URL: import.meta.env.VITE_API_URL || '/api',
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
    SEND_CODE: '/auth/send-code',
    VALIDATE_CODE: '/auth/validate-code',
    REGISTER: '/auth/register',
  },
};

export default API_CONFIG;
