// components/Alerta.tsx
import { Alert, Typography } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';

import React from 'react';
import { BlocksRenderer, BlocksContent } from '@strapi/blocks-react-renderer';

interface AlertaProps {
  titulo?: string | null;
  contenido: BlocksContent;
  tipo: string;
}
const tipoToSeverity: Record<AlertaProps['tipo'], 'info' | 'warning' | 'error' | 'success'> = {
  INFORMACION: 'info',
  ADVERTENCIA: 'warning',
  ERROR: 'error',
  EXITO: 'success',
};

export const Alerta: React.FC<AlertaProps> = ({ titulo, contenido, tipo }) => (
  <Alert
    severity={tipoToSeverity[tipo]}
    sx={{
      py: 1,
      px: 1.5,
      //'& .MuiAlert-icon': { alignSelf: 'flex-start', mt: 1.5 },
    }}
  >
    {titulo && <AlertTitle>{titulo}</AlertTitle>}

    <BlocksRenderer content={contenido} />

    {/* {contenido.map((block, i) =>
      block.children.map((child, j) => <span key={`${i}-${j}`}>{child.text}</span>)
    )} */}
  </Alert>
);
