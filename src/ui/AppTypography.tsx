import React from 'react';
import { Typography, TypographyProps, useTheme } from '@mui/material';
import { typographyVariants } from '../theme/typography';

export type AppTypographyVariant = TypographyProps['variant'] | keyof typeof typographyVariants;

interface AppTypographyProps extends Omit<TypographyProps, 'variant'> {
  variant?: AppTypographyVariant;
  responsive?: boolean;
}

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

  const variantToComponent: Record<string, React.ElementType> = {
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

    smallRegular: 'span',
    smallMedium: 'span',
    smallBold: 'span',
  };

  const isCustom = variant in typographyVariants;

  return (
    <Typography
      textAlign={textAlign}
      variant={isCustom ? undefined : (variant as TypographyProps['variant'])}
      component={rest.component || (isCustom ? variantToComponent[variant] : 'span')}
      sx={{
        fontFamily: `"Lato", sans-serif`,
        fontWeight,
        lineHeight,
        textAlign,
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
