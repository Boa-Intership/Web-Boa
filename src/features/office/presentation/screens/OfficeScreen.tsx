import React, { useEffect } from 'react';
import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Box, Chip, Container } from '@mui/material';
import { ContactCard } from '../components/ContactCard';
import { ExpandMore, Home, Public } from '@mui/icons-material';
import { AppTypography } from 'ui';
import { Oficina } from '../../data/models/office.model';
import { OfficeService } from '../../data/services/office.service';
import { defaultOficinas } from '../../domain/constants/default-offices';

export default function OfficeScreen() {
  const [tabIndex, setTabIndex] = useState(0); // 0 = nacional, 1 = internacional
  const [expanded, setExpanded] = useState<number | false>(0); // para una expansión a la vezzz
  const [oficinasNacionales, setOficinasNacionales] = useState<Oficina[]>([]);
  const [oficinasInternacionales, setOficinasInternacionales] = useState<Oficina[]>([]);
  const oficinas = tabIndex === 0 ? oficinasNacionales : oficinasInternacionales;

  useEffect(() => {
    const fetchOficinas = async () => {
      try {
        const nacionales = await OfficeService.getByRegion('Nacional');
        const internacionales = await OfficeService.getByRegion('Internacional');
        setOficinasNacionales(nacionales);
        setOficinasInternacionales(internacionales);
      } catch (error) {
        console.error('Error cargando oficinas desde Strapi, usando datos por defecto:', error);
        const groupByRegion = (region: 'Nacional' | 'Internacional') =>
          defaultOficinas.filter((of) => of.RegionOficinas === region);
        setOficinasNacionales(groupByRegion('Nacional'));
        setOficinasInternacionales(groupByRegion('Internacional'));
      }
    };
    fetchOficinas();
  }, [tabIndex]);

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
