import React, { useState } from 'react';
import ExampleType from './ExampleType';
import { Box, Typography, Grid, Stack } from '@mui/material';
import { RoundButton } from 'ui';
import { useTheme } from '@mui/material/styles';

interface Detail {
  title: string;
  description: string[];
  imageUrl?: string[];
}

type Example = {
  title: string;
  description: string;
  image: string;
};

interface infoTipoCargaProps {
  title: string;
  description: string;
  subtitle: string;
  details: Detail[];
  example: Example[];
  onClick: () => void;
}

function infoTipoCarga({
  title,
  description,
  details,
  subtitle,
  example,
}: infoTipoCargaProps) {
  const [selectedDetail, setSelectedDetail] = useState<number | null>(0); // selecciona el primero por defecto
  const theme = useTheme();

  return (
    <Box>
      <Typography
        id="modal-title"
        variant="h5"
        fontWeight="bold"
        color={theme.palette.primary.main}
        mb={2}
      >
        {title}
      </Typography>

      <Typography variant="body2" textAlign={'justify'} mb={2}>
        {description}
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          color={theme.palette.primary.main}
          mb={2}
        >
          {subtitle}
        </Typography>

        {/* Botones dinámicos */}
        {details && details.length > 0 && (
          <Stack direction="row" spacing={2} flexWrap="wrap" mb={2}>
            {details.map((item, index) => (
              <RoundButton
                key={index}
                onClick={() => setSelectedDetail(index)}
                selected={index === selectedDetail}
              >
                {item.title}
              </RoundButton>
            ))}
          </Stack>
        )}
      </Box>

      {/* Mostrar contenido del detalle seleccionado */}
      {selectedDetail !== null && details[selectedDetail] && (
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={
              details[selectedDetail].imageUrl &&
              details[selectedDetail].imageUrl.length > 0
                ? 9
                : 12
            }
          >
            {details[selectedDetail].description.map((desc, i) => (
              <Typography key={i} variant="body2" gutterBottom>
                • {desc}
              </Typography>
            ))}
          </Grid>
          {/* Imagen (si existe) */}
          {details[selectedDetail].imageUrl &&
            details[selectedDetail].imageUrl.length > 0 && (
              <Grid item xs={12} sm={3}>
                <Box sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
                  {details[selectedDetail].imageUrl.map((url, index) => (
                    <Box
                      component="img"
                      key={index}
                      src={url}
                      loading="lazy"
                      alt={`${details[selectedDetail].title} ${index + 1}`}
                      sx={{
                        width: { xs: '50%', sm: 200 },
                        maxWidth: '100%',
                        objectFit: 'cover',
                        borderRadius: 2,
                        mb: 1,
                      }}
                    />
                  ))}
                </Box>
              </Grid>
            )}
        </Grid>
      )}

      {example && example.length > 0 && (
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={'bold'}
            mt={2}
            color={theme.palette.primary.main}
          >
            ¿Que cargas pueden entrar a esta categoria?
          </Typography>
          <Typography variant="body2">
            Ejemplos comunes de {title} en BoA Cargo:
          </Typography>
          <Grid container spacing={2} mt={2}>
            {example.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <ExampleType
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default infoTipoCarga;
