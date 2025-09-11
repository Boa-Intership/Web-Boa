import React from 'react';
import { Typography, TypographyProps, useTheme } from '@mui/material';
import { typographyVariants } from '../theme/typography';

// Variantes personalizadas (las claves del objeto typographyVariants + variantes MUI)
export type AppTypographyVariant = TypographyProps['variant'] | keyof typeof typographyVariants;

interface AppTypographyProps extends Omit<TypographyProps, 'variant'> {
  variant?: AppTypographyVariant;
  responsive?: boolean;
}

const AppTypography: React.FC<AppTypographyProps> = ({
  children,
  variant = 'body1',
  responsive = true,
  sx,
  ...rest
}) => {
  const theme = useTheme();

  const stylesFromTheme =
    variant in typographyVariants
      ? typographyVariants[variant as keyof typeof typographyVariants]
      : theme.typography[variant as TypographyProps['variant']];

  const { fontSize, fontWeight, lineHeight } = stylesFromTheme as any;

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
      variant={variant as any}
      component={rest.component||variant}
      sx={{
        fontFamily: `"Lato", sans-serif`,
        fontWeight,
        lineHeight,
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
