import * as React from 'react';
import { Stack, Card as MuiCard, styled, Alert, Box } from '@mui/material';
import { LoginForm, SocialLoginSection } from '../components/loginForm';
import { LoginSchema } from '../../domain/validators/loginSchema';
import { useLogin } from '../useAuth.hooks';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../shared/providers/AuthContext';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
  },
}));

export default function Login() {
  const [error, setError] = React.useState<string>('');
  const loginMutation = useLogin();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLoginSubmit = async (data: LoginSchema) => {
    setError('');

    try {
      const response = await loginMutation.mutateAsync({
        email: data.email,
        password: data.password,
      });

      // El backend retorna los tokens directamente en la respuesta
      const hasToken = response.accessToken || (response.data && response.data.accessToken);

      if (hasToken) {
        // Actualizar el contexto de autenticación
        login({
          name: data.email, // Usar el email como nombre temporal
          email: data.email,
        });
        navigate('/');
      } else {
        setError('Error en la respuesta del servidor');
      }
    } catch (error: unknown) {
      try {
        // Manejar errores del backend
        const apiError = error as {
          response?: {
            data?: {
              message?: string;
            };
          };
        };

        const errorMessage = apiError?.response?.data?.message || 'Error al iniciar sesión';
        setError(errorMessage);
      } catch {
        setError('Error inesperado al procesar la respuesta');
      }
    }
  };

  const handleGoogleLogin = () => {
    // Aquí puedes agregar la lógica de login con Google
  };

  return (
    <SignInContainer direction="column" justifyContent="space-between">
      <Card
        variant="outlined"
        sx={{
          backgroundColor: 'background.default',
          borderRadius: '15px',
        }}
      >
        <LoginForm onSubmit={handleLoginSubmit} isLoading={loginMutation.isPending} />
        {/* Mostrar errores de login */}
        {error && (
          <Box sx={{ mb: 2 }}>
            <Alert severity="error" onClose={() => setError('')}>
              {error}
            </Alert>
          </Box>
        )}
        <SocialLoginSection onGoogleLogin={handleGoogleLogin} />
      </Card>
    </SignInContainer>
  );
}
