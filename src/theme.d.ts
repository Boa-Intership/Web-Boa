import { PaletteColor, PaletteColorOptions } from '@mui/material/styles';

// extiende los tipos de TypeScript para que MUI reconozca un color personalizado dentro de palette

declare module '@mui/material/styles' {
  interface Palette {
    // blue
    blue_light: PaletteColor;
    blue_main: PaletteColor;
    blue_dark: PaletteColor;

    // red
    red_light: PaletteColor;
    red_main: PaletteColor;
    red_dark: PaletteColor;

    // yellow
    yellow_light: PaletteColor;
    yellow_main: PaletteColor;
    yellow_dark: PaletteColor;

    // green
    green_light: PaletteColor;
    green_main: PaletteColor;
    green_dark: PaletteColor;
  }

  interface PaletteOptions {
    // blue
    blue_light?: PaletteColorOptions;
    blue_main?: PaletteColorOptions;
    blue_dark?: PaletteColorOptions;

    // red
    red_light?: PaletteColorOptions;
    red_main?: PaletteColorOptions;
    red_dark?: PaletteColorOptions;

    // yellow
    yellow_light?: PaletteColorOptions;
    yellow_main?: PaletteColorOptions;
    yellow_dark?: PaletteColorOptions;

    // green
    green_light?: PaletteColorOptions;
    green_main?: PaletteColorOptions;
    green_dark?: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    // blue
    blue_light: true;
    blue_main: true;
    blue_dark: true;

    // red
    red_light: true;
    red_main: true;
    red_dark: true;

    // yellow
    yellow_light: true;
    yellow_main: true;
    yellow_dark: true;

    // green
    green_light: true;
    green_main: true;
    green_dark: true;
  }
}
