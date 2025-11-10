// Configuration global API
export const API_CONFIG = {
  // URL base del backend NestJS.
  // En development forzamos '/api' para que Vite dev server pueda aplicar su proxy
  // y evitar problemas de CORS cuando el backend esté en otra host/ip.
  // En production usamos la variable VITE_BACKEND_API_URL si está definida.
  BASE_URL: import.meta.env.DEV
    ? '/api'
    : import.meta.env.VITE_BACKEND_API_URL
      ? `${import.meta.env.VITE_BACKEND_API_URL.replace(/\/+$/, '')}/api`
      : '/api',
  TIMEOUT: 10000,
  HEADERS: {
    'Content-Type': 'application/json',
  },
  // Endpoints common
  ENDPOINTS: {
    AUTH: '/auth',
    TRACKING: '/tracking',
    SEND_CODE: '/auth/send-code',
    VALIDATE_CODE: '/auth/validate-code',
    REGISTER: '/auth/register',
  },
};

export default API_CONFIG;
