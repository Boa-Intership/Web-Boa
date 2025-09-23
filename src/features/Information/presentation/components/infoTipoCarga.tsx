import { useState } from 'react';
import ExampleType from './ExampleType';
import { Box, Alert, Grid, Stack } from '@mui/material';
import { AppTypography, BoAButton } from 'ui';

interface Detail {
  title?: string;
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
  notice?: string[];
  example: Example[];
  onClick: () => void;
}

function InfoTipoCarga({
  title,
  description,
  details,
  subtitle,
  notice,
  example,
}: infoTipoCargaProps) {
  const [selectedDetail, setSelectedDetail] = useState<number | null>(0); // selecciona el primero por defecto

  return (
    <Box sx={{ mt: 2 }}>
      <AppTypography variant="h4Bold" color="primary" mb={2}>
        {title}
      </AppTypography>

      <AppTypography
        variant="baseRegular"
        mb={3}
        textAlign="justify"
        sx={{ whiteSpace: 'pre-line' }}
      >
        {description}
      </AppTypography>
      {/* ⚠️ Notices generales */}
      {notice && notice.length > 0 && (
        <Box mb={3}>
          {notice.map((note, i) => (
            <Alert key={i} severity="info" sx={{ mb: 1 }}>
              {note}
            </Alert>
          ))}
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexDirection: 'column',
          mb: 3,
        }}
      >
        <AppTypography variant="h4Bold" color="primary">
          {subtitle}
        </AppTypography>

        {/* Botones dinámicos */}
        {details && details.length > 0 && (
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap="wrap">
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
        <Grid container spacing={2} mb={3}>
          <Grid item minHeight={'10rem'}>
            {details[selectedDetail].description.map((desc, i) => (
              <AppTypography key={i} variant="baseRegular" mb={2} textAlign="justify">
                ✔️ {desc}
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
          <AppTypography variant="h4Bold" color="primary" mb={2}>
            Cargas comunes en {title}:
          </AppTypography>
          <Alert severity="warning" sx={{ mb: 2 }}>
            Las imagenes que se muestran son solo ejemplos y pueden no corresponder exactamente a la
            carga que usted desea enviar.
          </Alert>
          <Grid container spacing={1} sx={{ width: '100%', justifyContent: 'center' }}>
            {example.map((item, index) => (
              <Grid item mb={2} key={index} xs={12} sm={6} md={6}>
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
