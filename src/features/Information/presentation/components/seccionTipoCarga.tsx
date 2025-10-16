// components/RenderSeccion.tsx
import React from 'react';
import { ContenidoSeccion } from '../../domain/entities/Carga';
import { Contenido } from './TipoContenido';
import { Alerta } from './TipoAlerta';
import { Box } from '@mui/material';

export const RenderSeccion = ({ seccion }: { seccion: ContenidoSeccion[] }) => {
  return (
    <Box mt={1.5}>
      {seccion.map((item) => {
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

          default:
            return null;
        }
      })}
    </Box>
  );
};
