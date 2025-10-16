import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, CircularProgress, Alert, Box } from '@mui/material';
import { AppTypography, AppBox, Breadcrumb } from 'ui';
import { AppContainer } from 'ui';
import { useViewCategory } from '../hooks/useViewCategory';
import MenuTiposDeCarga from '../components/MenuTiposDeCarga';
import { SectionEntity } from '../../domain/entities/SectionEntity';
import { useSectionByDocumentId } from '../hooks/useSectionByDocumentId';
import { RenderSeccion } from '../components/seccionTipoCarga';

function TipoCargaScreen() {
  const { tipo } = useParams<{ tipo: string }>();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = React.useState<SectionEntity | null>(null);

  const { data, loading, error } = useViewCategory();

  const {
    data: dataSection,
    loading: loadingSection,
    error: errorSection,
  } = useSectionByDocumentId(selectedSection?.documentId || '');
  console.log('data seccion:', dataSection);

  // 🔄 Redirigir a carga general por defecto
  React.useEffect(() => {
    if (!tipo) {
      navigate('/tipos-cargas/cargaGeneral', { replace: true });
    }
  }, [tipo, navigate]);

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
          <Breadcrumb
            nameSection={viewCategory.titulo}
            selected={selectedSection?.titulo || 'Cargando...'}
          />

          <AppTypography variant="h2Bold" color="primary" mb={2}>
            {viewCategory.titulo}
          </AppTypography>

          <AppTypography variant="baseRegular" mb={4} textAlign="justify">
            {viewCategory.descripcion}
          </AppTypography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <MenuTiposDeCarga data={viewCategory} onSelectSeccion={setSelectedSection} />
            </Grid>

            <Grid item xs={12} md={9}>
              {loadingSection ? (
                <Box sx={{ p: 2, textAlign: 'center' }}>
                  <CircularProgress size={24} />
                </Box>
              ) : errorSection ? (
                <AppTypography
                  variant="body2"
                  sx={{
                    p: 2,
                    color: 'error.main',
                    backgroundColor: 'background.default',
                    textAlign: 'center',
                  }}
                >
                  Error al cargar la sección seleccionada
                </AppTypography>
              ) : dataSection && dataSection.contenido_seccion?.length > 0 ? (
                <RenderSeccion seccion={dataSection.contenido_seccion} />
              ) : (
                <AppTypography variant="body2" color="text.secondary">
                  Selecciona una sección para ver su contenido.
                </AppTypography>
              )}
            </Grid>
          </Grid>
        </React.Fragment>
      ))}
    </AppContainer>
  );
}

export default TipoCargaScreen;
