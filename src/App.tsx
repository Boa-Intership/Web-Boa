import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryProvider } from './shared/providers/QueryProvider';
import { ROUTES } from './router/routes';
import HomeScreen from './features/home/presentation/screens/HomeScreen';
import CorporateProfileScreen from './features/landing/presentation/screens/CorporateProfileScreen';
import ContactScreen from './features/contact/presentation/screens/ContactScreen';
import InformacionScreen from './features/Information/presentation/screens/InformacionScreen';
import PreRegistroScreen from './features/pre-registration/presentation/screens/PreRegistroScreen';
import ComprobanteScreen from './features/pre-registration/presentation/screens/ComprobanteScreen';
import MainLayout from './layouts/MainLayout';
import LandingScreen from './features/landing/presentation/screens/LandingScreen';
import TipoCargaScreen from './features/Information/presentation/screens/TipoCargaScreen';
import ScrollToTop from './router/ScrollToTop';
import ItinerariosScreen from './features/itinerarios/presentation/screens/ItinerariosScreen';
import TerminosScreen from './features/terms_conditions/presentation/screens/TerminosScreen';
import Login from './features/Auth/presentation/screen/LoginScreen';
import Register from './features/Auth/presentation/screen/RegisterScreen';

const App: React.FC = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingScreen />} />
        <Route path={ROUTES.HOME.replace('/', '')} element={<HomeScreen />} />
        <Route path={ROUTES.ITINERARIOS.replace('/', '')} element={<ItinerariosScreen />} />
        <Route path={ROUTES.CONTACTO.replace('/', '')} element={<ContactScreen />} />
        <Route path={ROUTES.PREREGISTRO.replace('/', '')} element={<PreRegistroScreen />} />
        <Route path={ROUTES.COMPROBANTE.replace('/', '')} element={<ComprobanteScreen />} />
        <Route path={ROUTES.INFORMACION.replace('/', '')} element={<InformacionScreen />} />
        <Route path={ROUTES.TIPOS_CARGAS} element={<TipoCargaScreen />} />
        <Route path={ROUTES.LOGIN.replace('/', '')} element={<Login />} />
        <Route path={ROUTES.REGISTER.replace('/', '')} element={<Register />} />

        <Route path={ROUTES.TERMINOS.replace('/', '')} element={<TerminosScreen />} />
        <Route
          path={ROUTES.CORPORATE_PROFILE.replace('/', '')}
          element={<CorporateProfileScreen />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
