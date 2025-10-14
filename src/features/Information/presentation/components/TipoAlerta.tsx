// components/Alerta.tsx
import { Alert } from '@mui/material';
import AlertTitle from '@mui/material/AlertTitle';

import React from 'react';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
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
  <Alert severity={tipoToSeverity[tipo]} sx={{ mb: 2 }}>
    {titulo && <AlertTitle>{titulo}</AlertTitle>}
    {contenido.map((block, i) =>
      block.children.map((child, j) => <span key={`${i}-${j}`}>{child.text}</span>)
    )}
  </Alert>
);
