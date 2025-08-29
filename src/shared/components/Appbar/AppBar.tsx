import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import NavButton from './NavButton';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';
import AppContainer from '../AppContainer';
import { AppButton, Logo } from 'ui';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ------------------ NAV ITEMS ------------------
const navItems = [
  {
    key: 'home',
    label: 'Inicio',
    route: ROUTES.HOME,
    icon: <HomeOutlinedIcon />,
  },
  {
    key: 'itinerarios',
    label: 'Itinerario',
    route: ROUTES.ITINERARIOS,
    icon: <EventNoteIcon />,
  },
  // {
  //   key: 'preRegistro',
  //   label: 'Pre-registro',
  //   route: ROUTES.PREREGISTRO,
  //   icon: <AssignmentOutlinedIcon />,
  // },
  {
    key: 'informacion',
    label: 'Información',
    columns: [
      {
        title: 'Acerca de:',
        links: [
          {
            label: 'Tipos de carga',
            to: ROUTES.TIPOS_CARGAS.replace(':tipo?', 'cargaGeneral'),
            icon: <StyleOutlinedIcon />,
          },
          {
            label: 'Términos y Condiciones',
            to: ROUTES.TERMINOS,
            icon: <GavelOutlinedIcon />,
          },
          {
            label: 'Contacto',
            to: ROUTES.CONTACTO,
            icon: <ContactPhoneOutlinedIcon />,
          },
        ],
      },
    ],
    icon: <InfoOutlinedIcon />,
  },
];

const HoverDelay = 150;

// ------------------ APP BAR ------------------
const AppAppBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [openKey, setOpenKey] = React.useState<string | null>(null);

  const anchors = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const hoverTimeout = React.useRef<number | null>(null);

  // -------- Hover menú --------
  const openMenu = (key: string) => {
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
    setOpenKey(key);
  };
  const closeMenuWithDelay = (delay = HoverDelay) => {
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
    // @ts-ignore
    hoverTimeout.current = window.setTimeout(() => setOpenKey(null), delay);
  };
  const handleClose = () => setOpenKey(null);

  // -------- Detecta ruta activa --------
  const isActiveRoute = (route?: string) =>
    route ? location.pathname.startsWith(route) : false;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: theme.palette.background.paper,
          boxShadow: 'none',
        }}
      >
        <AppContainer sx={{ py: { xs: 1, md: 1 } }}>
          <Toolbar
            disableGutters
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {/* -------- LOGO -------- */}
            <Box
              component="img"
              src={Logo}
              alt="BOA Logo"
              onClick={() => navigate(ROUTES.LANDING)}
              sx={{ height: { xs: 35, md: 40 }, cursor: 'pointer' }}
            />

            <Box sx={{ flexGrow: 1 }} />

            {/* -------- NAV MENU (desktop) -------- */}
            <Box component="nav" sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component="ul"
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                }}
              >
                {navItems.map((item) => {
                  const isOpen = openKey === item.key;
                  const active = isActiveRoute(item.route);

                  return (
                    <Box key={item.key} sx={{ position: 'relative' }}>
                      {item.columns ? (
                        <>
                          <NavButton
                            ref={(el: any) => (anchors.current[item.key] = el)}
                            label={item.label}
                            active={isOpen || active}
                            onClick={() =>
                              setOpenKey((k) =>
                                k === item.key ? null : item.key,
                              )
                            }
                            onMouseEnter={() => isMdUp && openMenu(item.key)}
                            onMouseLeave={() => isMdUp && closeMenuWithDelay()}
                            icon={<KeyboardArrowDownOutlinedIcon />}
                          />
                          <MegaMenu
                            open={isOpen}
                            anchorEl={anchors.current[item.key]}
                            columns={item.columns}
                            onClose={handleClose}
                            onMouseEnter={() => {
                              if (hoverTimeout.current)
                                window.clearTimeout(hoverTimeout.current);
                            }}
                            onMouseLeave={() => closeMenuWithDelay()}
                          />
                        </>
                      ) : (
                        <NavButton
                          label={item.label}
                          active={active}
                          onClick={() => navigate(item.route || ROUTES.HOME)}
                        />
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* -------- BOTONES LOGIN/REGISTRO -------- */}
            {/* <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 2,
                alignItems: 'center',
              }}
            >
              <AppButton
                size="medium"
                color="primary"
                sx={{ fontSize: { xs: '0.75rem', md: '0.9rem' } }}
                onClick={() => navigate(ROUTES.LOGIN)}
              >
                Iniciar sesión
              </AppButton>
              <AppButton
                size="medium"
                color="secondary"
                sx={{ fontSize: { xs: '0.75rem', md: '0.9rem' } }}
                onClick={() => navigate(ROUTES.REGISTRO)}
              >
                Registrarse
              </AppButton>
            </Box> */}

            {/* -------- MENU HAMBURGUESA (mobile) -------- */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}>
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  bgcolor: 'grey.100',
                  color: 'primary.main',
                  borderRadius: 10,
                  p: 1.2,
                  '&:hover': {
                    bgcolor: 'grey.300',
                  },
                  '&:focus, &:focus-visible': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppContainer>
      </AppBar>

      {/* Spacer para evitar salto de contenido */}
      <Box sx={{ height: { xs: 48, md: 64 } }} />

      {/* Drawer para mobile */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navItems={navItems}
        navigate={(to: string) => navigate(to)}
      />
    </>
  );
};

export default AppAppBar;
