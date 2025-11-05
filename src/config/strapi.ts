// Configuration centralized para Strapi CMS
export const STRAPI_CONFIG = {
  // URL base para Strapi en production vs development
  BASE_URL: import.meta.env.VITE_STRAPI_URL
    ? `${import.meta.env.VITE_STRAPI_URL.replace(/\/+$/, '')}/api`
    : '/api/cms',

  // Authentication token if required
  API_TOKEN: import.meta.env.VITE_STRAPI_API_TOKEN,

  // Configuration common para requests
  HEADERS: {
    'Content-Type': 'application/json',
    ...(import.meta.env.VITE_STRAPI_API_TOKEN && {
      Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
    }),
  },

  TIMEOUT: 10000,
};
