import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { NavItem } from "./appbar/types";
import { NavButton, MegaMenu, MobileDrawer } from "./appbar";

const navItems: NavItem[] = [
  { key: "home", label: "Inicio", route: ROUTES.HOME },
  {
    key: "itinerarios",
    label: "Itinerarios",
    columns: [
      {
        title: "Itinerarios",
        links: [{ label: "Ver itinerarios", to: ROUTES.ITINERARIOS }],
      },
      {
        title: "Operaciones",
        links: [{ label: "Pre-registro", to: ROUTES.PREREGISTRO }],
      },
    ],
  },
  {
    key: "informacion",
    label: "Información",
    columns: [
      {
        title: "General",
        links: [
          { label: "Información", to: ROUTES.INFORMACION },
          { label: "Términos", to: ROUTES.TERMINOS },
        ],
      },
    ],
  },
];

const HoverDelay = 150;

const AppAppBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

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
        elevation={0}
        sx={{
          bgcolor: bgColor,
          color: textColor,
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "none",
          transition: "all 0.18s ease",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/6/63/Logotipo_de_BoA.svg"
              alt="BOA Logo"
              onClick={() => navigate(ROUTES.LANDING)}
              sx={{ height: { xs: 36, md: 48 }, cursor: "pointer" }}
            />
            <Box sx={{ flexGrow: 1 }} />

            <Box
              component="nav"
              id="main-menu"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  listStyle: "none",
                  p: 0,
                  m: 0,
                }}
              >
                <Box component="li">
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    {navItems.map((item) => {
                      const isOpen = openKey === item.key;
                      const canHover = isMdUp;
                      return (
                        <Box key={item.key} sx={{ position: "relative" }}>
                          {item.columns ? (
                            <>
                              <NavButton
                                ref={(el: any) =>
                                  (anchors.current[item.key] = el)
                                }
                                label={item.label}
                                onClick={() =>
                                  setOpenKey((k) =>
                                    k === item.key ? null : item.key
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
              sx={{ display: "flex", gap: 1, alignItems: "center" }}
            >
              <Button
                variant="text"
                size="small"
                onClick={() => navigate(ROUTES.LOGIN)}
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "0.75rem", md: "1rem" },
                }}
              >
                Iniciar sesión
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => navigate(ROUTES.REGISTRO)}
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "0.75rem", md: "1rem" },
                }}
              >
                Abrir cuenta
              </Button>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}>
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ height: { xs: 56, md: 68 } }} />

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
