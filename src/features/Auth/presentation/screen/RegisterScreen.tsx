import React from 'react';
import {
  Paper,
  Box,
  Button,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  FormLabel,
  FormHelperText,
  Grid,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import UserDataForm from '../components/registerForm/UserDataForm';
import BillingDataForm from '../components/registerForm/BillingDataForm';
import TermsAndConditions from '../components/registerForm/TermsAndConditions';
import EmailVerification from '../components/verification/EmailVerification';
import RegistrationSuccess from '../components/verification/RegistrationSuccess';
import { registerSchema, RegisterSchema } from '../../domain/validators';
import { useTempRegistration } from '../../hooks/useTempRegistration';
import { useSendVerificationCode } from '../useAuth.hooks';
import { AppContainer, AppTypography } from 'ui';
import { createRegisterSchema } from '../../domain/validators/registerSchema';

const Register = () => {
  const {
    saveTempData,
    isEmailVerificationPending,
    markEmailAsVerified,
    getTempDataForRegistration,
    clearTempData,
  } = useTempRegistration();
  const sendCodeMutation = useSendVerificationCode();

  const [showVerification, setShowVerification] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('');
  const [apiError, setApiError] = React.useState<string>('');
  const [isBillingExpanded, setIsBillingExpanded] = React.useState(false);

  const dynamicSchema = React.useMemo(
    () => createRegisterSchema(isBillingExpanded),
    [isBillingExpanded]
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(dynamicSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
      ci: '',
      number: '',
      address: '',
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
        ci: parseInt(data.ci),
        complement: data.nitComplemento || undefined,
      });

      // Si llegamos aquí, el código se envió exitosamente
      const dataToSave = isBillingExpanded
        ? data
        : {
            ...data,
            billingDocType: undefined,
            businessName: undefined,
            billingNit: undefined,
            billingNitComplemento: undefined,
          };

      saveTempData(dataToSave);
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
      markEmailAsVerified();
      clearTempData();

      // Mostrar pantalla de éxito
      setShowVerification(false);
      setShowSuccess(true);
    } catch (error: unknown) {
      console.error('Error completing registration flow:', error);

      // Manejo mejorado de errores para mostrar mensaje específico
      const apiError = error as {
        response?: {
          data?: {
            message?: string | string[];
          };
        };
        message?: string;
      };

      let errorMessage = 'Error al completar el registro. Por favor, intenta nuevamente.';

      if (apiError?.response?.data?.message) {
        if (Array.isArray(apiError.response.data.message)) {
          errorMessage = apiError.response.data.message.join(', ');
        } else {
          errorMessage = apiError.response.data.message;
        }
      } else if (apiError?.message) {
        errorMessage = apiError.message;
      }

      // Mostrar el error en la interfaz en lugar de un alert
      setApiError(errorMessage);

      // Regresar a la vista de verificación para que el usuario vea el error
      setShowVerification(true);
      setShowSuccess(false);
    }
  };

  const handleResendCode = async () => {
    if (userEmail) {
      await userEmail;
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

  const handleBillingExpansionChange = (expanded: boolean) => {
    setIsBillingExpanded(expanded);
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
          <Divider />
          <BillingDataForm
            control={control}
            errors={errors}
            onExpansionChange={handleBillingExpansionChange}
          />
          {/* Mostrar errores de la API */}
          {apiError && (
            <Box sx={{ mt: 2 }}>
              <Alert severity="error" onClose={() => setApiError('')}>
                {apiError}
              </Alert>
            </Box>
          )}
          <Grid
            container
            justifyContent={'space-between'}
            alignItems="center"
            display="flex"
            mt={6}
          >
            <TermsAndConditions
              checked={termsAccepted}
              onChange={handleTermsChange}
              error={termsError}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={sendCodeMutation.isPending}
            >
              {sendCodeMutation.isPending ? 'Verificando...' : 'Registrarse'}
            </Button>
          </Grid>
        </Paper>
      </Box>
    </AppContainer>
  );
};

export default Register;
