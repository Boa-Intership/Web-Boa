import React from 'react';
import { AppBar, Toolbar, Container, Box, Button, IconButton, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes';
import { useLocation } from 'react-router-dom';

const AppAppBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === ROUTES.HOME;
  const [heroHeight, setHeroHeight] = React.useState(0);
  const [isTransparent, setIsTransparent] = React.useState(true);

  React.useEffect(() => {
    if (isHome) {
      const heroElement = document.getElementById('hero-section');
      if (heroElement) {
        setHeroHeight(heroElement.offsetHeight);
      }
    }
  }, [isHome]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (isHome && heroHeight > 0) {
        setIsTransparent(window.scrollY < heroHeight);
      } else {
        setIsTransparent(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, heroHeight]);

  const bgColor = isHome && isTransparent ? 'transparent' : (theme) => theme.palette.background.default;
  const textColor = isHome && isTransparent ? (theme) => theme.palette.primary.contrastText : (theme) => theme.palette.text.primary;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: bgColor,
        color: textColor,
        borderBottom: isHome && isTransparent ? 'none' : '1px solid #ddd',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        mt: 0,
      }}
    >
      <Container maxWidth="xl">
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
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/6/63/Logotipo_de_BoA.svg"
              alt="BOA Logo"
              onClick={() => navigate(ROUTES.HOME)}
              sx={{
                height: 48,
                cursor: 'pointer',
                filter: isHome && isTransparent ? 'brightness(0) invert(1)' : 'none',
              }}
            />
            <Button
              variant="text"
              size="small"
              onClick={() => navigate(ROUTES.HOME)}
              sx={{ fontWeight: 600, fontSize: 16, color: textColor }}
            >
              Inicio
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
