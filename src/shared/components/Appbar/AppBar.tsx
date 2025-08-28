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
import { NavItem } from './types';
import NavButton from './NavButton';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';
import AppContainer from '../AppContainer';
import { AppButton, Logo } from 'ui';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

const navItems: NavItem[] = [
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
  {
    key: 'preRegistro',
    label: 'Pre-registro',
    route: ROUTES.PREREGISTRO,
    icon: <AssignmentOutlinedIcon />,
  },
  {
    key: 'informacion',
    label: 'Información',
    columns: [
      {
        links: [
          {
            label: 'Tipos de carga',
            to: ROUTES.TIPOS_CARGAS.replace(':tipo?', 'cargaGeneral'),
          },
          { label: 'Términos y Condiciones', to: ROUTES.TERMINOS },
          {
            label: 'Contacto',
            to: ROUTES.CONTACTO,
          },
        ],
      },
    ],
    icon: <InfoOutlinedIcon />,
  },
];

const HoverDelay = 150;

const AppAppBar: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const textColor = (theme) => theme.palette.text.primary;
  const bgColor = (theme) => theme.palette.background.paper;

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [openKey, setOpenKey] = React.useState<string | null>(null);
  const anchors = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const hoverTimeout = React.useRef<number | null>(null);

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

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: bgColor,
          color: textColor,
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          boxShadow: 'none',
          transition: 'all 0.18s ease',
        }}
      >
        <AppContainer sx={{ py: { xs: 1, md: 1 } }}>
          <Toolbar
            disableGutters
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Box
              component="img"
              src={Logo}
              alt="BOA Logo"
              onClick={() => navigate(ROUTES.LANDING)}
              sx={{
                height: { xs: 26, md: 50 },
                cursor: 'pointer',
              }}
            />
            <Box sx={{ flexGrow: 1 }} />

            <Box
              component="nav"
              id="main-menu"
              sx={{ display: { xs: 'none', md: 'block' } }}
            >
              <Box
                component="ul"
                sx={{
                  display: 'flex',
                  gap: 1,
                  alignItems: 'center',
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                }}
              >
                <Box component="li">
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    {navItems.map((item) => {
                      const isOpen = openKey === item.key;
                      const canHover = isMdUp;
                      return (
                        <Box key={item.key} sx={{ position: 'relative' }}>
                          {item.columns ? (
                            <>
                              <NavButton
                                ref={(el: any) =>
                                  (anchors.current[item.key] = el)
                                }
                                label={item.label}
                                onClick={() =>
                                  setOpenKey((k) =>
                                    k === item.key ? null : item.key,
                                  )
                                }
                                onMouseEnter={() =>
                                  canHover && openMenu(item.key)
                                }
                                onMouseLeave={() =>
                                  canHover && closeMenuWithDelay()
                                }
                                active={isOpen}
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
                              onClick={() =>
                                navigate(item.route || ROUTES.HOME)
                              }
                            />
                          )}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <Box
              id="_header-buttons"
              data-testid="header-buttons"
              sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
                px: { xs: 0, md: 0 },
              }} // <--- padding lateral aquí
            >
              <AppButton
                size="small"
                color="primary"
                sx={{ fontSize: { xs: '0.75rem', md: '0.9rem' } }}
                onClick={() => navigate(ROUTES.LOGIN)}
              >
                Iniciar sesión
              </AppButton>
              <AppButton
                size="small"
                color="secondary"
                sx={{ fontSize: { xs: '0.75rem', md: '0.9rem' } }}
                onClick={() => navigate(ROUTES.REGISTRO)}
              >
                Registrarse
              </AppButton>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 1 }}>
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppContainer>
      </AppBar>

      <Box sx={{ height: { xs: 48, md: 64 } }} />

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
