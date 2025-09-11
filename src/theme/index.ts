import { createTheme } from '@mui/material/styles';
import { typographyVariants } from './typography';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: 'none',
          },
        },
      },
    },
  },

  palette: {
    // AZULES
    primary: {
      main: '#2e5c9a',
      dark: '#1e3a5f',
      light: '#4a7bc8',
      contrastText: '#ffffff',
    },
    // ROJOS
    secondary: {
      main: '#a85555',
      dark: '#8b4444',
      light: '#c66666',
      contrastText: '#ffffff',
    },
    // AMARILLOS
    warning: {
      main: '#daa520',
      dark: '#b8860b',
      light: '#f4c430',
      contrastText: '#2c2c2c',
    },
    // VERDES
    success: {
      main: '#a4b851',
      dark: '#8b9d3a',
      light: '#bdd168',
      contrastText: '#2c2c2c',
    },
    // AZULES PERSONALIZADOS
    blue_light: {
      main: '#4a7bc8',
      contrastText: '#fff',
    },
    blue_main: {
      main: '#2e5c9a',
      contrastText: '#fff',
    },
    blue_dark: {
      main: '#1e3a5f',
      contrastText: '#fff',
    },
    // GRISES PERSONALIZADOS (agregados como claves numéricas en grey)
    // GRISES Y FONDO
    background: {
      default: '#ffffff',
      paper: '#e8ebf0',
    },
    text: {
      primary: '#2c2c2c',
      secondary: '#4a4a4a',
      disabled: '#7a7a7a',
    },
    grey: {
      100: '#d8dce6',
      200: '#e8ebf0', // grey_light main
      300: '#ffffff',
      400: '#7a7a7a',
      600: '#4a4a4a', // grey_main main
      800: '#2c2c2c', // grey_dark main
    },
  },
  typography: {
    fontFamily: `"Lato", sans-serif`,
    ...typographyVariants,
  },
});

export default theme;
