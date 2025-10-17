import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Alert, Snackbar, CircularProgress } from '@mui/material';
import { Lock, Check, Description } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { AppContainer, AppTypography } from 'ui';
import ProfileCard from '../components/profileView/ProfileCard';
import ContactInfo from '../components/profileView/ContactInfo';
import BillingInfo from '../components/profileView/BillingInfo';
import UserData from '../components/profileView/UserData';
import ChangePasswordModal from '../components/modals/ChangePasswordModal';
import { useChangePassword } from '../../hooks/useChangePassword';
import { useUserProfile } from '../../hooks/useUserProfile';
import { ROUTES } from '../../../../router/routes';

// Tipo temporal para simular datos del usuario
interface User {
  name: string;
  email: string;
  ci: string;
  complemento?: string;
  number: string;
  address?: string;
  // businessName?: string;
  // billingDocType?: string;
  // billingNit?: string;
  // billingNitComplemento?: string;
}

const ProfileScreen: React.FC = () => {
  const navigate = useNavigate();

  // Hook para obtener datos del usuario desde la API
  const { userData: apiUserData, loading: loadingProfile, error: profileError } = useUserProfile();

  // Estado para datos editables del usuario
  const [userData, setUserData] = useState<User>({
    name: '',
    email: '',
    ci: '',
    complemento: '',
    number: '',
    address: '',
    // businessName: '',
    // billingDocType: '',
    // billingNit: '',
    // billingNitComplemento: '',
  });

  // Actualizar userData cuando lleguen los datos de la API
  useEffect(() => {
    if (apiUserData) {
      const mappedData: User = {
        name: apiUserData.name || '',
        email: apiUserData.email || '',
        ci: apiUserData.ci || '',
        complemento: apiUserData.complement || '',
        number: apiUserData.phone ? `+591${apiUserData.phone}` : '',
        address: apiUserData.address || '',
        // businessName: apiUserData.billingData[0].businessName || '',
        // billingDocType: String(apiUserData.billingData[0].docType) || '',
        // billingNit: apiUserData.billingData[0].nit || '',
        // billingNitComplemento: apiUserData.billingData[0].complement || '',
      };
      setUserData(mappedData);
      setOriginalData(mappedData);
    }
  }, [apiUserData]);

  const [originalData, setOriginalData] = useState<User>(userData);
  const [hasChanges, setHasChanges] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [resetDataCards, setResetDataCards] = useState(false);
  const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);

  // Hook para cambio de contraseña
  const { changePassword } = useChangePassword({
    onSuccess: () => {
      setShowSuccess(true);
    },
  });

  // Función para cancelar todas las ediciones activas de DataCard
  const handleCancelAllEdits = () => {
    setUserData(originalData);
    setHasChanges(false);

    setResetDataCards(true);
    setTimeout(() => setResetDataCards(false), 100);
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

      setResetDataCards(true);
      setTimeout(() => setResetDataCards(false), 100);
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  // Cancelar cambios
  const handleCancelChanges = () => {
    handleCancelAllEdits();
  };

  // Cambiar contraseña
  const handleChangePassword = () => {
    setChangePasswordModalOpen(true);
  };

  // Navegar a Mis Pre-Registros
  const handleGoToPreRegistros = () => {
    navigate(ROUTES.MISPREREGISTROS);
  };

  // Función para enviar cambio de contraseña a la API
  const handlePasswordSubmit = async (
    currentPassword: string,
    newPassword: string
  ): Promise<void> => {
    return changePassword(currentPassword, newPassword);
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
        <Grid item>
          <Button
            variant="text"
            color="primary"
            startIcon={<Description />}
            onClick={handleGoToPreRegistros}
            sx={{
              textTransform: 'none',
              fontWeight: 500,
            }}
          >
            Mis Pre-Registros
          </Button>
        </Grid>
      </Grid>

      {/* Estado de loading */}
      {loadingProfile && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 8 }}>
          <CircularProgress />
        </Box>
      )}

      {/* Estado de error */}
      {profileError && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {profileError}
        </Alert>
      )}

      {/* Contenido del perfil - Solo mostrar cuando hay datos */}
      {!loadingProfile && !profileError && userData && (
        <>
          {/* Layout de dos columnas */}
          <Grid container spacing={4} mb={2}>
            {/* Columna izquierda - Información de contacto */}
            <Grid item xs={12} lg={6}>
              <ProfileCard user={userData} />
              <UserData
                user={userData}
                onUserDataChange={handleUserDataChange}
                resetEditingState={resetDataCards}
              />
              {/* <BillingInfo
                user={userData}
                isEditable={true}
                onUserDataChange={handleUserDataChange}
              /> */}
            </Grid>

            {/* Columna derecha - Información de facturación */}
            <Grid item xs={12} lg={6}>
              <ContactInfo
                user={userData}
                onUserDataChange={handleUserDataChange}
                resetEditingState={resetDataCards}
              />
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
        </>
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

      {/* Modal de cambio de contraseña */}
      <ChangePasswordModal
        open={changePasswordModalOpen}
        onClose={() => setChangePasswordModalOpen(false)}
        onSubmit={handlePasswordSubmit}
      />
    </AppContainer>
  );
};

export default ProfileScreen;
