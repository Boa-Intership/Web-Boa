import React, { FC } from 'react';
import { Box, List, ListItem, Stack, CircularProgress } from '@mui/material';
import { AppBox, AppContainer, AppGrid, AppButton, AppTypography } from 'ui';
import { useNavigate } from 'react-router-dom';
import { useCustomerService } from '../hooks/useCustomerService';
import aboutImg from '@/assets/call.webp';

const CustomerServiceSection: FC = () => {
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

  return (
    <AppBox>
      <AppContainer>
        <AppGrid container spacing={4} alignItems="center" justifyContent="center">
          <AppGrid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={data.imagen_url || aboutImg}
              alt={data.titulo}
              sx={{
                width: { xs: '105%', md: '115%' },
                borderRadius: 6,
              }}
            />
          </AppGrid>
          <AppGrid item xs={10} md={6} sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <AppBox
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                alignItems: 'flex-start',
              }}
            >
              <Stack sx={{ gap: 2, mb: 2 }}>
                <AppTypography variant="h2Bold" color="primary">
                  {data.titulo}
                </AppTypography>
                <AppTypography variant="baseRegular" color="text.secondary">
                  {data.descripcion}
                </AppTypography>
              </Stack>
              <AppGrid container>
                <AppGrid>
                  <List>
                    {data.elementos_izquierda.map((item) => (
                      <ListItem key={item.id}>{item.texto}</ListItem>
                    ))}
                  </List>
                </AppGrid>
                <AppGrid>
                  <List>
                    {data.elementos_derecha.map((item) => (
                      <ListItem key={item.id}>{item.texto}</ListItem>
                    ))}
                  </List>
                </AppGrid>
              </AppGrid>
              <AppButton size="large" color="primary" onClick={handleButtonClick}>
                {data.texto_boton}
              </AppButton>
            </AppBox>
          </AppGrid>
        </AppGrid>
      </AppContainer>
    </AppBox>
  );
};

export default CustomerServiceSection;
