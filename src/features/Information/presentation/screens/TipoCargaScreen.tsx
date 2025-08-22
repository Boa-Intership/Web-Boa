import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Stack } from '@mui/material';
import { RoundButton } from 'ui';
import { InfoTipoCarga } from 'ui';
import { useTheme } from '@mui/material/styles';
import { cargaData } from '../components/cargaData';
import { AppContainer } from 'ui';

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
      <Grid container spacing={4}>
        <Grid item xs={12} md={3} lg={3}>
          <Stack spacing={2}>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('cargaGeneral')}
              selected={selected === 'cargaGeneral'}
            >
              Carga General
            </RoundButton>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('animalesVivos')}
              selected={selected === 'animalesVivos'}
            >
              Animales Vivos
            </RoundButton>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('perecederos')}
              selected={selected === 'perecederos'}
            >
              Perecederos
            </RoundButton>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('restosHumanos')}
              selected={selected === 'restosHumanos'}
            >
              Restos Humanos
            </RoundButton>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('cargaValiosa')}
              selected={selected === 'cargaValiosa'}
            >
              Carga Valiosa
            </RoundButton>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('muestrasBiologicas')}
              selected={selected === 'muestrasBiologicas'}
            >
              Muestras Biológicas
            </RoundButton>
            <RoundButton
              color={colorBoton}
              onClick={() => setSelected('prohibidos')}
              selected={selected === 'prohibidos'}
            >
              Prohibidos
            </RoundButton>
          </Stack>
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <Box>{renderContent()}</Box>
        </Grid>
      </Grid>
    </AppContainer>
  );
}

export default TipoCargaScreen;
