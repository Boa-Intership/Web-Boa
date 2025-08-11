import React from 'react';
import AppAppBar from '../shared/components/AppBar';
import Footer from '../shared/components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
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
      paddingTop: '64px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
    }}>
      {children}
    </main>
    <Footer />
  </div>
);

export default MainLayout;