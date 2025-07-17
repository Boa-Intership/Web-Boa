import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './router/routes';
import HomeScreen from './features/home/presentation/screens/HomeScreen';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomeScreen />} />
        {/* Redirección raíz */}
        <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
}

