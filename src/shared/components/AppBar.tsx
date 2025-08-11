import React from 'react';
import { AppBar, Toolbar, Container, Box, Button, IconButton, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes';
import { useLocation } from 'react-router-dom';

const AppAppBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const darkBgRoutes = [ROUTES.HOME]; // rutas con fondo oscuro
  const isDarkBg = darkBgRoutes.includes(location.pathname);
  const trigger = useScrollTrigger({ threshold: 50 });
  const isHome = location.pathname === ROUTES.HOME;
  const isTransparent = isHome && !trigger;

const bgColor = isTransparent ? 'transparent' : '#fff';
const textColor = isTransparent ? '#fff' : '#000';

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: bgColor,
        color: textColor,
        borderBottom: trigger ? '1px solid #ddd' : 'none',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: textColor,
            padding: '8px 12px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              edge="start"
              sx={{ p: 0, mr: 2, color: textColor }}
              onClick={() => navigate(ROUTES.HOME)}
              aria-label="logo"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/63/Logotipo_de_BoA.svg"
                alt="BOA Logo"
                style={{ height: 36, filter: isTransparent ? 'brightness(0) invert(1)' : 'none' }}
              />
            </IconButton>
            <Button
              variant="text"
              size="small"
              onClick={() => navigate(ROUTES.HOME)}
              sx={{ fontWeight: 600, fontSize: 16, color: textColor }}
            >
              Home
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, color: textColor }}>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppAppBar;
