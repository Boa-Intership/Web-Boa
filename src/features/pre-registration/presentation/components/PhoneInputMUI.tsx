import React from 'react';
import { Box, FormControl, InputLabel, Typography } from '@mui/material';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import '../../style/PhoneInputMui.css'; // estilos de abajo

const PhoneInputMUI = ({
  label,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
}: {
  label: string;
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  error?: string | null;
  disabled?: boolean;
  required?: boolean;
}) => {
  return (
    <FormControl fullWidth variant="outlined" error={!!error}>
      <InputLabel shrink required={required}>
        {label}
      </InputLabel>
      <Box
        sx={{
          border: '1px solid rgba(0, 0, 0, 0.23)',
          borderRadius: 1,
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          bgcolor: disabled ? 'rgba(0,0,0,0.04)' : 'white',
          height: 56,
          '&:focus-within': {
            borderColor: '#1976d2',
            boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)',
          },
        }}
      >
        <PhoneInput
          defaultCountry="BO"
          international
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="phone-input-field"
        />
      </Box>
      {error && (
        <Typography color="error" variant="caption" sx={{ mt: 0.5 }}>
          {error}
        </Typography>
      )}
    </FormControl>
  );
};

export default PhoneInputMUI;
