import React from 'react';
import { FormControlLabel, Checkbox, Link, Typography } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <FormControlLabel
      control={<Checkbox color={'primary'} name="terms" value="yes" />}
      label={
        <Typography>
          Estoy de acuerdo con los{' '}
          <Link href="/terminos" target="_blank" rel="noopener noreferrer">
            términos y condiciones
          </Link>
          .
        </Typography>
      }
    />
  );
};

export default TermsAndConditions;
