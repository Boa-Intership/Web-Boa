import React from 'react'
import { Typography,Container,Box,Grid,Stack, Button } from '@mui/material'
import InfoTipoCarga from '../components/infoTipoCarga';
import RoundButton from '../../../../shared/components/RoundButton';
import { useTheme } from "@mui/material/styles";
import { cargaData } from '../components/cargaData';


function TipoCargaScreen() {
  const theme = useTheme();
  const [selected, setSelected] = React.useState<string>(""); 

  const renderContent = () => {
  if (!selected) {
    return <p>Selecciona un tipo de carga para ver la información</p>;
  }

  const data = cargaData[selected]; // obtiene el objeto según la selección
    if (!data) return <p>No hay información para esta categoría</p>;

    return (
      <InfoTipoCarga
        open={!!selected}                  
        title={data.title}
        description={data.description}
        subtitle={data.subtitle}
        details={data.details}
        example={data.example}
        onClick={() => setSelected("")} // 👈 para cerrar o resetear
      />
    );
  };

  return (
    <Container >
      <Box mb={2} >
      <Typography>
        Inicio Tipos de carga Carga general
      </Typography>
      </Box>
      <Grid container spacing={4}  >
        <Grid item xs={12} md={3}>
          <Stack spacing={2}>
            <RoundButton color={theme.palette.primary.main} onClick={() => setSelected("cargaGeneral")}>Carga General</RoundButton>
            <RoundButton color={theme.palette.primary.main} onClick={() => setSelected("animalesVivos")}>Animales Vivos</RoundButton>
            <RoundButton color={theme.palette.primary.main} onClick={() => setSelected("perecederos")}>Perecederos</RoundButton>
            <RoundButton color={theme.palette.primary.main} onClick={() => setSelected("restosHumanos")}>Restos Humanos</RoundButton>
            <RoundButton color={theme.palette.primary.main} onClick={() => setSelected("prohibidos")}>Prohibidos</RoundButton> 
          </Stack>
        </Grid> 
        <Grid item  xs={12} md={9} >
          <Box >
             {renderContent()} 
           
          </Box>
        </Grid> 
      </Grid>

      
    </Container>
  )
}

export default TipoCargaScreen
