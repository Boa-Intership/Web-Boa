import React from 'react';
import { FormControlLabel, Checkbox, Link, Box } from '@mui/material';
import { AppTypography } from 'ui';

interface TermsAndConditionsProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ checked, onChange, error }) => {
  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={onChange}
            color="primary"
            name="terms"
            sx={{
              color: error ? 'error.main' : 'inherit',
            }}
          />
        }
        label={
          <AppTypography
            variant="smallRegular"
            sx={{
              color: error ? 'error.main' : 'inherit',
            }}
          >
            Estoy de acuerdo con los{' '}
            <Link href="/terminos" target="_blank" rel="noopener noreferrer">
              términos y condiciones
            </Link>
            .
          </AppTypography>
        }
      />
      {error && (
        <AppTypography variant="smallRegular" color="error.main" sx={{ ml: 4, mb: 2 }}>
          {error}
        </AppTypography>
      )}
    </Box>
  );
};

export default TermsAndConditions;
