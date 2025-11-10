import React, { FC } from 'react';
import { Box, List, ListItem, Stack, CircularProgress, useTheme } from '@mui/material';
import { AppBox, AppContainer, AppGrid, AppButton, AppTypography } from 'ui';
import { useNavigate } from 'react-router-dom';
import { useCustomerService } from '../hooks/useCustomerService';
import aboutImg from '@/assets/colegas-trabajando-juntos-oficina_23-2148738265.jpg';

const CustomerServiceSection: FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { data, loading, error } = useCustomerService();

  const handleButtonClick = () => {
    if (data?.enlace_boton) {
      navigate(data.enlace_boton);
    }
  };

  if (loading) {
    return (
      <AppBox sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </AppBox>
    );
  }

  if (error || !data) {
    return (
      <AppBox sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <AppTypography variant="baseRegular" color="error">
          Error cargando la sección de atención al cliente
        </AppTypography>
      </AppBox>
    );
  }

  const imageUrl = data.imagen_url || aboutImg;

  return (
    <AppBox
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        minHeight: { xs: '100px', md: '200px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(to bottom, rgba(0,0,0,0), ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.7)'})`,
          zIndex: 1,
        },
      }}
    >
      <AppContainer
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          py: { xs: 2, md: 2 },
        }}
      >
        <Stack sx={{ gap: 2, mb: 2, maxWidth: '600px' }}>
          <AppTypography
            variant="h1Bold"
            sx={{
              color: theme.palette.common.white,
            }}
          >
            {data.titulo}
          </AppTypography>
          <AppTypography
            variant="baseMedium"
            sx={{
              color: theme.palette.primary.contrastText,
              fontSize: { xs: '14px', md: '16px' },
              lineHeight: 1.6,
            }}
          >
            {data.descripcion}
          </AppTypography>
        </Stack>

        <AppGrid container spacing={3} sx={{ maxWidth: '700px', mb: 4 }}>
          <AppGrid item xs={12} sm={6}>
            <List
              sx={{
                '& .MuiListItem-root': {
                  color: theme.palette.primary.contrastText,
                  pl: 2,
                  '&::before': {
                    content: '"✓"',
                    mr: 2,
                    color: theme.palette.primary.contrastText,
                    fontWeight: 'bold',
                  },
                },
              }}
            >
              {data.elementos_izquierda.map((item) => (
                <ListItem key={item.id} sx={{ justifyContent: 'flex-start' }}>
                  {item.texto}
                </ListItem>
              ))}
            </List>
          </AppGrid>
          <AppGrid item xs={12} sm={6}>
            <List
              sx={{
                '& .MuiListItem-root': {
                  color: theme.palette.common.white,
                  pl: 2,
                  '&::before': {
                    content: '"✓"',
                    mr: 2,
                    color: theme.palette.primary.contrastText,
                    fontWeight: 'bold',
                  },
                },
              }}
            >
              {data.elementos_derecha.map((item) => (
                <ListItem key={item.id} sx={{ justifyContent: 'flex-start' }}>
                  {item.texto}
                </ListItem>
              ))}
            </List>
          </AppGrid>
        </AppGrid>

        <AppButton size="medium" color="primary" onClick={handleButtonClick}>
          {data.texto_boton}
        </AppButton>
      </AppContainer>
    </AppBox>
  );
};

export default CustomerServiceSection;
