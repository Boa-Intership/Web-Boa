import { Contrast } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import test from 'node:test';
import { text } from 'stream/consumers';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff9800',
      contrastText: '#ffffff',
    },
    // blue
    blue_light: {
      main: '#3668AD',
      contrastText: '#ffffff',
    },
    blue_main: {
      main: '#0F5299',
      contrastText: '#ffffff',
    },
    blue_dark: {
      main: '#002D57',
      contrastText: '#ffffff',
    },
    // red
    red_light: {
      main: '#3668AD',
      contrastText: '#ffffff',
    },
    red_main: {
      main: '#0F5299',
      contrastText: '#ffffff',
    },
    red_dark: {
      main: '#002D57',
      contrastText: '#ffffff',
    },
    // yellow
    yellow_light: {
      main: '#3668AD',
      contrastText: '#ffffff',
    },
    yellow_main: {
      main: '#0F5299',
      contrastText: '#ffffff',
    },
    yellow_dark: {
      main: '#002D57',
      contrastText: '#ffffff',
    },
    // green
    green_light: {
      main: '#3668AD',
      contrastText: '#ffffff',
    },
    green_main: {
      main: '#0F5299',
      contrastText: '#ffffff',
    },
    green_dark: {
      main: '#002D57',
      contrastText: '#ffffff',
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