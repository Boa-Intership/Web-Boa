import React from 'react';
import { Paper, Box, Button, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import UserDataForm from '../components/registerForm/UserDataForm';
import BillingDataForm from '../components/registerForm/BillingDataForm';
import TermsAndConditions from '../components/registerForm/TermsAndConditions';
import EmailVerification from '../components/verification/EmailVerification';
import RegistrationSuccess from '../components/verification/RegistrationSuccess';
import { registerSchema, RegisterSchema } from '../../domain/validators';
import { useTempRegistration, useEmailVerification } from '../../hooks/useTempRegistration';
import { useSendVerificationCode } from '../useAuth.hooks';
import { AppContainer, AppTypography } from 'ui';

const Register = () => {
  const {
    saveTempData,
    isEmailVerificationPending,
    markEmailAsVerified,
    getTempDataForRegistration,
  } = useTempRegistration();
  const { sendVerificationEmail } = useEmailVerification();
  const sendCodeMutation = useSendVerificationCode();

  const [showVerification, setShowVerification] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('');
  const [apiError, setApiError] = React.useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { errors },
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
    setApiError('');

    try {
      // Llamar al backend para verificar email y NIT, y enviar código
      await sendCodeMutation.mutateAsync({
        email: data.email,
        nit: parseInt(data.nit),
        complement: data.nitComplemento || undefined,
      });

      // Si llegamos aquí, el código se envió exitosamente
      // Guardar datos temporalmente para el siguiente paso
      saveTempData(data);
      setUserEmail(data.email);
      setShowVerification(true);
    } catch (error: unknown) {
      // Manejar errores específicos del backend
      const apiError = error as { response?: { data?: { message?: string } } };
      const errorMessage = apiError?.response?.data?.message || 'Error desconocido';
      setApiError(errorMessage);
      console.error('Error al enviar código de verificación:', error);
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

          {/* Mostrar errores de la API */}
          {apiError && (
            <Box sx={{ mt: 2 }}>
              <Alert severity="error" onClose={() => setApiError('')}>
                {apiError}
              </Alert>
            </Box>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={sendCodeMutation.isPending}
            >
              {sendCodeMutation.isPending ? 'Verificando...' : 'Registrarse'}
            </Button>
          </Box>
        </Paper>
      </Box>
    </AppContainer>
  );
};

export default Register;
