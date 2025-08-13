import React from 'react';
import { Box, Button, Typography, Card, CardMedia, CardContent } from '@mui/material';

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
    <Card
      sx={{
        width: 300,
        height: 400,
        borderRadius: 3,
        boxShadow: 2,
        textAlign: 'center',
        overflow: 'hidden',
        // transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          // transform: 'scale(1.03)',
          boxShadow: 6,
        },
      }}
    >
      {/* Imagen */}
      <CardMedia
        component="img"
        height="180"
        image={imageUrl}
        alt={title}
        sx={{
          objectFit: 'cover',
        }}
      />

      {/* Contenido */}
      <CardContent sx={{ p: 2}}>
        <Box display="flex" alignItems="center" gap={1} justifyContent="flex-start">
          {icon}
          <Typography variant="h6" fontWeight="bold" color="#002F5B">
            {title}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign={'left'}
          sx={{ mt: 2, mb:2 }}
        >
          {description}
        </Typography>

        {onClick && (
          <Button
            variant="outlined"
            onClick={onClick}
            sx={{
              textTransform: 'none',
              borderRadius: 20,
              borderWidth: 2,
              borderColor: '#f6a40e',
              color: '#f6a40e',
              fontWeight: 'bold',
              
              px: 3,
              '&:hover': {
                backgroundColor: '#f6a40e',
                color: '#fff',
                borderColor: '#f6a40e',
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
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ButtonCardInfo;
