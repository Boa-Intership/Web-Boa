import React from 'react';
import { FormControlLabel, Checkbox, Link } from '@mui/material';
import { AppTypography } from 'ui';

const TermsAndConditions = () => {
  return (
    <FormControlLabel
      control={<Checkbox color={'primary'} name="terms" value="yes" />}
      label={
        <AppTypography variant="smallRegular">
          Estoy de acuerdo con los{' '}
          <Link href="/terminos" target="_blank" rel="noopener noreferrer">
            términos y condiciones
          </Link>
          .
        </AppTypography>
      }
    />
  );
};

export default TermsAndConditions;
