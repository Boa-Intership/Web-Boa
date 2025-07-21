import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff9800',
    },
    ...(mode === 'dark' && {
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
    }),
  },
});

export default getDesignTokens; 