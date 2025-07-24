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
    // blue
    blue_light: {
      main: '#3668AD',
    },
    blue_main: {
      main: '#0F5299',
    },
    blue_dark: {
      main: '#002D57',
    },
    // red
    red_light: {
      main: '#3668AD',
    },
    red_main: {
      main: '#0F5299',
    },
    red_dark: {
      main: '#002D57',
    },
    // yellow
    yellow_light: {
      main: '#3668AD',
    },
    yellow_main: {
      main: '#0F5299',
    },
    yellow_dark: {
      main: '#002D57',
    },
    // green
    green_light: {
      main: '#3668AD',
    },
    green_main: {
      main: '#0F5299',
    },
    green_dark: {
      main: '#002D57',
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