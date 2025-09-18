import React from 'react';
import { Paper, Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import UserDataForm from '../components/registerForm/UserDataForm';
import BillingDataForm from '../components/registerForm/BillingDataForm';
import TermsAndConditions from '../components/registerForm/TermsAndConditions';
import EmailVerification from '../components/verification/EmailVerification';
import RegistrationSuccess from '../components/verification/RegistrationSuccess';
import { registerSchema, RegisterSchema } from '../../domain/validators';
import { useTempRegistration, useEmailVerification } from '../../hooks/useTempRegistration';
import { AppContainer, AppTypography } from 'ui';

const Register = () => {
  const {
    saveTempData,
    isEmailVerificationPending,
    markEmailAsVerified,
    getTempDataForRegistration,
  } = useTempRegistration();
  const { sendVerificationEmail } = useEmailVerification();

  const [showVerification, setShowVerification] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('');

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

  // Verificar si hay una verificación pendiente al cargar
  React.useEffect(() => {
    if (isEmailVerificationPending()) {
      setShowVerification(true);
      // Recuperar email de datos temporales si existe
      const tempData = getTempDataForRegistration();
      if (tempData) {
        setUserEmail(tempData.email);
      }
    }
  }, [isEmailVerificationPending, getTempDataForRegistration]);

  const onSubmit = async (data: RegisterSchema) => {
    if (!termsAccepted) {
      setTermsError('Debes aceptar los términos y condiciones');
      return;
    }

    setTermsError('');

    try {
      // Guardar datos temporalmente
      saveTempData(data);
      setUserEmail(data.email);

      // Enviar email de verificación
      const emailSent = await sendVerificationEmail(data.email);

      if (emailSent) {
        setShowVerification(true);
      } else {
        alert('Error al enviar el email de verificación. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error in registration process:', error);
      alert('Error en el proceso de registro. Por favor, intenta nuevamente.');
    }
  };

  const handleVerificationSuccess = async () => {
    try {
      // Marcar email como verificado
      markEmailAsVerified();

      // Obtener datos para registro final
      const registrationData = getTempDataForRegistration();

      if (registrationData) {
        // Aquí harías la llamada al backend para guardar en BD
        console.log('💾 Guardando en base de datos:', registrationData);

        // Simular guardado
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mostrar pantalla de éxito
        setShowVerification(false);
        setShowSuccess(true);
      }
    } catch (error) {
      console.error('Error completing registration:', error);
      alert('Error al completar el registro. Por favor, intenta nuevamente.');
    }
  };

  const handleResendCode = async () => {
    if (userEmail) {
      await sendVerificationEmail(userEmail);
    }
  };

  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(event.target.checked);
    if (event.target.checked) {
      setTermsError('');
    }
  };

  // Si estamos en modo éxito, mostrar el componente de éxito
  if (showSuccess) {
    return <RegistrationSuccess />;
  }

  // Si estamos en modo verificación, mostrar el componente de verificación
  if (showVerification) {
    return (
      <EmailVerification
        email={userEmail}
        onVerificationSuccess={handleVerificationSuccess}
        onResendCode={handleResendCode}
      />
    );
  }

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

          <Box sx={{ mt: 2 }}>
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
