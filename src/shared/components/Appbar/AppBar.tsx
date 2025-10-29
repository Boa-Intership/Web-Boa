import React from 'react';
import { AppBar, Toolbar, Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import NavButton from './NavButton';
import MegaMenu from './MegaMenu';
import MobileDrawer from './MobileDrawer';
import { LogoCargo, AppContainer } from 'ui';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import { AuthSection } from './AuthSection';

const navItems = [
  // {
  //   key: 'home',
  //   label: 'Inicio',
  //   route: ROUTES.HOME,
  // },
  {
    key: 'Pre-Registro',
    label: 'Pre-Registro',
    route: ROUTES.PREREGISTRO,
    icon: <NoteAltOutlinedIcon />,
  },
  {
    key: 'itinerarios',
    label: 'Itinerario',
    route: ROUTES.ITINERARIOS,
    icon: <TodayOutlinedIcon />,
  },
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
            label: 'Nuestras oficinas',
            to: ROUTES.OFICINA,
            icon: <ContactPhoneOutlinedIcon />,
          },
        ],
      },
    ],
    icon: <InfoOutlinedIcon />,
  },
];

const HoverDelay = 150;

const LANGUAGES = [
  { code: 'es', country: 'BO', label: 'Español | BO' },
  { code: 'en', country: 'US', label: 'English | US' },
];

const AppAppBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [openKey, setOpenKey] = React.useState<string | null>(null);

  // Idioma
  const [anchorLang, setAnchorLang] = React.useState<null | HTMLElement>(null);
  const [selectedLang, setSelectedLang] = React.useState(LANGUAGES[0]);

  const anchors = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const hoverTimeout = React.useRef<number | null>(null);

  const openMenu = (key: string) => {
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
    setOpenKey(key);
  };
  const closeMenuWithDelay = (delay = HoverDelay) => {
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
    hoverTimeout.current = window.setTimeout(() => setOpenKey(null), delay);
  };
  const handleClose = () => setOpenKey(null);

  const isActiveRoute = (route?: string) => (route ? location.pathname.startsWith(route) : false);

  // Idioma/país
  const handleLangClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorLang(event.currentTarget);
  };
  const handleLangClose = () => setAnchorLang(null);
  const handleLangSelect = (lang: (typeof LANGUAGES)[0]) => {
    setSelectedLang(lang);
    setAnchorLang(null);
    // Aquí podrías cambiar el idioma global de la app
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: '#1C2E5E',
          boxShadow: 'none',
          transition: 'background 0.3s',
        }}
      >
        <AppContainer sx={{ py: { xs: 1, md: 1 } }}>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              alignItems: 'center',
              minHeight: { xs: 64, md: 64 }, // Altura fija
              height: { xs: 64, md: 64 },
            }}
          >
            {/* LOGO */}
            <Box
              component="img"
              src={LogoCargo}
              alt="BOA Logo"
              onClick={() => navigate(ROUTES.LANDING)}
              sx={{ height: { xs: 50, md: 55 }, cursor: 'pointer', mr: 2 }}
            />

            {/* SELECTOR DE IDIOMA/PAÍS */}
            {/* <Box sx={{ display: 'flex', alignItems: 'center', mr: { xs: 0, md: 2 } }}>
              <Button
                startIcon={<PublicIcon />}
                endIcon={<KeyboardArrowDownOutlinedIcon />}
                onClick={handleLangClick}
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: 3,
                  px: 2,
                  textTransform: 'none',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  transition: 'background 0.2s',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {selectedLang.label}
                </Typography>
              </Button>
              <Menu
                anchorEl={anchorLang}
                open={Boolean(anchorLang)}
                onClose={handleLangClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                {LANGUAGES.map((lang) => (
                  <MenuItem
                    key={lang.code}
                    selected={lang.code === selectedLang.code}
                    onClick={() => handleLangSelect(lang)}
                  >
                    {lang.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}

            <Box sx={{ flexGrow: 1 }} />

            {/* NAV MENU (desktop) */}
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
                            onClick={() => setOpenKey((k) => (k === item.key ? null : item.key))}
                            onMouseEnter={() => isMdUp && openMenu(item.key)}
                            onMouseLeave={() => isMdUp && closeMenuWithDelay()}
                          />
                          <MegaMenu
                            open={isOpen}
                            anchorEl={anchors.current[item.key]}
                            columns={item.columns}
                            onClose={handleClose}
                            onMouseEnter={() => {
                              if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
                            }}
                            onMouseLeave={() => closeMenuWithDelay()}
                          />
                        </>
                      ) : (
                        <NavButton
                          label={item.label}
                          active={active}
                          onClick={() => navigate(item.route || ROUTES.HOME)}
                          // icon={item.icon}
                        />
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            <AuthSection />
            {/* MENU HAMBURGUESA (mobile) */}
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
      <Box
        sx={{
          height: { xs: 'calc(64px + 16px)', md: 'calc(64px + 16px)' }, // 64px del Toolbar + 16px del padding (8px arriba + 8px abajo)
          width: '100%',
        }}
      />

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
