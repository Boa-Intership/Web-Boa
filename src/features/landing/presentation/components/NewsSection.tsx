import React from 'react';
import { AppBox, AppTypography, Carousel } from 'ui';
import { useNews } from '../hooks/useNews';
import { Alert, CircularProgress } from '@mui/material';
import { AppContainer } from 'ui';

const NewsSection: React.FC = () => {
  const { data: newsData, loading, error } = useNews();

  // Solo mostramos la sección si está activa y filtramos las noticias activas
  const activeNews = newsData?.activo ? newsData.noticias.filter((noticia) => noticia.activo) : [];

  if (loading) {
    return (
      <AppBox sx={{ py: { xs: 4, md: 7 }, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </AppBox>
    );
  }

  if (error) {
    return (
      <AppBox sx={{ py: { xs: 4, md: 7 } }}>
        <AppContainer>
          <Alert severity="error">Error cargando contenido: {error}</Alert>
        </AppContainer>
      </AppBox>
    );
  }

  if (!newsData) {
    return null;
  }

  return (
    <AppBox sx={{ py: 4, background: 'background.default', width: '100%' }}>
      <AppTypography variant="h2Bold" color="primary" textAlign="center">
        {newsData.titulo}
      </AppTypography>
      <AppBox
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Carousel items={activeNews} />
      </AppBox>
    </AppBox>
  );
};

export default NewsSection;
