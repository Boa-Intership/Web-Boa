import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { AppTypography, BoAButton, AppStack } from 'ui';
import { InfoTipoCarga } from 'ui';
import { useTheme } from '@mui/material/styles';
import { cargaData } from '../components/cargaData';
import { AppContainer } from 'ui';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';

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

  const theme = useTheme();
  const colorBoton = theme.palette.primary.dark;
  const colorHover = theme.palette.primary.main;
  const mainButton = false;

  const renderContent = () => {
    if (!selected) {
      return <p>Selecciona un tipo de carga para ver la información</p>;
    }

    const data = cargaData[selected]; // obtiene el objeto según la selección
    if (!data) return <p>No hay información para esta categoría</p>;

    return (
      <InfoTipoCarga
        title={data.title}
        description={data.description}
        imageUrl={data.imageUrl}
        subtitle={data.subtitle}
        details={data.details}
        notice={data.notice}
        example={data.example}
        onClick={() => setSelected('')} // para cerrar o resetear
      />
    );
  };

  return (
    <AppContainer sx={{ py: 4 }}>
      <AppTypography variant="h2Bold" color="primary" mb={2}>
        Tipos de carga
      </AppTypography>
      <AppTypography variant="baseRegular" mb={2} textAlign="justify">
        De acuerdo con la IATA, la carga transportada por vía aérea se clasifica en dos grandes
        categorías: carga general y carga especial. Esta última comprende diversos subgrupos con
        requisitos específicos.
      </AppTypography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} lg={3}>
          <AppStack
            sx={{
              background: theme.palette.background.default,
              p: 1,
              position: {
                xs: 'static', //  en móviles no se queda fijo
                md: 'sticky', //  desde md hacia arriba sí
              },
              top: { md: theme.spacing(10) }, // solo aplica en pantallas grandes
              alignSelf: 'flex-start',
            }}
          >
            <AppTypography variant="h4Bold" color="primary.main" mb={2}>
              Categorías:
            </AppTypography>
            <BoAButton
              color={colorBoton}
              hover={colorHover}
              mainButton={mainButton}
              onClick={() => navigate('/tipos-cargas/cargaGeneral')}
              selected={selected === 'cargaGeneral'}
              icon={<Inventory2OutlinedIcon />}
            >
              Carga General
            </BoAButton>
            <BoAButton
              color={colorBoton}
              hover={colorHover}
              mainButton={mainButton}
              onClick={() => navigate('/tipos-cargas/animalesVivos')}
              selected={selected === 'animalesVivos'}
              icon={<PetsOutlinedIcon />}
            >
              Animales Vivos
            </BoAButton>
            <BoAButton
              color={colorBoton}
              hover={colorHover}
              mainButton={mainButton}
              onClick={() => navigate('/tipos-cargas/perecederos')}
              selected={selected === 'perecederos'}
              icon={<SetMealOutlinedIcon />}
            >
              Perecederos
            </BoAButton>
            <BoAButton
              color={colorBoton}
              hover={colorHover}
              mainButton={mainButton}
              onClick={() => navigate('/tipos-cargas/restosHumanos')}
              selected={selected === 'restosHumanos'}
              icon={<LocalHospitalOutlinedIcon />}
            >
              Restos Humanos
            </BoAButton>
            <BoAButton
              color={colorBoton}
              hover={colorHover}
              mainButton={mainButton}
              onClick={() => navigate('/tipos-cargas/cargaValorada')}
              selected={selected === 'cargaValorada'}
              icon={<MonetizationOnOutlinedIcon />}
            >
              Carga Valorada
            </BoAButton>
            <BoAButton
              color={colorBoton}
              hover={colorHover}
              mainButton={mainButton}
              onClick={() => navigate('/tipos-cargas/peligrosa')}
              selected={selected === 'peligrosa'}
              icon={<DangerousOutlinedIcon />}
            >
              Carga Peligrosa
            </BoAButton>
          </AppStack>
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <Box>{renderContent()}</Box>
        </Grid>
      </Grid>
    </AppContainer>
  );
}

export default TipoCargaScreen;
