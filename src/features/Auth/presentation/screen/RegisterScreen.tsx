import React from 'react';
import { Container, Paper, Box, Button, Divider } from '@mui/material';
import UserDataForm from '../components/registerForm/UserDataForm';
import BillingDataForm from '../components/registerForm/BillingDataForm';
import TermsAndConditions from '../components/registerForm/TermsAndConditions';
import { AppTypography } from 'ui';

const Register = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <AppTypography variant="h3Regular" color={'primary.dark'}>
          Registro de Usuario
        </AppTypography>
        <UserDataForm />
        <Divider sx={{ my: 3 }} />
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
    </Container>
  );
};

export default Register;
