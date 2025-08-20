import React from 'react';
import { Outlet } from 'react-router-dom';
import AppAppBar from '../shared/components/AppBar';
import Footer from '../shared/components/Footer';

const MainLayout: React.FC = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'inherit',
  }}>
    <AppAppBar />
    <main style={{
      flex: 1,
      width: '100%',
      paddingTop: '2rem',
      paddingBottom: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
    }}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;