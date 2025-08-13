
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // AZULES
    primary: {
      main: '#2e5c9a', // azul medio
      dark: '#1e3a5f', // azul marino oscuro
      light: '#4a7bc8', // azul claro
      contrastText: '#ffffff',
    },
    // ROJOS
    secondary: {
      main: '#a85555', // rojo medio
      dark: '#8b4444', // rojo ladrillo oscuro
      light: '#c66666', // rojo claro
      contrastText: '#ffffff',
    },
    // AMARILLOS
    warning: {
      main: '#daa520', // amarillo dorado
      dark: '#b8860b', // amarillo dorado oscuro
      light: '#f4c430', // amarillo claro
      contrastText: '#2c2c2c',
    },
    // VERDES
    success: {
      main: '#a4b851', // verde oliva medio
      dark: '#8b9d3a', // verde oliva oscuro
      light: '#bdd168', // verde oliva claro
      contrastText: '#2c2c2c',
    },
    // GRISES Y FONDO
    background: {
      default: '#ffffff', // blanco
      paper: '#e8ebf0', // gris casi blanco
    },
    text: {
      primary: '#2c2c2c', // gris carbón
      secondary: '#4a4a4a', // gris medio
      disabled: '#7a7a7a', // gris claro
    },
    grey: {
      100: '#d8dce6', // gris muy claro
      200: '#e8ebf0', // gris casi blanco
      300: '#ffffff', // blanco
      400: '#7a7a7a', // gris claro
      600: '#4a4a4a', // gris medio
      800: '#2c2c2c', // gris carbón
    },
  },
});

export default theme;