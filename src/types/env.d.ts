/// <reference types="vite/client" />

interface ImportMetaEnv {
  // API Principal
  readonly VITE_BACKEND_API_URL: string;

  // Strapi CMS
  readonly VITE_STRAPI_URL: string;
  readonly VITE_STRAPI_API_TOKEN: string;

  // Configuración general
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_ENV: 'development' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
