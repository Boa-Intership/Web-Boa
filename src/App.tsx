import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './router/routes';
import HomeScreen from './features/home/presentation/screens/HomeScreen';
import InformacionScreen from './features/Information/presentation/screens/InformacionScreen';
import PreRegistroScreen from './features/pre-registration/presentation/screens/PreRegistroScreen';
import MainLayout from './layouts/MainLayout';


const App: React.FC = () => (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomeScreen />} />
          <Route path={ROUTES.PREREGISTRO} element={<PreRegistroScreen />} />
          <Route path={ROUTES.INFORMACION} element={<InformacionScreen />} />
          <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
)

export default App;