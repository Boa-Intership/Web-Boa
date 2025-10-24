import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Snackbar, Alert, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { AppContainer } from '../../../../ui';
import PasswordResetVerification from '../components/password_reset/PasswordResetVerification';
import NewPasswordForm from '../components/password_reset/NewPasswordForm';

export default function PasswordResetScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'verify' | 'reset'>('verify');
  const [email, setEmail] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('pwd_reset_email');
    if (!storedEmail) {
      // Si no hay email, no debería estar aquí. Redirigir a login.
      navigate('/login');
    } else {
      setEmail(storedEmail);
    }
  }, [navigate]);

  const handleVerificationSuccess = (code: string) => {
    // (Futuro) Aquí se validaría el código con el backend.
    // Por ahora, simulamos éxito y avanzamos.
    console.log(`Código ${code} verificado con éxito.`);
    // setVerificationCode(code);
    setStep('reset');
  };

  const handleResendCode = () => {
    // (Futuro) Lógica para solicitar al backend un nuevo código para `email`
    console.log(`Solicitando nuevo código para ${email}`);
    // Aquí podrías mostrar un toast/snackbar de confirmación
  };

  const handleNewPasswordSubmit = (data: { password: string; confirmPassword: string }) => {
    console.log('Nuevos datos de contraseña:', data);
    // (Futuro) Aquí llamarías al backend con:
    // - email
    // - verificationCode
    // - data.password

    // Mostrar mensaje de éxito
    setShowSuccessMessage(true);

    // Limpiar datos y redirigir después de un breve delay
    setTimeout(() => {
      sessionStorage.removeItem('pwd_reset_email');
      navigate('/login');
    }, 2000); // 2 segundos para que el usuario vea el mensaje
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (!email) {
    return null; // O un spinner de carga
  }

  return (
    <>
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
            />
          )}
          {step === 'reset' && <NewPasswordForm onSubmit={handleNewPasswordSubmit} />}
        </Box>
      </AppContainer>

      {/* Snackbar para mensaje de confirmación */}
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={6000}
        onClose={handleCloseSuccessMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSuccessMessage}
          severity="success"
          variant="filled"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSuccessMessage}
            >
              <Close fontSize="small" />
            </IconButton>
          }
          sx={{ width: '100%' }}
        >
          ¡Contraseña actualizada con éxito! Serás redirigido al login.
        </Alert>
      </Snackbar>
    </>
  );
}
