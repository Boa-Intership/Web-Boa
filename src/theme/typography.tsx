// src/theme/typography.ts
export const typographyVariants = {
  // H1
  h1Regular: { fontSize: '2.625rem', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.025em' }, // ~42px
  h1Medium: { fontSize: '2.625rem', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.025em' },
  h1Bold: { fontSize: '2.625rem', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.025em' },

  // H2
  h2Regular: { fontSize: '2.5rem', fontWeight: 400, lineHeight: 1.25, letterSpacing: '-0.025em' }, // ~40px
  h2Medium: { fontSize: '2.5rem', fontWeight: 500, lineHeight: 1.25, letterSpacing: '-0.025em' },
  h2Bold: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.025em' },

  // H3
  h3Regular: { fontSize: '1.75rem', fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.025em' }, // ~28px
  h3Medium: { fontSize: '1.75rem', fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.025em' },
  h3Bold: { fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.025em' },

  // H4
  h4Regular: {
    fontSize: '1.3125rem',
    fontWeight: 400,
    lineHeight: 1.4,
    letterSpacing: '-0.025em',
  }, // ~21px
  h4Medium: { fontSize: '1.3125rem', fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.025em' },
  h4Bold: { fontSize: '1.3125rem', fontWeight: 700, lineHeight: 1.4, letterSpacing: '-0.025em' },

  // Base (body text)
  baseRegular: {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: 1.5,
  },
  baseMedium: { fontSize: '1rem', fontWeight: 500, lineHeight: 1.5 },
  baseBold: { fontSize: '1rem', fontWeight: 700, lineHeight: 1.5 },

  // Small text
  smallRegular: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.4 }, // 14px
  smallMedium: { fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.4 },
  smallBold: { fontSize: '0.875rem', fontWeight: 700, lineHeight: 1.4 },
};
