// components/RenderSeccion.tsx
import React from 'react';
import { ContenidoSeccion } from '../../domain/entities/Carga';
import { Contenido } from './TipoContenido';
import { Alerta } from './TipoAlerta';
import { TipoAcordion } from './TipoAcordion';
import TipoImagen from './TipoImagen';
import { Box, Stack } from '@mui/material';

export const RenderSeccion = ({ seccion }: { seccion: ContenidoSeccion[] }) => {
  return (
    <Stack spacing={3} sx={{ mt: 1.5 }}>
      {seccion.map((item, index) => {
        switch (item.__component) {
          case 'recursos.contenido':
            return (
              <Contenido
                key={item.id}
                titulo={item.titulo}
                contenido={item.contenido}
                imagen_url={item.imagen_url}
              />
            );

          case 'recursos.alerta':
            return (
              <Alerta
                key={item.id}
                tipo={item.tipo_alerta}
                titulo={item.titulo}
                contenido={item.contenido}
              />
            );
          case 'recursos.acordion':
            return (
              <TipoAcordion
                key={item.id}
                titulo={item.titulo}
                contenido={item.contenido}
                defaultExpanded={index === 0} // si quieres abrir el primero
              />
            );

          case 'recursos.imagen':
            return (
              <TipoImagen
                key={item.id}
                titulo={item.titulo}
                descripcion={item.descripcion}
                imagen_url={item.imagen_url}
              />
            );

          default:
            return null;
        }
      })}
    </Stack>
  );
};
