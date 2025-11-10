import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Avatar,
  Tooltip,
} from '@mui/material';
import { useAuth } from '../../providers/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { AppButton, AppTypography } from 'ui';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useLogout } from '../../../features/Auth/presentation/useAuth.hooks';
import { useUserProfile } from '../../../features/profile/domain/hooks/useUserProfile';

export const AuthSection = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const logoutMutation = useLogout();

  const { userData: apiUserData } = useUserProfile();
  const displayName = apiUserData?.name || user?.name || 'Usuario';

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      const response = await logoutMutation.mutateAsync();
      // Limpieza local del estado de autenticación aunque el servidor no devuelva body
      handleClose();
      logout();
      // Después de cerrar sesión forzamos navegación a la landing
      // para evitar que el usuario quede en una ruta protegida (ej. tracking)
      navigate(ROUTES.LANDING, { replace: true });
      console.log('Sesión cerrada (server response):', response);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      // Aun si la petición al servidor falla (p. ej. CORS), igual limpiamos el estado local
      handleClose();
      logout();
      navigate(ROUTES.LANDING, { replace: true });
    }
  };

  if (!isAuthenticated) {
    return (
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
        <AppButton
          variant="contained"
          size="large"
          onClick={() => navigate(ROUTES.LOGIN)}
          sx={{
            textTransform: 'none',
            fontSize: { xs: '0.75rem', md: '1rem' },
            borderRadius: 2,
          }}
        >
          Iniciar sesión
        </AppButton>
        <AppButton
          variant="contained"
          size="large"
          onClick={() => navigate(ROUTES.REGISTER)}
          sx={{
            textTransform: 'none',
            fontSize: { xs: '0.75rem', md: '1rem' },
            borderRadius: 2,
          }}
          color="secondary"
        >
          Registrarse
        </AppButton>
      </Box>
    );
  }

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
      <Tooltip title="Cuenta">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{
            ml: 2,
            bgcolor: 'warning.dark',
            color: 'white',
            '&:hover': {
              bgcolor: 'warning.main',
            },
            '&:focus, &.Mui-focusVisible': {
              outline: 'none',
              boxShadow: 'none',
            },
          }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32, bgcolor: 'transparent' }}>
            <AccountCircleOutlinedIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* Sección de información del usuario */}
        <Box sx={{ px: 2, py: 1, minWidth: 250 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.main' }}>
              <PersonIcon />
            </Avatar>
            <Box sx={{ flex: 1, overflow: 'hidden' }}>
              <AppTypography
                variant="baseRegular"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {displayName}
              </AppTypography>
            </Box>
          </Box>
        </Box>

        <Divider />

        <MenuItem
          onClick={() => {
            handleClose();
            navigate(ROUTES.PERFIL);
          }}
          sx={{
            py: 1.5,
          }}
        >
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <AppTypography variant="baseRegular">Perfil</AppTypography>
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={handleLogout}
          sx={{
            py: 1.5,
            color: 'error.main',
          }}
        >
          <ListItemIcon sx={{ color: 'error.main' }}>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <AppTypography variant="baseRegular">Cerrar sesión</AppTypography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
