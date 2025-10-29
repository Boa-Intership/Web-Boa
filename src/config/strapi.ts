// Configuración centralizada para Strapi CMS
export const STRAPI_CONFIG = {
  // URL base para Strapi en producción vs desarrollo
  BASE_URL: '/api/cms',

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
