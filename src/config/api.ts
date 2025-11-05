// Configuration global API
export const API_CONFIG = {
  // URL base del backend NestJS - usa el proxy de Vite en development
  BASE_URL: import.meta.env.VITE_BACKEND_API_URL
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
