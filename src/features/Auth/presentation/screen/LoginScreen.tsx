import * as React from 'react';
import { Stack, Card as MuiCard, styled } from '@mui/material';
import { LoginForm, SocialLoginSection } from '../components/loginForm';
import { LoginSchema } from '../../domain/validators/loginSchema';

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
  const handleLoginSubmit = (data: LoginSchema) => {
    console.log('Login data:', data);
    // Aquí puedes agregar la lógica de autenticación
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
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
        <LoginForm onSubmit={handleLoginSubmit} />
        <SocialLoginSection onGoogleLogin={handleGoogleLogin} />
      </Card>
    </SignInContainer>
  );
}
