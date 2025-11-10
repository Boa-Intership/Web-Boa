import React from 'react';
import { Typography, Box } from '@mui/material';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import { AppTypography } from '@/ui';

interface ContenidoProps {
  titulo: string;
  contenido: BlocksContent;
  imagen_url?: string | null;
}

export const Contenido: React.FC<ContenidoProps> = ({ titulo, contenido, imagen_url }) => {
  return (
    <Box sx={{ mb: 3 }}>
      {/* Título de la sección */}
      <AppTypography variant="h4Bold" color="primary" mb={2}>
        {titulo}
      </AppTypography>

      {/* Renderizado del contenido dinámico de Strapi */}
      <BlocksRenderer
        content={contenido}
        blocks={{
          paragraph: ({ children }) => (
            <Typography variant="body1" sx={{ mb: 1 }}>
              {children}
            </Typography>
          ),
          link: ({ children, url }) => (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'primary.main',
                textDecoration: 'underline',
              }}
            >
              {children}
            </a>
          ),
        }}
      />
      {/* Imagen si está disponible */}
      {imagen_url && (
        <Box
          sx={{
            width: '100%',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Box
            component="img"
            src={imagen_url}
            alt={titulo}
            sx={{
              width: '50%',
              height: { xs: 'auto', sm: '20rem' },
              objectFit: 'cover',
              display: 'block',
            }}
            loading="lazy"
          />
        </Box>
      )}
    </Box>
  );
};
