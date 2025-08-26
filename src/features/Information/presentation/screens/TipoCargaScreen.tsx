import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import { RoundButton } from 'ui';
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
  const [selected, setSelected] = React.useState<string>(
    tipo || 'cargaGeneral',
  ); //valor inicial desde la URL

  const theme = useTheme();
  const colorBoton = theme.palette.primary.dark;

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
    <AppContainer>
      <Typography
        variant="h4"
        fontWeight={'bold'}
        gutterBottom
        color={theme.palette.primary.main}
      >
        Tipos de carga
      </Typography>
      <Typography
        variant="body2"
        mb={2}
        textAlign="justify"
        sx={{ whiteSpace: 'pre-line' }}
      >
        {`Al analizar los distintos tipos de carga transportada por vía aérea, se dividen en dos grupos principales: carga general y carga especial.Esta última se divide en subgrupos especializados más pequeños. Analizaremos estos subgrupos con mayor detalle más adelante.

        Si tiene preguntas respecto a los requisitos para los envíos aéreos, le invitamos a comunicarse con nuestro Call Center de su ciudad de residencia.`}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3} lg={3}>
          <AppStack
            sx={{
              boxShadow: 1,
              background: '#fafafa',
              border: '1px solid #e6e5e5ff',
              borderRadius: 2,
              p: 1,
            }}
          >
            <Typography variant="h6" fontWeight={'bold'} color={colorBoton}>
              Categorías:
            </Typography>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('cargaGeneral')}
              selected={selected === 'cargaGeneral'}
              icon={<Inventory2OutlinedIcon />}
            >
              Carga General
            </RoundButton>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('animalesVivos')}
              selected={selected === 'animalesVivos'}
              icon={<PetsOutlinedIcon />}
            >
              Animales Vivos
            </RoundButton>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('perecederos')}
              selected={selected === 'perecederos'}
              icon={<SetMealOutlinedIcon />}
            >
              Perecederos
            </RoundButton>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('restosHumanos')}
              selected={selected === 'restosHumanos'}
              icon={<LocalHospitalOutlinedIcon />}
            >
              Restos Humanos
            </RoundButton>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('cargaValiosa')}
              selected={selected === 'cargaValiosa'}
              icon={<MonetizationOnOutlinedIcon />}
            >
              Carga Valiosa
            </RoundButton>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('muestrasBiologicas')}
              selected={selected === 'muestrasBiologicas'}
              icon={<VaccinesIcon />}
            >
              Muestras Biológicas
            </RoundButton>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('prohibidos')}
              selected={selected === 'prohibidos'}
              icon={<DangerousOutlinedIcon />}
            >
              Prohibidos
            </RoundButton>
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
