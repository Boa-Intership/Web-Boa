import React from 'react';
import { Typography, TypographyProps, useTheme } from '@mui/material';

// Tipos de variantes personalizadas
export type AppTypographyVariant =
  | TypographyProps['variant'] // hereda variantes de MUI
  | 'h1Regular'
  | 'h1Bold'
  | 'h2Regular'
  | 'h2Bold'
  | 'h3Regular'
  | 'h3Bold'
  | 'h4Regular'
  | 'h4Bold'
  | 'h5Regular'
  | 'h5Bold'
  | 'h6Regular'
  | 'h6Bold'
  | 'largeRegular'
  | 'largeMedium'
  | 'largeBold'
  | 'baseRegular'
  | 'baseMedium'
  | 'baseBold'
  | 'smallRegular'
  | 'smallMedium'
  | 'smallBold'
  | 'xsmallRegular'
  | 'xsmallBold';

interface AppTypographyProps extends Omit<TypographyProps, 'variant'> {
  variant?: AppTypographyVariant;
  responsive?: boolean; // activa cambios de tamaño en xs/md
}

const variantMapping: Record<AppTypographyVariant, { fontSize: string; fontWeight: number }> = {
  // H1-H6
  h1Regular: { fontSize: '76px', fontWeight: 400 },
  h1Bold: { fontSize: '76px', fontWeight: 900 },
  h2Regular: { fontSize: '61px', fontWeight: 400 },
  h2Bold: { fontSize: '61px', fontWeight: 900 },
  h3Regular: { fontSize: '49px', fontWeight: 400 },
  h3Bold: { fontSize: '49px', fontWeight: 900 },
  h4Regular: { fontSize: '39px', fontWeight: 400 },
  h4Bold: { fontSize: '39px', fontWeight: 900 },
  h5Regular: { fontSize: '31px', fontWeight: 400 },
  h5Bold: { fontSize: '31px', fontWeight: 900 },
  h6Regular: { fontSize: '25px', fontWeight: 400 },
  h6Bold: { fontSize: '25px', fontWeight: 900 },

  // Large
  largeRegular: { fontSize: '20px', fontWeight: 400 },
  largeMedium: { fontSize: '20px', fontWeight: 500 },
  largeBold: { fontSize: '20px', fontWeight: 900 },

  // Base
  baseRegular: { fontSize: '16px', fontWeight: 400 },
  baseMedium: { fontSize: '16px', fontWeight: 500 },
  baseBold: { fontSize: '16px', fontWeight: 900 },

  // Small
  smallRegular: { fontSize: '14px', fontWeight: 400 },
  smallMedium: { fontSize: '14px', fontWeight: 500 },
  smallBold: { fontSize: '14px', fontWeight: 900 },

  // Xsmall
  xsmallRegular: { fontSize: '12px', fontWeight: 400 },
  xsmallBold: { fontSize: '12px', fontWeight: 900 },

  // Variantes MUI por defecto
  h1: { fontSize: '2.5rem', fontWeight: 700 },
  h2: { fontSize: '2rem', fontWeight: 600 },
  h3: { fontSize: '1.75rem', fontWeight: 600 },
  h4: { fontSize: '1.5rem', fontWeight: 600 },
  h5: { fontSize: '1.25rem', fontWeight: 600 },
  h6: { fontSize: '1rem', fontWeight: 600 },
  subtitle1: { fontSize: '1rem', fontWeight: 400 },
  subtitle2: { fontSize: '0.875rem', fontWeight: 400 },
  body1: { fontSize: '1rem', fontWeight: 400 },
  body2: { fontSize: '0.875rem', fontWeight: 400 },
  caption: { fontSize: '0.75rem', fontWeight: 400 },
  button: { fontSize: '1rem', fontWeight: 600 },
  overline: { fontSize: '0.75rem', fontWeight: 400 },
  inherit: { fontSize: 'inherit', fontWeight: 400 },
};

const AppTypography: React.FC<AppTypographyProps> = ({
  children,
  variant = 'body1',
  responsive = true,
  sx,
  ...rest
}) => {
  const theme = useTheme();

  const { fontSize, fontWeight } = variantMapping[variant];

  const responsiveStyles = responsive
    ? {
        fontSize: {
          xs: `calc(${fontSize} * 0.8)`,
          md: fontSize,
        },
      }
    : { fontSize };

  return (
    <Typography
      variant={variant as any} // evita TypeScript error
      sx={{
        fontFamily: `"Lato", sans-serif`,
        fontWeight,
        lineHeight: 1.2,
        ...responsiveStyles,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default AppTypography;
