import React from 'react';
import { Container, Paper, Box, Button, Divider } from '@mui/material';
import UserDataForm from '../components/registerForm/UserDataForm';
import BillingDataForm from '../components/registerForm/BillingDataForm';
import TermsAndConditions from '../components/registerForm/TermsAndConditions';
import { AppContainer, AppTypography } from 'ui';

const Register = () => {
  return (
    <AppContainer>
      <AppTypography variant="h3Medium" color={'primary.main'} sx={{ pb: '10px' }}>
        Registro de cuenta
      </AppTypography>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 }, backgroundColor: 'background.default' }}
      >
        <UserDataForm />
      </Paper>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 }, backgroundColor: 'background.default' }}
      >
        <BillingDataForm />
        <Box sx={{ mt: 3 }}>
          <TermsAndConditions />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button variant="contained" color="primary">
            Registrarse
          </Button>
        </Box>
      </Paper>
    </AppContainer>
  );
};

export default Register;
