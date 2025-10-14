import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, CircularProgress, Alert } from '@mui/material';
import { AppTypography, AppBox } from 'ui';
import { InfoTipoCarga } from 'ui';
import { cargaData } from '../components/cargaData';
import { AppContainer } from 'ui';
import { SeccionCarga } from '../../domain/entities/Carga';

import { Breadcrumb } from 'ui';

import { cargaStrapi } from '../../domain/entities/Carga';
import MenuTiposDeCarga from '../components/MenuTiposDeCarga';
import { RenderSeccion } from '../components/seccionTipoCarga';
import { useViewCategory } from '../hooks/useViewCategory';

function TipoCargaScreen() {
  const { tipo } = useParams<{ tipo: string }>(); //obtiene el valor de la URL
  const [selected, setSelected] = React.useState(tipo || 'cargaGeneral'); //valor inicial desde la URL
  const navigate = useNavigate();

  React.useEffect(() => {
    // Si el usuario entra a /tipos-cargas sin :tipo
    if (!tipo) {
      navigate('/tipos-cargas/cargaGeneral', { replace: true });
    } else {
      setSelected(tipo);
    }
  }, [tipo, navigate]);

  // Mapeo para nombres legibles en el breadcrumb
  const breadcrumbMap: Record<string, string> = {
    cargaGeneral: 'Carga General',
    animalesVivos: 'Animales Vivos',
    perecederos: 'Perecederos',
    restosHumanos: 'Restos Humanos',
    cargaValorada: 'Carga Valorada',
    peligrosa: 'Carga Peligrosa',
  };

  // const renderContent = () => {
  //   if (!selected) {
  //     return <p>Selecciona un tipo de carga para ver la información</p>;
  //   }

  //   const data = cargaData[selected]; // obtiene el objeto según la selección
  //   if (!data) return <p>No hay información para esta categoría</p>;

  //   return (
  //     <InfoTipoCarga
  //       title={data.title}
  //       description={data.description}
  //       imageUrl={data.imageUrl}
  //       subtitle={data.subtitle}
  //       details={data.details}
  //       notice={data.notice}
  //       example={data.example}
  //       onClick={() => setSelected('')} // para cerrar o resetear
  //     />
  //   );
  // };

  const tipoCarga = cargaStrapi.ejemplo;
  const [seccionSeleccionada, setSeccionSeleccionada] = React.useState<SeccionCarga | null>(null);

  const handleSelectSeccion = (seccion: SeccionCarga) => {
    console.log('Seleccionaste la sección:', seccion.titulo);
    setSeccionSeleccionada(seccion);
  };

  const { data, loading, error } = useViewCategory();

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

  if (!data) {
    return null;
  }

  return (
    <AppContainer sx={{ py: 4 }}>
      {data.map((viewCategory) => (
        <React.Fragment key={viewCategory.id}>
          <AppTypography variant="h2Bold" color="primary" mb={2}>
            {viewCategory.titulo}
          </AppTypography>
          <AppTypography variant="baseRegular" mb={4} textAlign="justify">
            {viewCategory.descripcion}
          </AppTypography>

          <Grid container spacing={3}>
            {viewCategory.categorias_cargas.map((categoria) => (
              <Grid item xs={12} sm={6} md={4} key={categoria.id}>
                <AppBox
                  sx={{
                    p: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    height: '100%',
                  }}
                >
                  <AppTypography variant="h3Bold" mb={2}>
                    {categoria.titulo}
                  </AppTypography>
                  <AppTypography variant="baseRegular" color="text.secondary">
                    ID: {categoria.documentoId}
                  </AppTypography>
                </AppBox>
              </Grid>
            ))}
          </Grid>
        </React.Fragment>
      ))}
    </AppContainer>
  );
}

export default TipoCargaScreen;
