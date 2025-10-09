import React, { useState } from 'react';
import { Box, Button, Grid, Alert, Snackbar } from '@mui/material';
import { Lock, Check } from '@mui/icons-material';
import { AppContainer, AppTypography } from 'ui';
import ProfileCard from '../components/profileView/ProfileCard';
import ContactInfo from '../components/profileView/ContactInfo';
import BillingInfo from '../components/profileView/BillingInfo';
import UserData from '../components/profileView/UserData';

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
  // Estado para datos editables del usuario
  const [userData, setUserData] = useState<User>({
    name: 'Juan Carlos Pérez Pereira',
    email: 'juan.perez@ejemplo.com',
    ci: '12345678',
    nitComplemento: 'A1',
    number: '+59172345678',
    address: 'Av. Ballivián #123, Zona Sur, La Paz, Bolivia',
    businessName: 'Empresa Ejemplo S.R.L.',
    billingDocType: '5',
    billingNit: '98765432',
    billingNitComplemento: '1A',
  });

  const [originalData, setOriginalData] = useState<User>(userData);
  const [hasChanges, setHasChanges] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);

  const handleToggleNameEdit = () => {
    if (isEditingName) {
      // Si está cancelando, restaurar datos originales
      setUserData({
        ...userData,
        name: originalData.name,
      });
    }
    setIsEditingName(!isEditingName);
  };

  // Verificar si hay cambios
  const checkForChanges = (newData: User) => {
    const hasChanges = JSON.stringify(newData) !== JSON.stringify(originalData);
    setHasChanges(hasChanges);
  };

  // Actualizar datos
  const handleUserDataChange = (field: keyof User, value: string) => {
    const newData = { ...userData, [field]: value };
    setUserData(newData);
    checkForChanges(newData);
  };

  // Guardar cambios
  const handleSaveChanges = async () => {
    try {
      // TODO: Implementar llamada a la API
      console.log('Guardando cambios:', userData);

      setOriginalData(userData);
      setHasChanges(false);
      setShowSuccess(true);
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  // Cancelar cambios
  const handleCancelChanges = () => {
    setUserData(originalData);
    setHasChanges(false);
  };

  // Cambiar contraseña
  const handleChangePassword = () => {
    console.log('Abrir modal de cambio de contraseña');
    // TODO: Implementar modal de cambio de contraseña
  };

  return (
    <AppContainer sx={{ p: '20px' }}>
      {/* Header con título */}
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Grid item>
          <AppTypography variant="h3Bold" color="primary.main">
            Mi Perfil
          </AppTypography>
        </Grid>
      </Grid>

      {/* Tarjeta principal del perfil - Solo lectura */}

      {/* Layout de dos columnas */}
      <Grid container spacing={4} mb={2}>
        {/* Columna izquierda - Información de contacto */}
        <Grid item xs={12} lg={6}>
          <ProfileCard user={userData} />
          <UserData
            user={userData}
            isEditable={isEditingName}
            onUserDataChange={handleUserDataChange}
            onToggleEditName={handleToggleNameEdit}
          />
          <BillingInfo user={userData} isEditable={true} onUserDataChange={handleUserDataChange} />
        </Grid>

        {/* Columna derecha - Información de facturación */}
        <Grid item xs={12} lg={6}>
          <ContactInfo user={userData} isEditable={true} onUserDataChange={handleUserDataChange} />
          <Grid item mt={4}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              startIcon={<Lock />}
              onClick={handleChangePassword}
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
                px: 3,
              }}
            >
              Cambiar Contraseña
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* Botones de acción - Solo aparecen si hay cambios */}
      {hasChanges && (
        <Box
          sx={{
            mt: 4,
            borderRadius: 2,
            borderColor: 'divider',
            display: 'flex',
            justifyContent: 'end',
            gap: 1,
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Button
            variant="text"
            color="primary"
            onClick={handleCancelChanges}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              minWidth: 120,
            }}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveChanges}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              minWidth: 120,
            }}
          >
            Guardar
          </Button>
        </Box>
      )}

      {/* Snackbar de éxito */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: '100%' }}
          icon={<Check />}
        >
          Perfil actualizado exitosamente
        </Alert>
      </Snackbar>
    </AppContainer>
  );
};

export default ProfileScreen;
