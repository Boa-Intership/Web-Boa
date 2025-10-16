import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, CircularProgress, Alert } from '@mui/material';
import { AppTypography, AppBox } from 'ui';
import { AppContainer } from 'ui';
import { useCategoryByDocumentId } from '../hooks/useCategoryByDocumentId';
import { useViewCategory } from '../hooks/useViewCategory';
import MenuTiposDeCarga from '../components/MenuTiposDeCarga';

function TipoCargaScreen() {
  const { tipo } = useParams<{ tipo: string }>();
  const [selectedDocumentId, setSelectedDocumentId] = React.useState<string | null>(null);
  const navigate = useNavigate();
  const { data: selectedCategory, loading: loadingCategory } = useCategoryByDocumentId(
    selectedDocumentId || ''
  );

  // Efecto para mostrar las secciones en la consola cuando se carga una categoría
  React.useEffect(() => {
    if (selectedCategory && selectedCategory.seccions) {
      console.log('Secciones de la categoría:', selectedCategory.titulo);
      selectedCategory.seccions.forEach((seccion) => {
        console.log(`- ${seccion.titulo}`);
      });
    }
  }, [selectedCategory]);

  React.useEffect(() => {
    if (!tipo) {
      navigate('/tipos-cargas/cargaGeneral', { replace: true });
    }
  }, [tipo, navigate]);

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
            <Grid item xs={12} md={4}>
              <MenuTiposDeCarga data={viewCategory} />
            </Grid>
            <Grid item xs={12} md={8}>
              <AppTypography>hola</AppTypography>
            </Grid>
          </Grid>
        </React.Fragment>
      ))}
    </AppContainer>
  );
}

export default TipoCargaScreen;
