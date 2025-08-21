import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';
import ButtonCardInfo from './ButtonCardInfo';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import VaccinesIcon from '@mui/icons-material/Vaccines';

export default function CardInfoSection() {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      <Typography
        variant="h4"
        fontWeight={'bold'}
        color={'#0F5299'}
        marginBottom={2}
      >
        Tipos de carga en BoA Cargo
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <Grid item>
          <ButtonCardInfo
            title="Carga General"
            description="Se refiere a todo tipo de mercancía que no necesita condiciones especiales de manipulación, transporte o almacenamiento."
            onClick={() => console.log('hola')}
            icon={<Inventory2OutlinedIcon />}
            imageUrl="/informacioPage/cargaGeneral/paquete.jpg"
            tag="Permitido"
          />
        </Grid>
        <Grid item>
          <ButtonCardInfo
            title="Animales vivos"
            description="Es el servicio especializado para animales vivos bajo condiciones específicas que garanticen su bienestar, seguridad y cumplimiento normativo durante todo el viaje."
            onClick={() => console.log('hola')}
            icon={<PetsOutlinedIcon />}
            imageUrl="/informacioPage/animalesVivos/mascotas2.jpg"
            tag="Permitido"
          />
        </Grid>
        <Grid item>
          <ButtonCardInfo
            title="Perecederos"
            description="Son aquellos productos que tienen una vida útil limitada y que requieren condiciones especiales de temperatura, humedad o manejo."
            onClick={() => console.log('hola')}
            icon={<SetMealOutlinedIcon />}
            imageUrl="/informacioPage/perecederos/alimentos.jpg"
            tag="Permitido"
          />
        </Grid>
        <Grid item>
          <ButtonCardInfo
            title="Restos Humanos"
            description="Es el transporte aéreo de personas fallecidas, ya sea en forma de cuerpo completo o de cenizas. "
            onClick={() => console.log('hola')}
            icon={<LocalHospitalOutlinedIcon />}
            imageUrl="/informacioPage/restosHumanos/ataud.webp"
            tag="Permitido"
          />
        </Grid>
        <Grid item>
          <ButtonCardInfo
            title="Carga Valiosa"
            description="Se refiere a mercancías que tienen un alto valor económico, cultural o sensible, y que requieren medidas especiales de seguridad y custodia durante su transporte aéreo."
            onClick={() => console.log('hola')}
            icon={<MonetizationOnOutlinedIcon />}
            imageUrl="/informacioPage/valiosos/GGI_dinero.png"
            tag="Permitido"
          />
        </Grid>
        <Grid item>
          <ButtonCardInfo
            title="Muestras biológicas"
            description="Son un tipo de carga especial que corresponde a materiales de origen humano o animal que se transportan con fines médicos, diagnósticos, de investigación o control sanitario."
            onClick={() => console.log('hola')}
            icon={<VaccinesIcon />}
            imageUrl="/informacioPage/muestrasBiologicas/GGI_muestras.png"
            tag="Permitido"
          />
        </Grid>
        <Grid item>
          <ButtonCardInfo
            title="Peligrosos"
            description="Hace referencia a todos aquellos objetos o sustancias que no están permitidos para su transporte por vía aérea."
            onClick={() => console.log('hola')}
            icon={<DangerousOutlinedIcon />}
            imageUrl="/informacioPage/peligroso/prohibido.jpg"
            tag="No Permitido"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
