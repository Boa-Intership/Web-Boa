import React from 'react';
import { Button } from '@mui/material';

export default function HomeActionButton({ label, onClick, icon }) {
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
} 