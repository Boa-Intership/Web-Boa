import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './shared/providers/AuthContext';
import { QueryProvider } from './shared/providers/QueryProvider';
import { ROUTES } from './router/routes';
import HomeScreen from './features/home/presentation/screens/HomeScreen';
import CorporateProfileScreen from './features/landing/presentation/screens/CorporateProfileScreen';
import OfficeScreen from './features/office/presentation/screens/OfficeScreen';
import InformacionScreen from './features/Information/presentation/screens/InformacionScreen';
import PreRegistroScreen from './features/pre-registration/presentation/screens/PreRegistroScreen';
import ComprobanteScreen from './features/pre-registration/presentation/screens/ComprobanteScreen';
import MisPreRegistros from './features/pre-registration/presentation/screens/MisPreRegistrosScreen';
import MainLayout from './layouts/MainLayout';
import LandingScreen from './features/landing/presentation/screens/LandingScreen';
import TipoCargaScreen from './features/Information/presentation/screens/TipoCargaScreen';
import ScrollToTop from './router/ScrollToTop';
import ItinerariosScreen from './features/itinerarios/presentation/screens/ItinerariosScreen';
import TerminosScreen from './features/terms_conditions/presentation/screens/TerminosScreen';
import Login from './features/Auth/presentation/screen/LoginScreen';
import Register from './features/Auth/presentation/screen/RegisterScreen';
import { ProfileScreen } from './features/profile/presentation';
import RouteGuard from './router/RouteGuard';
import FlightsScreen from './features/packageTracking/presentation/screens/FlightsScreen';
import ManifestsScreen from './features/packageTracking/presentation/screens/ManifestsScreen';
import PackagesScreen from './features/packageTracking/presentation/screens/PackagesScreen';
import PackageDetailScreen from './features/packageTracking/presentation/screens/PackageDetailScreen';

const App: React.FC = () => (
  <QueryProvider>
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <RouteGuard>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<LandingScreen />} />
              <Route path={ROUTES.HOME.replace('/', '')} element={<HomeScreen />} />
              <Route path={ROUTES.ITINERARIOS.replace('/', '')} element={<ItinerariosScreen />} />
              <Route path={ROUTES.OFICINA.replace('/', '')} element={<OfficeScreen />} />
              <Route path={ROUTES.PREREGISTRO.replace('/', '')} element={<PreRegistroScreen />} />
              <Route path={ROUTES.COMPROBANTE.replace('/', '')} element={<ComprobanteScreen />} />
              <Route path={ROUTES.MISPREREGISTROS.replace('/', '')} element={<MisPreRegistros />} />
              <Route path={ROUTES.INFORMACION.replace('/', '')} element={<InformacionScreen />} />
              <Route path={ROUTES.TIPOS_CARGAS} element={<TipoCargaScreen />} />
              <Route path={ROUTES.LOGIN.replace('/', '')} element={<Login />} />
              <Route path={ROUTES.REGISTER.replace('/', '')} element={<Register />} />
              <Route path={ROUTES.TERMINOS.replace('/', '')} element={<TerminosScreen />} />
              <Route path={ROUTES.PERFIL.replace('/', '')} element={<ProfileScreen />} />
              <Route
                path={ROUTES.CORPORATE_PROFILE.replace('/', '')}
                element={<CorporateProfileScreen />}
              />
              {/* Tracking */}
              <Route path={ROUTES.TRACKING.replace('/', '')} element={<FlightsScreen />} />
              <Route path={`${ROUTES.TRACKING.replace('/', '')}/:flightId`} element={<ManifestsScreen />} />
              <Route
                path={`${ROUTES.TRACKING.replace('/', '')}/:flightId/:manifestId`}
                element={<PackagesScreen />}
              />
              <Route
                path={`${ROUTES.TRACKING.replace('/', '')}/:flightId/:manifestId/:packageId`}
                element={<PackageDetailScreen />}
              />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </RouteGuard>
      </BrowserRouter>
    </AuthProvider>
  </QueryProvider>
);

export default App;
