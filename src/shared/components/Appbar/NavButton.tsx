import React from 'react';
import { Button } from '@mui/material';

type Props = {
  label: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  active?: boolean;
};

const NavButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ label, onClick, onMouseEnter, onMouseLeave, active }, ref) => (
    <Button
      ref={ref}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        textTransform: 'none',
        fontWeight: 'bold',
        // fontWeight: active ? 700 : 600,
        '&:focus, &.Mui-focusVisible': {
          outline: 'none',
          boxShadow: 'none',
        },
      }}
    >
      {label}
    </Button>
  ),
);
NavButton.displayName = 'NavButton';
export default NavButton;
