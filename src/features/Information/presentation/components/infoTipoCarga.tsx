import React, { useState } from 'react';
import ExampleType from './ExampleType';
import { Box, Typography, Grid, Stack } from '@mui/material';
import { AppTypography, BoAButton } from 'ui';
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

function InfoTipoCarga({ title, description, details, subtitle, example }: infoTipoCargaProps) {
  const [selectedDetail, setSelectedDetail] = useState<number | null>(0); // selecciona el primero por defecto
  const theme = useTheme();

  return (
    <Box>
      <AppTypography variant="h4Bold" id="modal-title" color={theme.palette.primary.main} mb={2}>
        {title}
      </AppTypography>

      <AppTypography variant="h4Regular" textAlign={'justify'} mb={2}>
        {description}
      </AppTypography>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexDirection: { xs: 'column', sm: 'row', md: 'row' },
        }}
      >
        <AppTypography variant="h4Bold" color={theme.palette.primary.main}>
          {subtitle}
        </AppTypography>

        {/* Botones dinámicos */}
        {details && details.length > 0 && (
          <Stack direction="row" spacing={2} flexWrap="wrap" mb={2}>
            {details.map((item, index) => (
              <BoAButton
                key={index}
                mainButton={false}
                onClick={() => setSelectedDetail(index)}
                selected={index === selectedDetail}
              >
                {item.title}
              </BoAButton>
            ))}
          </Stack>
        )}
      </Box>

      {/* Mostrar contenido del detalle seleccionado */}
      {selectedDetail !== null && details[selectedDetail] && (
        <Grid container spacing={2}>
          <Grid item>
            {details[selectedDetail].description.map((desc, i) => (
              <AppTypography variant="h4Regular" key={i} gutterBottom>
                • {desc}
              </AppTypography>
            ))}
          </Grid>
          {/* Imagen (si existe) */}
          {details[selectedDetail].imageUrl && details[selectedDetail].imageUrl.length > 0 && (
            <Grid item>
              <Box sx={{ width: '100%', textAlign: 'flex-start' }}>
                {details[selectedDetail].imageUrl.map((url, index) => (
                  <Box
                    component="img"
                    key={index}
                    src={url}
                    loading="lazy"
                    alt={`${details[selectedDetail].title} ${index + 1}`}
                    sx={{
                      width: { xs: '50%', sm: '30%' },
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
          <AppTypography variant="h4Bold" mt={2} color={theme.palette.primary.main}>
            ¿Que cargas pueden entrar a esta categoria?
          </AppTypography>
          <AppTypography variant="h4Regular">
            Ejemplos comunes de {title} en BoA Cargo:
          </AppTypography>
          <Grid container spacing={2} mt={2} sx={{ justifyContent: 'center' }}>
            {example.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <ExampleType title={item.title} description={item.description} image={item.image} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default InfoTipoCarga;
