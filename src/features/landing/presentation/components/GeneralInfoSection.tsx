import React from 'react';
import { AppContainer, AppGrid, AppTypography, AppStack } from 'ui';
import { Divider, Box, CircularProgress, Alert, Link as MuiLink, useTheme } from '@mui/material';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Link } from 'react-router-dom';
import { useGeneralInfo } from '../hooks/useGeneralInfo';

const GeneralInfoSection: React.FC = () => {
  const theme = useTheme();
  const { data, loading, error } = useGeneralInfo();

  if (loading) {
    return (
      <AppContainer sx={{ py: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <CircularProgress />
      </AppContainer>
    );
  }

  if (error || !data) {
    return (
      <AppContainer sx={{ py: { xs: 6, md: 8 } }}>
        <Alert severity="error">
          Error cargando información general: {error || 'Datos no disponibles'}
        </Alert>
      </AppContainer>
    );
  }

  return (
    <AppContainer sx={{ py: { xs: 6, md: 8 } }}>
      <AppStack alignItems="center" mb={2} textAlign="center">
        <AppTypography variant="h2Bold" color="primary">
          {data.titulo}
        </AppTypography>
        {data.subtitulo && (
          <AppTypography variant="baseMedium" color="text.secondary" sx={{ mt: 1 }}>
            {data.subtitulo}
          </AppTypography>
        )}
      </AppStack>
      <Divider sx={{ mb: 2 }} />

      <AppGrid container justifyContent="space-around" spacing={4}>
        {data.elementos.map((elemento) => (
          <AppGrid item xs={12} sm={6} md={5} key={elemento.id}>
            <Box
              component={Link}
              to={elemento.enlace}
              sx={{
                position: 'relative',
                height: 350,
                borderRadius: 3,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: `0 4px 12px ${theme.palette.action.hover}`,
                textDecoration: 'none',
                display: 'block',
                '&:hover': {
                  boxShadow: `0 8px 24px ${theme.palette.action.focus}`,
                  '& .background-image': {
                    transform: 'scale(1.05)',
                  },
                  '& .overlay': {
                    background:
                      'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))',
                  },
                  '& .content': {
                    transform: 'translateY(0)',
                  },
                  '& .know-more-link': {
                    borderBottomColor: theme.palette.common.white,
                    paddingBottom: 1,
                  },
                },
              }}
            >
              {/* Imagen de fondo o icono de error */}
              {elemento.imagen ? (
                <Box
                  className="background-image"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${elemento.imagen})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease',
                  }}
                />
              ) : (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.grey[300],
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <ImageNotSupportedIcon
                    sx={{
                      fontSize: 80,
                      color: theme.palette.grey[500],
                    }}
                  />
                </Box>
              )}

              {/* Overlay con degradado */}
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
                  transition: 'background 0.3s ease',
                  zIndex: 1,
                }}
              />

              {/* Contenido */}
              <Box
                className="content"
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  height: '100%',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                  transform: 'translateY(10px)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <AppTypography
                  variant="h3Bold"
                  sx={{
                    color: theme.palette.common.white,
                    mb: 1,
                    fontSize: { xs: 20, sm: 24 },
                  }}
                >
                  {elemento.titulo}
                </AppTypography>

                <AppTypography
                  variant="baseRegular"
                  sx={{
                    color: theme.palette.common.white,
                    mb: 2,
                    fontSize: { xs: 13, sm: 14 },
                    lineHeight: 1.5,
                    opacity: 0.9,
                  }}
                >
                  {elemento.descripcion}
                </AppTypography>

                <MuiLink
                  className="know-more-link"
                  component="span"
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderBottomColor: theme.palette.common.white,
                    },
                  }}
                >
                  Conoce más →
                </MuiLink>
              </Box>
            </Box>
          </AppGrid>
        ))}
      </AppGrid>
    </AppContainer>
  );
};

export default GeneralInfoSection;
