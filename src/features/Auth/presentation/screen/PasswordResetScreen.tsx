import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { AppContainer } from '../../../../ui';
import PasswordResetVerification from '../components/password_reset/PasswordResetVerification';
import NewPasswordForm from '../components/password_reset/NewPasswordForm';
import { useResetPasswordWithCode } from '../useAuth.hooks';

export default function PasswordResetScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'verify' | 'reset'>('verify');
  const [email, setEmail] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Hook para resetear contraseña
  const resetPasswordMutation = useResetPasswordWithCode();

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('password_reset_email');
    if (!storedEmail) {
      // Si no hay email, no debería estar aquí. Redirigir a login.
      navigate('/login');
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  const handleVerificationSuccess = (code: string) => {
    console.log(`Código ${code} verificado con éxito.`);
    setVerificationCode(code);
    setStep('reset');
  };

  const handleResendCode = () => {
    console.log(`Solicitando nuevo código para ${email}`);
    // El componente PasswordResetVerification ya maneja el reenvío con el backend
  };

  const handleChangeEmail = () => {
    // Limpiar el email del sessionStorage y regresar a login con el email como parámetro
    sessionStorage.removeItem('password_reset_email');
    navigate(`/login?resetEmail=${encodeURIComponent(email)}`);
  };

  const handleNewPasswordSubmit = async (data: { password: string; confirmPassword: string }) => {
    setError(''); // Limpiar errores previos

    try {
      // Restablecer contraseña usando el backend
      await resetPasswordMutation.mutateAsync({
        email,
        password: data.password,
      });

      // Si llega aquí, fue exitoso - el NewPasswordForm se encarga del mensaje de éxito y redirección
      setTimeout(() => {
        sessionStorage.removeItem('password_reset_email');
        navigate('/login');
      }, 3000); // 3 segundos para que el usuario vea el mensaje de éxito
    } catch (error: unknown) {
      // Manejar errores del backend
      const apiError = error as {
        response?: {
          data?: {
            message?: string;
          };
        };
      };

      const errorMessage =
        apiError?.response?.data?.message || 'Error al cambiar la contraseña. Inténtalo de nuevo.';

      setError(errorMessage);
      throw error; // Re-lanzar el error para que NewPasswordForm lo pueda manejar
    }
  };

  if (!email) {
    return null; // O un spinner de carga
  }

  return (
    <AppContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '60vh',
          justifyContent: 'center',
          m: { xs: 2, sm: '50px' }, // Menos margen en móviles
          px: { xs: 1, sm: 0 }, // Padding horizontal en móviles
        }}
      >
        {step === 'verify' && (
          <PasswordResetVerification
            email={email}
            onVerificationSuccess={handleVerificationSuccess}
            onResendCode={handleResendCode}
            onChangeEmail={handleChangeEmail}
          />
        )}
        {step === 'reset' && (
          <NewPasswordForm
            onSubmit={handleNewPasswordSubmit}
            isLoading={resetPasswordMutation.isPending}
            error={error}
          />
        )}
      </Box>
    </AppContainer>
  );
}
