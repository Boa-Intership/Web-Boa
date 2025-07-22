import React from 'react';
import AppAppBar from '../shared/components/AppBar';
import Footer from '../shared/components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <>
    <AppAppBar />
    <main style={{ 
        marginTop: 80, 
        minHeight: '70vh', 
        width: '100%', 
        display: 'flex',
        //backgroundColor: '#1976d2',
        }}
      >
      {children}
    </main>
    <Footer/>
  </>
);

export default MainLayout;