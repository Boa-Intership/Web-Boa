import React from 'react';
import { Box, Button, Paper } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AppContainer, AppTypography } from 'ui';

const RegistrationSuccess: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <AppContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '60vh',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            maxWidth: 500,
            width: '100%',
            textAlign: 'center',
            borderRadius: 3,
            backgroundColor: 'background.default',
          }}
        >
          {/* Icono de éxito */}
          <Box sx={{ mb: 3 }}>
            <CheckCircle
              sx={{
                fontSize: 80,
                color: 'success.main',
              }}
            />
          </Box>

          {/* Título */}
          <AppTypography
            variant="h4Regular"
            color="success.main"
            sx={{ mb: 2, textAlign: 'center' }}
          >
            ¡Registro completado!
          </AppTypography>

          {/* Descripción */}
          <AppTypography
            variant="baseRegular"
            color="text.secondary"
            sx={{ mb: 4, textAlign: 'center' }}
          >
            Tu cuenta ha sido creada exitosamente. Ya puedes iniciar sesión y comenzar a usar
            nuestros servicios.
          </AppTypography>

          {/* Botón para ir al login */}
          <Button variant="contained" onClick={handleGoToLogin} sx={{ minWidth: 200 }}>
            Iniciar sesión
          </Button>
        </Paper>
      </Box>
    </AppContainer>
  );
};

export default RegistrationSuccess;
