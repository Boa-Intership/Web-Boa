import React from 'react';
import { Typography, TypographyProps, useTheme } from '@mui/material';
import { typographyVariants } from '../theme/typography';

export type AppTypographyVariant = TypographyProps['variant'] | keyof typeof typographyVariants;

interface AppTypographyProps extends Omit<TypographyProps, 'variant'> {
  variant?: AppTypographyVariant;
  responsive?: boolean;
}

// Mapeo de variantes personalizadas a elementos HTML
const variantToComponent: Record<string, string> = {
  h1Regular: 'h1',
  h1Medium: 'h1',
  h1Bold: 'h1',
  h2Regular: 'h2',
  h2Medium: 'h2',
  h2Bold: 'h2',
  h3Regular: 'h3',
  h3Medium: 'h3',
  h3Bold: 'h3',
  h4Regular: 'h4',
  h4Medium: 'h4',
  h4Bold: 'h4',
  baseRegular: 'p',
  baseMedium: 'p',
  baseBold: 'p',
  smallRegular: 'p',
  smallMedium: 'p',
  smallBold: 'p',
};

interface TypographyStyle {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
}
const AppTypography: React.FC<AppTypographyProps> = ({
  children,
  variant,
  responsive = true,
  sx,
  textAlign,
  ...rest
}) => {
  const theme = useTheme();

  const getComponent = () => {
    if (rest.component) return rest.component;

    if (variant && variant in variantToComponent) {
      return variantToComponent[variant as string];
    }
    return variant as string;
  };

  const stylesFromTheme =
    variant in typographyVariants
      ? typographyVariants[variant as keyof typeof typographyVariants]
      : theme.typography[variant as TypographyProps['variant']] || theme.typography;

  const { fontSize, fontWeight, lineHeight } = stylesFromTheme as TypographyStyle;

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
      variant={variant in typographyVariants ? undefined : (variant as any)}
      component={getComponent()}
      sx={{
        fontFamily: `"Lato", sans-serif`,
        fontWeight,
        lineHeight,
        ...(textAlign ? { textAlign } : { textAlign: 'left' }),
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
