// src/theme/typography.ts
export const typographyVariants = {
  h1Regular: { fontSize: '42px', fontWeight: 400, lineHeight: '44px' },
  h1Medium: { fontSize: '42px', fontWeight: 500, lineHeight: '44px' },
  h1Bold: { fontSize: '42px', fontWeight: 650, lineHeight: '44px' },

  h2Regular: { fontSize: '2.5rem', fontWeight: 400, lineHeight: '34px' },
  h2Medium: { fontSize: '2.5rem', fontWeight: 500, lineHeight: '34px' },
  h2Bold: { fontSize: '2.5rem', fontWeight: 650, lineHeight: '34px' },

  h3Regular: { fontSize: '1.75rem', fontWeight: 400, lineHeight: '25px' },
  h3Medium: { fontSize: '1.75rem', fontWeight: 500, lineHeight: '25px' },
  h3Bold: { fontSize: '1.75rem', fontWeight: 650, lineHeight: '25px' },

  h4Regular: { fontSize: '1.3125rem', fontWeight: 400, lineHeight: '23px' },
  h4Medium: { fontSize: '1.3125rem', fontWeight: 500, lineHeight: '23px' },
  h4Bold: { fontSize: '1.3125rem', fontWeight: 650, lineHeight: '23px' },

  baseRegular: {
    // fontWeight: 100,
    lineHeight: 1.2,
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    '@media (min-width:300px)': {
      fontSize: '1rem',
    },
  },
  //{ fontSize: '16px', fontMax: 400, fontMin: 10, lineHeight: '24px' },
  baseMedium: { fontSize: '16px', fontWeight: 500, lineHeight: '24px' },
  baseBold: { fontSize: '16px', fontWeight: 650, lineHeight: '24px' },

  smallRegular: { fontSize: '14px', fontMax: 400, lineHeight: '19.5px' },
  smallMedium: { fontSize: '14px', fontWeight: 500, lineHeight: '19.5px' },
  smallBold: { fontSize: '14px', fontWeight: 650, lineHeight: '19.5px' },
};
