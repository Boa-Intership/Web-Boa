import React from 'react';
import { AppAppBar, Footer } from 'ui';
import { Outlet, useLocation } from 'react-router-dom';
import QuickContactButtons from '../shared/components/QuickContactButtons';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const hideFooterRoutes = ['/login', '/perfil', '/registro'];
  const shouldHideFooter = hideFooterRoutes.some((route) => location.pathname.startsWith(route));

  return (
    <>
      <AppAppBar />
      <main
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'center',
          background: 'inherit',
        }}
      >
        <Outlet />
      </main>
      {!shouldHideFooter && <Footer />}
      <QuickContactButtons />
    </>
  );
};

export default MainLayout;
