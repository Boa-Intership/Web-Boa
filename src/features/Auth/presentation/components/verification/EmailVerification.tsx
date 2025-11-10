import React, { useState, useRef, useEffect } from 'react';
import { Alert, Box, Button, Paper, Typography } from '@mui/material';
import { AppContainer, AppTypography } from 'ui';
import { CheckCircle, Email } from '@mui/icons-material';
import {
  useValidateVerificationCode,
  useRegisterUser,
  useSendVerificationCode,
} from '../../useAuth.hooks';

interface EmailVerificationProps {
  email: string;
  onVerificationSuccess: () => void;
  onResendCode: () => void;
  onChangeEmail?: () => void;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({
  email,
  onVerificationSuccess,
  onResendCode,
  onChangeEmail,
}) => {
  const [code, setCode] = useState(['', '', '', '', '']);
  const [error, setError] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Hook para validar código con el backend
  const validateCodeMutation = useValidateVerificationCode();
  const registerUserMutation = useRegisterUser();
  const resendCodeMutation = useSendVerificationCode();

  const getTempDataForRegistration = () => {
    const tempData = sessionStorage.getItem('temp_registration_data');

    if (tempData) {
      try {
        return JSON.parse(tempData);
      } catch {
        return null;
      }
    }
    return null;
  };

  // Cooldown para reenvío
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleChange = (index: number, value: string) => {
    // Solo permitir números
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError('');

    // Auto-focus al siguiente input
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verificar cuando se completa el código
    if (newCode.every((digit) => digit !== '') && newCode.join('').length === 5) {
      handleVerification(newCode.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Backspace: borrar y retroceder
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    // Arrow keys para navegación
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 5);

    if (!/^\d+$/.test(pastedData)) return;

    const newCode = pastedData.split('').concat(['', '', '', '', '']).slice(0, 5);
    setCode(newCode);

    // Focus en el último input lleno o el primero vacío
    const nextIndex = Math.min(pastedData.length, 4);
    inputRefs.current[nextIndex]?.focus();
  };

  const registrationData = getTempDataForRegistration();
  if (!registrationData) {
    throw new Error('No se encontraron datos de registro temporales');
  }
  const handleVerification = async (verificationCode: string) => {
    setError('');

    try {
      // Validar código
      await validateCodeMutation.mutateAsync({
        email,
        code: verificationCode,
      });

      // Preparar datos para el backend
      const backendData = {
        name: registrationData.name,
        email: registrationData.email,
        password: registrationData.password,
        ci: parseInt(registrationData.ci),
        complement: registrationData.nitComplemento || undefined,
        phone: registrationData.number,
        address: registrationData.address || undefined,
        ...(registrationData.billingNit && {
          billingData: {
            businessName: registrationData.businessName,
            docType: parseInt(registrationData.billingDocType),
            nit: parseInt(registrationData.billingNit),
          },
        }),
      };

      // Registrar usuario en el backend
      const registerResponse = await registerUserMutation.mutateAsync(backendData);

      // El backend puede retornar directamente el usuario O envuelto en ApiResponse
      // Verificamos si el response tiene directamente un id (usuario directo)
      // o si está en response.data (ApiResponse wrapper)
      const hasDirectId = registerResponse && 'id' in registerResponse && registerResponse.id;
      const hasWrappedId =
        registerResponse &&
        'data' in registerResponse &&
        registerResponse.data &&
        'id' in registerResponse.data &&
        registerResponse.data.id;

      if (hasDirectId || hasWrappedId) {
        // Limpiar datos temporales
        sessionStorage.removeItem('temp_registration_data');
        sessionStorage.removeItem('email_verification_pending');

        // Llamar al callback de éxito para redirigir
        onVerificationSuccess();
        return; // Salir exitosamente sin llegar al catch
      }

      // Si llegamos aquí, el registro no fue exitoso
      throw new Error('Error en el registro del usuario - respuesta inválida');
    } catch (error: unknown) {
      // Manejo mejorado de errores del backend
      const apiError = error as {
        response?: {
          data?: {
            message?: string | string[];
          };
        };
        message?: string;
      };

      let errorMessage = 'Error al verificar el código o registrar usuario.';

      // Priorizar el mensaje específico del backend
      if (apiError?.response?.data?.message) {
        if (Array.isArray(apiError.response.data.message)) {
          errorMessage = apiError.response.data.message.join(', ');
        } else {
          errorMessage = apiError.response.data.message;
        }
      } else if (
        apiError?.message &&
        apiError.message !== 'Error en el registro del usuario - respuesta inválida'
      ) {
        // Usar el mensaje de error directo si no es nuestro mensaje genérico
        errorMessage = apiError.message;
      }

      setError(errorMessage);
      setCode(['', '', '', '', '']);
      inputRefs.current[0]?.focus();
    }
  };

  const resendCodeData = {
    email: registrationData.email,
    ci: parseInt(registrationData.ci),
    complement: registrationData.nitComplemento || undefined,
  };

  const handleResend = async () => {
    setResendCooldown(60);
    await resendCodeMutation.mutateAsync(resendCodeData);

    onResendCode();
    setError('');
    setCode(['', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  const handleChangeEmail = () => {
    // Limpiar datos temporales
    sessionStorage.removeItem('temp_registration_data');
    sessionStorage.removeItem('email_verification_pending');

    // Regresar a la vista de registro
    onChangeEmail?.();
  };

  const isCodeComplete = code.every((digit) => digit !== '');
  const isLoading = validateCodeMutation.isPending || registerUserMutation.isPending;

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
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, sm: 4 }, // Menos padding en móviles
            maxWidth: 500,
            width: '100%',
            textAlign: 'center',
            borderRadius: 3,
            textAlignLast: 'center',
            backgroundColor: 'background.default',
          }}
        >
          {/* Icono de email */}
          <Box sx={{ mb: 3 }}>
            <Email
              sx={{
                fontSize: { xs: 48, sm: 64 }, // Icono más pequeño en móviles
                color: 'primary.main',
              }}
            />
          </Box>

          <AppTypography
            variant="h3Medium"
            color="primary.main"
            textAlign={'center'}
            sx={{
              mb: 2,
            }}
          >
            Verifica tu correo electrónico
          </AppTypography>

          <Alert severity="info" icon={false} sx={{ mb: 4, justifyContent: 'center' }}>
            <Box sx={{ textAlign: 'center' }}>
              <AppTypography variant="smallRegular" sx={{ mb: 1, fontSize: { xs: '0.85rem' } }}>
                Hemos enviado un código de verificación de 5 dígitos a:
              </AppTypography>
              <AppTypography
                variant="baseRegular"
                color="primary.main"
                sx={{
                  wordBreak: 'break-word', // Romper email largo en móviles
                  fontSize: { xs: '0.85rem', sm: '1rem' },
                }}
              >
                {email}
              </AppTypography>
            </Box>
          </Alert>

          {/* Inputs del código */}
          <Box sx={{ mb: 3 }}>
            <AppTypography variant="smallRegular" sx={{ mb: 2 }}>
              Ingresa el código de verificación:
            </AppTypography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 1, sm: 2 }, // Menos gap en móviles
                mb: 2,
                flexWrap: 'nowrap',
                width: '100%',
                maxWidth: { xs: '280px', sm: '400px' }, // Ancho máximo controlado
                mx: 'auto',
              }}
            >
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  value={digit}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, e.target.value)
                  }
                  onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  maxLength={1}
                  style={{
                    width: window.innerWidth < 600 ? 45 : 60, // Responsive width
                    height: window.innerWidth < 600 ? 45 : 60, // Responsive height
                    textAlign: 'center',
                    fontSize: window.innerWidth < 600 ? '1.2rem' : '1.5rem', // Responsive font
                    fontWeight: 'bold',
                    border: '2px solid',
                    borderColor: error ? '#d32f2f' : digit ? '#1976d2' : '#e0e0e0',
                    borderRadius: 8,
                    backgroundColor: digit ? '#ffffff' : '#fff',
                    color: '#1976d2',
                    outline: 'none',
                    transition: 'all 0.2s ease-in-out',
                    flex: '0 0 auto', // No crecer ni encogerse
                  }}
                  disabled={isLoading}
                />
              ))}
            </Box>
          </Box>

          {/* Error */}
          {error && (
            <AppTypography variant="smallRegular" color="error.main" sx={{ mb: 3 }}>
              {error}
            </AppTypography>
          )}

          {/* Loading indicator */}
          {isLoading && (
            <Box sx={{ mb: 3 }}>
              <AppTypography variant="smallRegular" color="primary.main">
                {validateCodeMutation.isPending
                  ? 'Verificando código...'
                  : registerUserMutation.isPending
                    ? 'Registrando usuario...'
                    : 'Procesando...'}
              </AppTypography>
            </Box>
          )}

          {/* Botón de verificación manual */}
          {isCodeComplete && !isLoading && (
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={() => handleVerification(code.join(''))}
              sx={{ mb: 3 }}
            >
              Verificar código
            </Button>
          )}

          {/* Reenviar código */}
          <Box>
            <AppTypography variant="smallRegular" color="text.secondary" sx={{ mb: 2 }}>
              ¿No recibiste el código?
            </AppTypography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="text"
                onClick={handleResend}
                disabled={resendCooldown > 0 || isLoading}
                sx={{
                  textTransform: 'none',
                  fontSize: '0.9rem',
                }}
              >
                {resendCooldown > 0 ? `Reenviar en ${resendCooldown}s` : 'Reenviar código'}
              </Button>

              <Button
                variant="text"
                onClick={handleChangeEmail}
                disabled={isLoading}
                sx={{
                  textTransform: 'none',
                  fontSize: '0.9rem',
                }}
              >
                Cambiar correo
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </AppContainer>
  );
};

export default EmailVerification;
