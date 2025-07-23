import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo, useState } from 'react';
import getDesignTokens from './theme';
import { createTheme } from '@mui/material/styles';
import App from './App';

const Main: React.FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
