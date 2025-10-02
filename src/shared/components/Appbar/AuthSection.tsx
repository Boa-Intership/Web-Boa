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

export const AuthSection = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const logoutMutation = useLogout();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      const response = await logoutMutation.mutateAsync();
      if (response.message) {
        handleClose();
        logout();
        console.log('Sesión cerrada exitosamente:', response);
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
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
        <MenuItem>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <AppTypography variant="baseRegular">{user?.name || 'Mi perfil'}</AppTypography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <AppTypography variant="baseRegular">Cerrar sesión</AppTypography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
