import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Props {
  color?: string;
  hover?: string;
  letter?: string;
  mainButton: boolean;
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
  color = color || theme.palette.warning.dark;
  hover = hover || theme.palette.warning.main;
  letter = letter || theme.palette.grey[300];

  return (
    <Button
      onClick={onClick}
      startIcon={icon}
      sx={{
        textTransform: 'none',
        borderRadius: '9px',
        borderWidth: 1,
        backgroundColor: selected || mainButton ? color : 'none', // <-- si es mainButton fondo pintado
        borderStyle: 'solid',
        borderColor: !mainButton ? color : 'transparent',
        color: selected || mainButton ? letter : color,
        fontWeight: 'bold',
        px: 2,
        '&:hover': {
          backgroundColor: hover,
          color: letter,
          borderColor: hover,
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
