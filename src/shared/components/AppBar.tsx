import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

const AppAppBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ p: 0, mr: 2 }}
              onClick={() => navigate(ROUTES.HOME)}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/63/Logotipo_de_BoA.svg"
                alt="BOA Logo"
                style={{ height: 36 }}
              />
            </IconButton>
            <Button
              variant="text"
              color="primary"
              size="small"
              onClick={() => navigate(ROUTES.HOME)}
              sx={{ fontWeight: 600, fontSize: 16 }}
            >
              Home
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="primary" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default AppAppBar;