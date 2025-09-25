import React from 'react';
import { Box, Card, CardMedia, CardContent } from '@mui/material';
import BoAButton from '../../../../shared/components/BoAButton';
import { AppTypography } from 'ui';

interface ButtonCardInfoProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  imageUrl: string;
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
        width: 320,
        height: 390,
        borderRadius: 3,
        boxShadow: 2,
        textAlign: 'center',
        '&:hover': {
          boxShadow: 4,
        },
      }}
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
            background: '#2570b63b',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
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
          <AppTypography variant="h4Bold">{title}</AppTypography>
        </Box>

        <Box
          sx={{
            overflowY: 'hidden', //si quieres scroll solo cambia por 'auto'
            height: 100, // define el espacio de scroll
            mb: 1,
          }}
        >
          <AppTypography variant="baseRegular" color="text.secondary" textAlign={'left'}>
            {description}
          </AppTypography>
        </Box>

        {onClick && (
          <BoAButton mainButton={false} onClick={onClick}>
            Ver más
          </BoAButton>
        )}
      </CardContent>
    </Card>
  );
};

export default ButtonCardInfo;
