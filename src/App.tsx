import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './router/routes';
import HomeScreen from './features/home/presentation/screens/HomeScreen';
import AppBar from './shared/components/AppBar';
import InformacionScreen from './features/Information/presentation/screens/InformacionScreen';
  import PreRegistroScreen from './features/pre-registration/presentation/screens/PreRegistroScreen';


export default function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
      <Route path={ROUTES.HOME} element={<HomeScreen />} />
      <Route path={ROUTES.PREREGISTRO} element={<PreRegistroScreen />} />
      <Route path={ROUTES.INFORMACION} element={<InformacionScreen />} />
        <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
}