export interface RouteAccess {
  path: string;
  requiresAuth?: boolean;
  publicOnly?: boolean; // Solo para usuarios no autenticados
}

export const ROUTES = {
  // Ruta landing
  LANDING: '/',

  // Páginas principales
  HOME: '/home',
  INFORMACION: '/informacion',
  ITINERARIOS: '/itinerarios',
  TERMINOS: '/terminos',
  TIPOS_CLIENTES: '/tipos-clientes',
  TIPOS_CARGAS: '/tipos-cargas/:tipo?',

  // Autenticación
  LOGIN: '/login',
  REGISTER: '/registro',

  // Funcionalidades que requieren autenticación
  TRACKING: '/tracking',
  PERFIL: '/perfil',

  // Administración
  ADMIN: '/admin',
  DASHBOARD: '/dashboard',

  // Existentes
  COTIZAR: '/cotizar',
  PREREGISTRO: '/preregistro',
  COMPROBANTE: '/comprobante',
  MISPREREGISTROS: '/mis-preregistros',
  OFICINA: '/oficinas',

  CORPORATE_PROFILE: '/perfil-corporativo',
};

export const ROUTE_ACCESS: Record<string, RouteAccess> = {
  [ROUTES.LANDING]: { path: ROUTES.LANDING },
  [ROUTES.HOME]: { path: ROUTES.HOME },
  [ROUTES.INFORMACION]: { path: ROUTES.INFORMACION },
  [ROUTES.ITINERARIOS]: { path: ROUTES.ITINERARIOS },
  [ROUTES.TERMINOS]: { path: ROUTES.TERMINOS },
  [ROUTES.TIPOS_CARGAS]: { path: ROUTES.TIPOS_CARGAS },
  [ROUTES.OFICINA]: { path: ROUTES.OFICINA },
  [ROUTES.CORPORATE_PROFILE]: { path: ROUTES.CORPORATE_PROFILE },
  [ROUTES.COMPROBANTE]: { path: ROUTES.COMPROBANTE },

  // Rutas que requieren autenticación
  [ROUTES.PREREGISTRO]: { path: ROUTES.PREREGISTRO, requiresAuth: true },
  [ROUTES.PERFIL]: { path: ROUTES.PERFIL, requiresAuth: true },
  [ROUTES.TRACKING]: { path: ROUTES.TRACKING, requiresAuth: true },
  [ROUTES.ADMIN]: { path: ROUTES.ADMIN, requiresAuth: true },
  [ROUTES.DASHBOARD]: { path: ROUTES.DASHBOARD, requiresAuth: true },
  [ROUTES.COTIZAR]: { path: ROUTES.COTIZAR, requiresAuth: true },
  [ROUTES.MISPREREGISTROS]: { path: ROUTES.MISPREREGISTROS, requiresAuth: true },

  // Rutas solo para usuarios no autenticados
  [ROUTES.LOGIN]: { path: ROUTES.LOGIN, publicOnly: true },
  [ROUTES.REGISTER]: { path: ROUTES.REGISTER, publicOnly: true },
};

export const getRouteAccess = (path: string): RouteAccess | undefined => {
  return Object.values(ROUTE_ACCESS).find((route) => route.path === path);
};

export const isProtectedRoute = (path: string): boolean => {
  const route = getRouteAccess(path);
  return route?.requiresAuth || false;
};

export const isPublicOnlyRoute = (path: string): boolean => {
  const route = getRouteAccess(path);
  return route?.publicOnly || false;
};
