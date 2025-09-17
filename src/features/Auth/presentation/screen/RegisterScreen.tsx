import React from 'react';
import { Paper, Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import UserDataForm from '../components/registerForm/UserDataForm';
import BillingDataForm from '../components/registerForm/BillingDataForm';
import TermsAndConditions from '../components/registerForm/TermsAndConditions';
import { registerSchema, RegisterSchema } from '../../domain/validators';
import { AppContainer, AppTypography } from 'ui';

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
      nit: '',
      number: '',
      address: '',
      businessName: '',
      billingNit: '',
    },
  });

  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const [termsError, setTermsError] = React.useState('');

  const onSubmit = (data: RegisterSchema) => {
    if (!termsAccepted) {
      setTermsError('Debes aceptar los términos y condiciones');
      return;
    }

    setTermsError('');
    console.log('Datos de registro:', data);
    // Aquí puedes implementar la lógica de registro
    // Por ejemplo: await registerUser(data);
  };

  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(event.target.checked);
    if (event.target.checked) {
      setTermsError('');
    }
  };

  return (
    <AppContainer>
      <AppTypography variant="h3Medium" color={'primary.main'} sx={{ pb: '10px' }}>
        Registro de cuenta
      </AppTypography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 }, backgroundColor: 'background.default' }}
        >
          <UserDataForm control={control} errors={errors} />
        </Paper>

        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 }, backgroundColor: 'background.default' }}
        >
          <BillingDataForm control={control} errors={errors} />

          <Box sx={{ mt: 3 }}>
            <TermsAndConditions
              checked={termsAccepted}
              onChange={handleTermsChange}
              error={termsError}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Button type="submit" variant="contained" color="primary" size="large">
              {isSubmitting ? 'Registrando...' : 'Registrarse'}
            </Button>
          </Box>
        </Paper>
      </Box>
    </AppContainer>
  );
};

export default Register;
