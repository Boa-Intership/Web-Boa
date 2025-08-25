import React from 'react';
import { AppAppBar, Footer } from 'ui';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => (
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
    <Footer />
  </>
);

export default MainLayout;
