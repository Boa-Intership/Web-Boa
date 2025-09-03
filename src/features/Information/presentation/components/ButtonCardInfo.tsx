import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import RoundButton from '../../../../shared/components/RoundButton';

interface ButtonCardInfoProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  imageUrl: string;
  tag: string;
}

const ButtonCardInfo: React.FC<ButtonCardInfoProps> = ({
  title,
  description,
  icon,
  onClick,
  imageUrl,
  tag,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Card
      sx={{
        width: 320,
        height: 390,
        borderRadius: 3,
        boxShadow: 2,
        textAlign: 'center',
        '&:hover': {
          boxShadow: 4,
        },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Contenedor de imagen con overlay */}
      <Box sx={{ position: 'relative', height: 180 }}>
        <CardMedia
          component="img"
          height="180"
          image={imageUrl}
          loading="lazy"
          alt={title}
          sx={{
            objectFit: 'cover',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0, // shorthand: top:0, left:0, right:0, bottom:0
            background: 'linear-gradient(180deg, rgba(0,51,102,0.55) 0%, rgba(0,115,230,0.35) 100%)',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            opacity: hover ? 0.7 : 0.5, // más fuerte al hover
            transition: 'opacity 0.3s ease',
          }}
        />
        {hover && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(45, 50, 54, 0.6)', // fondo semitransparente azul oscuro
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 20,
              letterSpacing: 1,
              transition: 'opacity 0.3s ease',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          >
            {tag}
          </Box>
        )}
      </Box>

      {/* Contenido */}
      <CardContent sx={{ p: 2, backgroundColor: '#fafafa' }}>
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          justifyContent="flex-start"
          color="primary.dark"
        >
          {icon}
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            overflowY: 'hidden', //si quieres scroll solo cambia por 'auto'
            height: 100, // define el espacio de scroll
            mb: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary" textAlign={'left'}>
            {description}
          </Typography>
        </Box>

        {onClick && <RoundButton onClick={onClick}>Ver más</RoundButton>}
      </CardContent>
    </Card>
  );
};

export default ButtonCardInfo;
