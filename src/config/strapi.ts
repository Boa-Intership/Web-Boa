// Configuración centralizada para Strapi CMS
export const STRAPI_CONFIG = {
  // URL base para Strapi en producción vs desarrollo
  BASE_URL: import.meta.env.VITE_STRAPI_URL ? `${import.meta.env.VITE_STRAPI_URL}/api` : '/api/cms',

  // Indica si estamos en producción
  IS_PRODUCTION: import.meta.env.PROD,

  // Token de autenticación si es necesario
  API_TOKEN: import.meta.env.VITE_STRAPI_API_TOKEN,

  // Configuración común para requests
  HEADERS: {
    'Content-Type': 'application/json',
    ...(import.meta.env.VITE_STRAPI_API_TOKEN && {
      Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
    }),
  },

  TIMEOUT: 10000,
};
