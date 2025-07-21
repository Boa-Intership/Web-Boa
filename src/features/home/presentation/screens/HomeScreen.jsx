import React from 'react';
import { Box, Stack } from '@mui/material';
import HomeActionButton from '../components/HomeActionButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../router/routes';

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack direction="row" spacing={4}>
        <HomeActionButton 
          label="Información"
          onClick={() => navigate(ROUTES.INFORMACION)}
        />
        <HomeActionButton 
          label="Cotizar"
          onClick={() => navigate(ROUTES.COTIZAR)} 
        />
        <HomeActionButton 
        label="Pre-registro"
        onClick={() => navigate(ROUTES.PREREGISTRO)}
        />
      </Stack>
    </Box>
  );
} 