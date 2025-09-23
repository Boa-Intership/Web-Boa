// src/theme/typography.ts
export const typographyVariants = {
  // H1
  h1Regular: { fontSize: '2.625rem', fontWeight: 400, lineHeight: 1.2 }, // ~42px
  h1Medium: { fontSize: '2.625rem', fontWeight: 500, lineHeight: 1.2 },
  h1Bold: { fontSize: '2.625rem', fontWeight: 700, lineHeight: 1.2 },

  // H2
  h2Regular: { fontSize: '2.5rem', fontWeight: 400, lineHeight: 1.25 }, // ~40px
  h2Medium: { fontSize: '2.5rem', fontWeight: 500, lineHeight: 1.25 },
  h2Bold: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.25 },

  // H3
  h3Regular: { fontSize: '1.75rem', fontWeight: 400, lineHeight: 1.3 }, // ~28px
  h3Medium: { fontSize: '1.75rem', fontWeight: 500, lineHeight: 1.3 },
  h3Bold: { fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.3 },

  // H4
  h4Regular: { fontSize: '1.3125rem', fontWeight: 400, lineHeight: 1.4 }, // ~21px
  h4Medium: { fontSize: '1.3125rem', fontWeight: 500, lineHeight: 1.4 },
  h4Bold: { fontSize: '1.3125rem', fontWeight: 700, lineHeight: 1.4 },

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
