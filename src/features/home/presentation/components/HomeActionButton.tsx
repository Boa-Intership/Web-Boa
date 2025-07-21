import React from 'react';
import { Button } from '@mui/material';

interface HomeActionButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
}

const HomeActionButton: React.FC<HomeActionButtonProps> = ({ label, onClick, icon }) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: 120,
        height: 120,
        borderRadius: 2,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
      }}
      onClick={onClick}
      startIcon={icon}
    >
      {label}
    </Button>
  );
};

export default HomeActionButton; 