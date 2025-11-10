import React from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, CircularProgress, Alert, Box } from '@mui/material';
import { AppTypography, AppBox, Breadcrumb, AppContainer } from 'ui';
import { useTheme } from '@mui/material/styles';
import { useViewCategory } from '../hooks/useViewCategory';
import { useSectionByDocumentId } from '../hooks/useSectionByDocumentId';
import { SectionEntity } from '../../domain/entities/SectionEntity';
import MenuTiposDeCarga from '../components/MenuTiposDeCarga';
import { RenderSeccion } from '../components/seccionTipoCarga';

// 🧱 Datos estáticos de respaldo
import { cargaData } from '../components/cargaData';
import { InfoTipoCarga, BoAButton, AppStack } from 'ui';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';

function TipoCargaScreen() {
  const { tipo } = useParams<{ tipo: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const [selectedSection, setSelectedSection] = useState<SectionEntity | null>(null);
  const [selected, setSelected] = useState(tipo || 'cargaGeneral');

  // 🔗 Llamadas API
  const { data, loading, error } = useViewCategory();
  const {
    data: dataSection,
    loading: loadingSection,
    error: errorSection,
  } = useSectionByDocumentId(selectedSection?.documentId || '');

  // 📍 Redirección si no hay tipo en la URL
  React.useEffect(() => {
    if (!tipo) navigate('/tipos-cargas/cargaGeneral', { replace: true });
  }, [tipo, navigate]);

  // =====================
  // 🧩 FALLBACK ESTÁTICO
  // =====================
  if (error || !data) {
    const colorBoton = theme.palette.primary.dark;
    const colorHover = theme.palette.primary.main;

    const breadcrumbMap: Record<string, string> = {
      cargaGeneral: 'Carga General',
      animalesVivos: 'Animales Vivos',
      perecederos: 'Perecederos',
      restosHumanos: 'Restos Humanos',
      cargaValorada: 'Carga Valorada',
      peligrosa: 'Carga Peligrosa',
    };

    const renderContent = () => {
      const dataStatic = cargaData[selected];
      if (!dataStatic) return <p>No hay información disponible.</p>;
      return (
        <InfoTipoCarga
          title={dataStatic.title}
          description={dataStatic.description}
          imageUrl={dataStatic.imageUrl}
          subtitle={dataStatic.subtitle}
          details={dataStatic.details}
          notice={dataStatic.notice}
          example={dataStatic.example}
          onClick={() => setSelected('')}
        />
      );
    };

    return (
      <AppContainer sx={{ py: 4 }}>
        <AppTypography variant="h2Bold" color="primary" mb={2}>
          Tipos de carga
        </AppTypography>
        <AppTypography variant="baseRegular" mb={4} textAlign="justify">
          Según la Asociación de Transporte Aéreo Internacional (IATA), la carga se puede clasificar
          en carga general y carga especial, además de distinguir entre mercancías peligrosas y no
          restringidas. La carga especial abarca tipos como la perecedera, frágil y animales vivos,
          cada una con requisitos específicos de manejo, embalaje y transporte.
        </AppTypography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <AppStack
              sx={{
                background: theme.palette.background.default,
                p: 1,
                position: { xs: 'static', md: 'sticky' },
                top: { md: theme.spacing(10) },
                alignSelf: 'flex-start',
              }}
            >
              <AppTypography variant="h4Bold" color="primary.main" mb={2}>
                Categorías:
              </AppTypography>
              <BoAButton
                color={colorBoton}
                hover={colorHover}
                mainButton={false}
                onClick={() => navigate('/tipos-cargas/cargaGeneral')}
                selected={selected === 'cargaGeneral'}
                icon={<Inventory2OutlinedIcon />}
              >
                Carga General
              </BoAButton>
              <BoAButton
                color={colorBoton}
                hover={colorHover}
                mainButton={false}
                onClick={() => navigate('/tipos-cargas/animalesVivos')}
                selected={selected === 'animalesVivos'}
                icon={<PetsOutlinedIcon />}
              >
                Animales Vivos
              </BoAButton>
              <BoAButton
                color={colorBoton}
                hover={colorHover}
                mainButton={false}
                onClick={() => navigate('/tipos-cargas/perecederos')}
                selected={selected === 'perecederos'}
                icon={<SetMealOutlinedIcon />}
              >
                Perecederos
              </BoAButton>
              <BoAButton
                color={colorBoton}
                hover={colorHover}
                mainButton={false}
                onClick={() => navigate('/tipos-cargas/restosHumanos')}
                selected={selected === 'restosHumanos'}
                icon={<LocalHospitalOutlinedIcon />}
              >
                Restos Humanos
              </BoAButton>
              <BoAButton
                color={colorBoton}
                hover={colorHover}
                mainButton={false}
                onClick={() => navigate('/tipos-cargas/cargaValorada')}
                selected={selected === 'cargaValorada'}
                icon={<MonetizationOnOutlinedIcon />}
              >
                Carga Valorada
              </BoAButton>
              <BoAButton
                color={colorBoton}
                hover={colorHover}
                mainButton={false}
                onClick={() => navigate('/tipos-cargas/peligrosa')}
                selected={selected === 'peligrosa'}
                icon={<DangerousOutlinedIcon />}
              >
                Carga Peligrosa
              </BoAButton>
            </AppStack>
          </Grid>

          <Grid item xs={12} md={9}>
            <Box>{renderContent()}</Box>
          </Grid>
        </Grid>
      </AppContainer>
    );
  }

  // =====================
  // ✅ VISTA DINÁMICA NORMAL
  // =====================
  if (loading) {
    return (
      <AppBox sx={{ py: { xs: 4, md: 7 }, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </AppBox>
    );
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
