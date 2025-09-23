import { Box, Button, Divider, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AppTypography } from 'ui';
import { ROUTES } from 'router/routes';

interface SocialLoginSectionProps {
  onGoogleLogin?: () => void;
}

export default function SocialLoginSection({ onGoogleLogin }: SocialLoginSectionProps) {
  const handleGoogleLogin = () => {
    if (onGoogleLogin) {
      onGoogleLogin();
    } else {
      alert('Iniciar sesión con Google');
    }
  };

  return (
    <>
      <Divider>o</Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button fullWidth variant="outlined" onClick={handleGoogleLogin}>
          Iniciar sesión con Google
        </Button>
        <AppTypography variant="smallRegular" sx={{ textAlign: 'center' }}>
          ¿No tienes una cuenta?{' '}
          <Link component={RouterLink} to={ROUTES.REGISTER} sx={{ alignSelf: 'center' }}>
            Crear una cuenta
          </Link>
        </AppTypography>
      </Box>
    </>
  );
}
