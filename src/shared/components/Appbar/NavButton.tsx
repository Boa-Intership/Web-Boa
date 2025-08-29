import React from 'react';
import { Button } from '@mui/material';

type Props = {
  label: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  active?: boolean;
  icon?: React.ReactNode;
};

const NavButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ label, onClick, onMouseEnter, onMouseLeave, active, icon }, ref) => (
    <Button
      ref={ref}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      endIcon={icon}
      sx={{
        textTransform: 'none',
        fontWeight: 'bold',
        position: 'relative',

        color: active ? 'warning.main' : 'primary.main',
        transition: 'color 0.3s ease',

        '&:hover': {
          color: 'warning.main',
          backgroundColor: 'transparent',
        },
        '&:focus, &.Mui-focusVisible': { outline: 'none', boxShadow: 'none' },

        // Línea animada abajo del texto
        '&::after': {
          content: '""',
          position: 'absolute',
          width: active ? '100%' : '0%',
          height: '2px',
          left: 0,
          bottom: 0,
          backgroundColor: 'warning.main',
          transition: 'width 0.3s ease',
        },
        '&:hover::after': {
          width: '100%',
        },
      }}
    >
      {label}
    </Button>
  ),
);
NavButton.displayName = 'NavButton';
export default NavButton;
