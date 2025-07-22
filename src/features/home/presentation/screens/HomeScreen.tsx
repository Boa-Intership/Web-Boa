import React from 'react';
import { Box, Stack } from '@mui/material';
import HomeActionButton from '../components/HomeActionButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../router/routes';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '80vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Stack 
        direction={{ xs: 'column', sm: 'row'}} 
        spacing={4} 
        alignItems="center"
      >
        <HomeActionButton label="Información" onClick={() => navigate(ROUTES.INFORMACION)}/>
        <HomeActionButton label="Cotizar" onClick={() => navigate(ROUTES.COTIZAR)}/>
        <HomeActionButton label="Pre-registro" onClick={() => navigate(ROUTES.PREREGISTRO)}/>
      </Stack>
    </Box>
  );
};

export default HomeScreen; 