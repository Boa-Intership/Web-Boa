import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Props {
  color?: string;
  hover?: string;
  letter?: string;
  mainButton?: boolean;
  children: React.ReactNode;
  onClick: () => void;
  selected?: boolean;
  icon?: React.ReactNode;
}

const BoAButton = ({
  color,
  hover,
  letter,
  children,
  onClick,
  mainButton = false,
  selected = false,
  icon,
}: Props) => {
  const theme = useTheme();

  // Colores por defecto si no los pasan
  const btnColor = color || theme.palette.warning.dark;
  const btnHover = hover || theme.palette.warning.main;
  const btnLetter = letter || theme.palette.grey[300];

  // Si es principal o está seleccionado → contained
  // Caso contrario → outlined
  const variant = selected || mainButton ? 'contained' : 'outlined';

  return (
    <Button
      onClick={onClick}
      startIcon={icon}
      variant={variant}
      sx={{
        textTransform: 'none',
        borderRadius: '9px',
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        gap: '12px',
        padding: '8px 12px',
        paddingLeft: icon ? '26px' : '12px',
        borderWidth: 1,
        borderColor: btnColor,
        backgroundColor: variant === 'contained' ? btnColor : 'transparent',
        color: variant === 'contained' ? btnLetter : btnColor,
        '&:hover': {
          backgroundColor: btnHover,
          color: btnLetter,
          borderColor: btnHover,
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

export default BoAButton;
