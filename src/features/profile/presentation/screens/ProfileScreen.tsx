import React from 'react';
import { Paper, Box, Button, Grid, Divider, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { AppContainer, AppTypography } from 'ui';
import ProfileCard from '../components/profileView/ProfileCard';
import ContactInfo from '../components/profileView/ContactInfo';
import BillingInfo from '../components/profileView/BillingInfo';

// Tipo temporal para simular datos del usuario
interface User {
  name: string;
  email: string;
  ci: string;
  nitComplemento?: string;
  number: string;
  address?: string;
  businessName?: string;
  billingDocType?: string;
  billingNit?: string;
  billingNitComplemento?: string;
}

const ProfileScreen: React.FC = () => {
  // Datos de ejemplo - en una implementación real esto vendría de un hook o contexto
  const mockUser: User = {
    name: 'Juan Carlos Pérez',
    email: 'juan.perez@ejemplo.com',
    ci: '12345678',
    nitComplemento: 'A1',
    number: '+59172345678',
    address: 'Av. Ballivián #123, Zona Sur, La Paz, Bolivia',
    businessName: 'Empresa Ejemplo S.R.L.',
    billingDocType: '5',
    billingNit: '98765432',
    billingNitComplemento: '1A',
  };

  const handleEditProfile = () => {
    console.log('Navegar a edición de perfil');
    // TODO: Implementar navegación a la pantalla de edición
  };

  return (
    <AppContainer sx={{ p: '20px' }}>
      {/* Header con título y botón de edición */}
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Grid item>
          <AppTypography variant="h3Medium" color="primary.main">
            Mi Perfil
          </AppTypography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Edit />}
            onClick={handleEditProfile}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              px: 3,
            }}
          >
            Editar Perfil
          </Button>
        </Grid>
      </Grid>

      {/* Tarjeta principal del perfil */}
      <ProfileCard user={mockUser} />

      {/* Contenido principal */}
      <Paper
        variant="outlined"
        sx={{
          p: { xs: 2, md: 3 },
          backgroundColor: 'background.default',
          borderRadius: 2,
        }}
      >
        {/* Información de contacto */}
        <ContactInfo user={mockUser} />

        <Divider sx={{ my: 4 }} />

        {/* Información de facturación */}
        <BillingInfo user={mockUser} />

        {/* Acciones adicionales */}
        <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<Edit />}
                onClick={handleEditProfile}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                }}
              >
                Modificar Datos
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </AppContainer>
  );
};

export default ProfileScreen;
