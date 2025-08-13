import React from 'react';
import { Box, Button, Typography } from '@mui/material';


interface ButtonCardInfoProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  imageUrl?: string;
}

const ButtonCardInfo: React.FC<ButtonCardInfoProps> = ({
  title,
  description,
  icon,
  onClick,
  imageUrl,
}) => {
  return (
    <Box
      sx={{
        //backgroundImage: `url(${imageUrl})`,
        borderRadius: 5,
        position: 'relative',
        width: 350,
        height: 250,
        overflow: 'hidden',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        boxShadow: 2,
        transition: 'transform 0.5s ease, box-shadow 0.3s ease',
        // cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.07)',
          boxShadow: 8,
        },

      }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '40%',
          backgroundColor: 'rgba(0, 0, 0, 0.55)', // opacidad para oscurecer fondo
        }}
      />

      {/* Contenido sobre la imagen */}
      <Box
        sx={{
          position: 'relative',
          color: 'white',
          padding: 1,
          width: '100%',
          height: '40%',
          zIndex: 1,
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          {icon}
          <Typography fontSize={20} variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" gap={1} width="100%">
          <Typography fontSize={14} variant="subtitle1">
            {description}
          </Typography>
          {onClick && (
            <Button
              variant="contained"
              onClick={onClick}
              size='medium'
              sx={{
                textTransform: 'none',
                // backgroundColor:(theme) => theme.palette.blue_dark.main,
                backgroundColor: '#0F5299',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: "#3668AD",
                },
                '&:focus': {
                  outline: 'none',
                  boxShadow: 'none',
                },
                '&.Mui-focusVisible': {
                  outline: 'none',
                  boxShadow: 'none',
                },
              }}
            >
              Ver más
            </Button>)}
        </Box>
      </Box>
    </Box>
  );
};


export default ButtonCardInfo;
