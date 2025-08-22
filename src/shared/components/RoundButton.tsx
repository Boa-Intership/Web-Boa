import React from 'react';
import { Button } from '@mui/material';

interface Props {
  color?: string;
  children: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
}

const RoundButton = ({
  color = '#f6a40e',
  children,
  onClick,
  selected = false,
}: Props) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        textTransform: 'none',
        borderRadius: '20px',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: color,
        background: selected ? color : 'none', // <-- si está seleccionado fondo pintado
        color: selected ? '#fff' : color, // <-- texto blanco si está seleccionado
        fontWeight: 'bold',
        px: 2,
        '&:hover': {
          backgroundColor: color,
          color: '#fff',
          borderColor: color,
        },
        '&:focus, &.Mui-focusVisible': {
          outline: 'none',
          boxShadow: 'none',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default RoundButton;
