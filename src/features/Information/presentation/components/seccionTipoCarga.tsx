// components/RenderSeccion.tsx
import React from 'react';
import { ContenidoSeccion } from '../../domain/entities/SectionEntity';
import { Contenido } from './TipoContenido';
import { Alerta } from './TipoAlerta';
import { TipoAcordion } from './TipoAcordion';
import TipoImagen from './TipoImagen';
import { Box, Grid, Stack } from '@mui/material';

export const RenderSeccion = ({ seccion }: { seccion: ContenidoSeccion[] }) => {
  // Agrupar imágenes consecutivas en un solo bloque
  const grupos: ContenidoSeccion[][] = [];
  let temp: ContenidoSeccion[] = [];

  seccion.forEach((item) => {
    if (item.__component === 'recursos.imagen') {
      temp.push(item);
    } else {
      if (temp.length) {
        grupos.push(temp);
        temp = [];
      }
      grupos.push([item]);
    }
  });

  if (temp.length) grupos.push(temp); // último grupo

  return (
    <Stack spacing={2} sx={{ mt: 1.5 }}>
      {grupos.map((grupo, index) => {
        const firstItem = grupo[0];

        // Caso especial: grupo de imágenes
        if (firstItem.__component === 'recursos.imagen') {
          return (
            <Grid
              container
              spacing={2}
              justifyContent="center"
              //alignItems="stretch"
              key={`grupo-img-${index}`}
              sx={{ mb: 3, width: '100%' }}
            >
              {grupo.map((img, imgIndex) => (
                <Grid item xs={12} sm={6} key={`${img.id}-${index}-${imgIndex}`}>
                  <TipoImagen
                    titulo={img.titulo}
                    descripcion={img.descripcion}
                    imagen_url={img.imagen_url}
                  />
                </Grid>
              ))}
            </Grid>
          );
        }

        // 🧾 Resto de componentes
        switch (firstItem.__component) {
          case 'recursos.contenido':
            return (
              <Contenido
                key={`contenido-${firstItem.id}-${index}`}
                titulo={firstItem.titulo}
                contenido={firstItem.contenido}
                imagen_url={firstItem.imagen_url}
              />
            );

          case 'recursos.alerta':
            return (
              <Alerta
                key={`alerta-${firstItem.id}-${index}`}
                tipo={firstItem.tipo_alerta}
                titulo={firstItem.titulo}
                contenido={firstItem.contenido}
              />
            );
          case 'recursos.acordion':
            return (
              <TipoAcordion
                key={`acordion-${firstItem.id}-${index}`}
                titulo={firstItem.titulo}
                contenido={firstItem.contenido}
                defaultExpanded={index === 0}
              />
            );

          case 'recursos.imagen':
            return (
              <TipoImagen
                key={firstItem.id}
                titulo={firstItem.titulo}
                descripcion={firstItem.descripcion}
                imagen_url={firstItem.imagen_url}
              />
            );

          default:
            return null;
        }
      })}
    </Stack>
  );
};
