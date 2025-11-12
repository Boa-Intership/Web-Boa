import { AppContainer, AppTypography } from '@/ui';
import { TextField, Box } from '@mui/material';
import React from 'react';

function FindCodeTraking() {
  return (
    <AppContainer>
      <Box>
        <AppTypography>Gestiona tus envíos de carga de forma rápida y sencilla. </AppTypography>
        <AppTypography>
          Realiza el seguimiento de tus envios en tiempo real, con la seguridad y confianza de BoA
          Cargo.
        </AppTypography>
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </Box>
    </AppContainer>
  );
}

export default FindCodeTraking;
