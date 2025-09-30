import React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import type { NavItem } from './types';
import { alpha, useTheme } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { AppTypography } from 'ui';
import { useAuth } from '../../providers/AuthContext';
import { useLogout } from '../../..
/features/Auth/presentation/useAuth.hooks';

const MobileDrawer: React.FC<{
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  navigate: (to: string) => void;
}> = ({ open, onClose, navItems, navigate }) => {
  const theme = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const buttonStyle = {
    color: 'grey.600',
    borderRadius: 2,
    p: 1,
    fontSize: '0.86em',
    '&:hover': {
      backgroundColor: 'background.paper',
      //border: '1px solid #e9e9e9ff',
    },
  };

  const iconStyle = {
    color: 'primary.light',
    minWidth: 45,
    justifyContent: 'center',
  };
  const logoutMutation = useLogout();

  const handleLogout = async () => {
    try {
      const response = await logoutMutation.mutateAsync();
      if (response.message) {
        onClose();
        logout();
        console.log('Sesión cerrada exitosamente:', response);
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 300,
          backgroundColor: alpha(theme.palette.grey[300], 0.6), // 👈 transparente
          backdropFilter: 'blur(6px)', // 👈 efecto vidrio
          boxShadow: 'none',
        },
      }}
    >
      <Box sx={{ p: 2 }} role="presentation">
        <AppTypography variant="h4Bold" color="primary.main" sx={{ ml: 2 }}>
          Menú
        </AppTypography>

        <List>
          {navItems.map((item) => (
            <React.Fragment key={item.key}>
              <ListItemButton
                onClick={() => {
                  onClose();
                  if (item.route) navigate(item.route);
                }}
                sx={buttonStyle}
              >
                <ListItemIcon sx={iconStyle}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: 'bold' }}
                />
              </ListItemButton>
              {item.columns && (
                <Box sx={{ ml: 5 }}>
                  {item.columns.map((col, i) => (
                    <Box key={i}>
                      {/* {col.title && (
                        <AppTypography variant="h4Bold" ml={2}>
                          {col.title}
                        </AppTypography>
                      )} */}
                      {col.links.map((l) => (
                        <ListItemButton
                          key={l.to}
                          onClick={() => {
                            onClose();
                            navigate(l.to);
                          }}
                          sx={buttonStyle}
                        >
                          <ListItemIcon sx={iconStyle}>{l.icon}</ListItemIcon>
                          <ListItemText primary={l.label} />
                        </ListItemButton>
                      ))}
                    </Box>
                  ))}
                </Box>
              )}
            </React.Fragment>
          ))}

          <Divider sx={{ my: 2 }} />

          {/* Sección de autenticación */}
          {!isAuthenticated ? (
            <>
              <ListItemButton
                onClick={() => {
                  onClose();
                  navigate('/login');
                }}
                sx={buttonStyle}
              >
                <ListItemIcon sx={iconStyle}>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Iniciar sesión"
                  primaryTypographyProps={{ fontWeight: 'bold' }}
                />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  onClose();
                  navigate('/registro');
                }}
                sx={buttonStyle}
              >
                <ListItemIcon sx={iconStyle}>
                  <HowToRegOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Registrarse"
                  primaryTypographyProps={{ fontWeight: 'bold' }}
                />
              </ListItemButton>
            </>
          ) : (
            <>
              <ListItemButton sx={buttonStyle}>
                <ListItemIcon sx={iconStyle}>
                  <AccountCircleOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary={user?.name || 'Mi Perfil'}
                  primaryTypographyProps={{ fontWeight: 'bold' }}
                />
              </ListItemButton>
              <ListItemButton onClick={handleLogout} sx={buttonStyle}>
                <ListItemIcon sx={iconStyle}>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Cerrar sesión"
                  primaryTypographyProps={{ fontWeight: 'bold' }}
                />
              </ListItemButton>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
