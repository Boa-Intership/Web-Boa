import React from 'react';
import { AppAppBar, Footer } from 'ui';
import { Outlet } from 'react-router-dom';
import QuickContactButtons from '../shared/components/QuickContactButtons';

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
    <QuickContactButtons />
  </>
);

export default MainLayout;
