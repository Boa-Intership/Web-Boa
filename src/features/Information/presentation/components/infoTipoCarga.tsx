import React, { useEffect, useState } from "react";
import ExampleType from './ExampleType';
import { Box, Typography, Grid, Stack, Button } from '@mui/material';
import RoundButton from '../../../../shared/components/RoundButton';
import { useTheme } from "@mui/material/styles";

interface Detail {
  title: string;
  description: string[];
  imageUrl?: string[];
}

type Example = {
  title: string;
  description: string;
  image: string;
}

interface infoTipoCargaProps {
  open: boolean;
  title: string;
  description: string;
  subtitle: string;
  details: Detail[];
  example: Example[];
  onClick: () => void;
}


function infoTipoCarga({ open, title, description, details, subtitle, example }: infoTipoCargaProps) {
  const [showImages, setShowImages] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<number | null>(0); // selecciona el primero por defecto
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setShowImages(true);
      }, 500); // tiempo de espera tras abrir el modal
      return () => clearTimeout(timer);
    } else {
      setShowImages(false);
    }
  }, [open]);

  const theme = useTheme();


  return (
    <Box>
      <Typography id="modal-title" variant="h4" fontWeight="bold" color={'#002f5bff'} mb={2}>
        {title}
      </Typography>

      <Typography variant="body2" color={'#3e4449ff'} mb={2} textAlign={"justify"}>
        {description}
      </Typography>

      <Typography variant="h6" fontWeight="bold" color={'#002f5bff'} mt={2}>
        {subtitle}
      </Typography>

      {/* Botones dinámicos */}
       {details && details.length > 0 && (
        <Stack direction="row" spacing={2} flexWrap="wrap" mt={1}>
          {details.map((item, index) => (
            <RoundButton
              key={index}
              onClick={() => setSelectedDetail(index)}
            >
              {item.title}
            </RoundButton>
          ))}
        </Stack>
      )} 

      {/* Mostrar contenido del detalle seleccionado */}
       {selectedDetail !== null && details[selectedDetail] && (
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} md={8}>
            {details[selectedDetail].description.map((desc, i) => (
              <Typography key={i} variant="body2" gutterBottom>
                • {desc}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            {details[selectedDetail].imageUrl?.length ? (
              <Box
                component="img"
                src={details[selectedDetail].imageUrl[0]}
                alt={details[selectedDetail].title}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 1,
                  objectFit: "cover",
                  bgcolor: "#ddd"
                }}
              />
            ) : (
              <Box
                width="100%"
                height={200}
                bgcolor="#ddd"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                Sin imagen
              </Box>
            )}
          </Grid>
        </Grid>
      )} 

      {example && example.length > 0 && (
        <Box>
          <Typography variant="subtitle1" fontWeight={"bold"} mt={2} color={'theme.palette.warning.main'}>
            ¿Que cargas pueden entrar a esta categoria?
          </Typography>
          <Typography variant="body2">
            Ejemplos comunes de {title} en BoA Cargo:
          </Typography>
          <Grid container spacing={2} mt={2}>
            {example.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={3} >
                <ExampleType
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  showImages={showImages}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  )
}

export default infoTipoCarga
