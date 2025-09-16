import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import { AppTypography, BoAButton } from 'ui';
import { InfoTipoCarga } from 'ui';
import { useTheme } from '@mui/material/styles';
import { cargaData } from '../components/cargaData';
import { AppContainer } from 'ui';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { AppStack } from 'ui';

function TipoCargaScreen() {
  const { tipo } = useParams<{ tipo: string }>(); //obtiene el valor de la URL
  const [selected, setSelected] = React.useState<string>(tipo || 'cargaGeneral'); //valor inicial desde la URL

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
        subtitle={data.subtitle}
        details={data.details}
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
      <AppTypography variant="baseRegular" mb={2}>
        {`Al analizar los distintos tipos de carga transportada por vía aérea, se dividen en dos grupos principales: carga general y carga especial.Esta última se divide en subgrupos especializados más pequeños. Analizaremos estos subgrupos con mayor detalle más adelante.

        Si tiene preguntas respecto a los requisitos para los envíos aéreos, le invitamos a comunicarse con nuestro Call Center de su ciudad de residencia.`}
      </AppTypography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3} lg={3}>
          <AppStack
            sx={{
              background: theme.palette.background.default,
              // border: '1px solid #e6e5e5ff',
              //borderRadius: 2,
              p: 1,
            }}
          >
            <AppTypography variant="h4Bold" color="primary.dark" mb={2}>
              Categorías:
            </AppTypography>
            <BoAButton
              color={colorBoton}
              hover={colorHover}
              mainButton={mainButton}
              onClick={() => setSelected('cargaGeneral')}
              selected={selected === 'cargaGeneral'}
              icon={<Inventory2OutlinedIcon />}
            >
              Carga General
            </BoAButton>
            <BoAButton
              color={colorBoton}
              hover={colorHover}
              mainButton={mainButton}
              onClick={() => setSelected('animalesVivos')}
              selected={selected === 'animalesVivos'}
              icon={<PetsOutlinedIcon />}
            >
              Animales Vivos
            </BoAButton>
            <BoAButton
              color={colorBoton}
              hover={colorHover}
              mainButton={mainButton}
              onClick={() => setSelected('perecederos')}
              selected={selected === 'perecederos'}
              icon={<SetMealOutlinedIcon />}
            >
              Perecederos
            </BoAButton>
            <BoAButton
              color={colorBoton}
              hover={colorHover}
              mainButton={mainButton}
              onClick={() => setSelected('restosHumanos')}
              selected={selected === 'restosHumanos'}
              icon={<LocalHospitalOutlinedIcon />}
            >
              Restos Humanos
            </BoAButton>
            <BoAButton
              color={colorBoton}
              hover={colorHover}
              mainButton={mainButton}
              onClick={() => setSelected('cargaValiosa')}
              selected={selected === 'cargaValiosa'}
              icon={<MonetizationOnOutlinedIcon />}
            >
              Carga Valiosa
            </BoAButton>
            <BoAButton
              color={colorBoton}
              hover={colorHover}
              mainButton={mainButton}
              onClick={() => setSelected('muestrasBiologicas')}
              selected={selected === 'muestrasBiologicas'}
              icon={<VaccinesIcon />}
            >
              Muestras Biológicas
            </BoAButton>
            <BoAButton
              color={colorBoton}
              hover={colorHover}
              mainButton={mainButton}
              onClick={() => setSelected('prohibidos')}
              selected={selected === 'prohibidos'}
              icon={<DangerousOutlinedIcon />}
            >
              Prohibidos
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
