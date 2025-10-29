import React from 'react';
import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Chip,
  Container,
  CircularProgress,
  Alert,
} from '@mui/material';
import { ContactCard } from '../components/ContactCard';
import { ExpandMore, Home, Public } from '@mui/icons-material';
import { AppTypography } from 'ui';
import { useOficinasNacionales, useOficinasInternacionales } from '../hook/useOficinas';
import { defaultOficinas } from '../../domain/constants/default-offices';

export default function OfficeScreen() {
  const [tabIndex, setTabIndex] = useState(0); // 0 = nacional, 1 = internacional
  const [expanded, setExpanded] = useState<number | false>(0); // para una expansión a la vez

  // Usar hooks para traer datos cacheados
  const {
    data: oficinasNacionales,
    loading: loadingNac,
    error: errorNac,
  } = useOficinasNacionales();
  const {
    data: oficinasInternacionales,
    loading: loadingInt,
    error: errorInt,
  } = useOficinasInternacionales();

  // Si no hay datos (array vacío), usar datos por defecto
  const oficinasNacionalesDisplay =
    oficinasNacionales && oficinasNacionales.length > 0
      ? oficinasNacionales
      : defaultOficinas.filter((of) => of.RegionOficinas === 'Nacional');

  const oficinasInternacionalesDisplay =
    oficinasInternacionales && oficinasInternacionales.length > 0
      ? oficinasInternacionales
      : defaultOficinas.filter((of) => of.RegionOficinas === 'Internacional');

  const oficinas = tabIndex === 0 ? oficinasNacionalesDisplay : oficinasInternacionalesDisplay;
  const _loading = tabIndex === 0 ? loadingNac : loadingInt;
  const _error = tabIndex === 0 ? errorNac : errorInt; // Prefijo _ para indicar que puede no ser usado

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ py: 4, minHeight: '80vh' }}>
      <AppTypography variant="h2Bold" color="primary">
        Nuestras Oficinas
      </AppTypography>
      <AppTypography variant="baseRegular" color="textSecondary" mt={1}>
        Información detallada de horarios de atención y contacto
      </AppTypography>

      <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
        <Chip
          icon={<Home fontSize="small" />}
          label={`Nacional (${oficinasNacionales.length})`}
          color="primary"
          variant={tabIndex === 0 ? 'filled' : 'outlined'}
          onClick={() => setTabIndex(0)}
          sx={{
            p: 1.5,
          }}
        />
        {/*** '&:focus': { outline: 'none' }, */}
        <Chip
          icon={<Public fontSize="small" />}
          label={`Internacional ${oficinasInternacionales.length})`}
          color="primary"
          variant={tabIndex === 1 ? 'filled' : 'outlined'}
          onClick={() => setTabIndex(1)}
          sx={{
            p: 1.5,
          }}
        />
      </Box>

      {oficinas.map((oficina, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{ my: 2, backgroundColor: '#FAFAFA' }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <AppTypography variant="h4Bold" color="primary" my={1}>
              {oficina.Ciudad}
            </AppTypography>
          </AccordionSummary>
          <AccordionDetails>
            <ContactCard oficina={oficina} />
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
