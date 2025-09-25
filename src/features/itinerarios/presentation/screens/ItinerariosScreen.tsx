import { useMemo, useState } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { Ciudad, DiaCorto, Itinerario } from '../../domain/Itinerario';
import { FRANJA_COLORS } from '../../domain/getFlightStatus';
import ItinerariosFilters, { FiltersState } from '../components/ItinerariosFilters';
import ItinerariosTable from '../components/ItinerariosTable';
import { AppTypography } from 'ui';
import { ITINERARIOS_MOCK } from '../../data/itinerarios.mock';

export default function ItinerariosScreen() {
  const [filters, setFilters] = useState<FiltersState>({});

  // Ciudades únicas a partir de los datos, priorizando ciudades bolivianas
  const cities: Ciudad[] = useMemo(() => {
    const map = new Map<string, string>();
    ITINERARIOS_MOCK.forEach((i) => {
      map.set(i.origenCodigo, i.origenNombre);
      map.set(i.destinoCodigo, i.destinoNombre);
    });

    // Códigos de ciudades bolivianas (departamentos)
    const bolivianCities = [
      'LPB',
      'CBB',
      'VVI',
      'SRE',
      'TJA',
      'UYU',
      'ORU',
      'RBQ',
      'TDD',
      'CIJ',
      'BYC',
    ];

    const allCities = Array.from(map.entries()).map(([codigo, nombre]) => ({ codigo, nombre }));

    // Separar ciudades bolivianas e internacionales
    const bolivianas = allCities
      .filter((city) => bolivianCities.includes(city.codigo))
      .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));

    const internacionales = allCities
      .filter((city) => !bolivianCities.includes(city.codigo))
      .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));

    // Bolivianas primero, luego internacionales
    return [...bolivianas, ...internacionales];
  }, []);

  // Lógica de filtrado
  const filtered: Itinerario[] = useMemo(() => {
    return ITINERARIOS_MOCK.filter((i) => {
      if (filters.origin && i.origenCodigo !== filters.origin) return false;
      if (filters.destination && i.destinoCodigo !== filters.destination) return false;
      if (filters.day && !(i.dias as DiaCorto[]).includes(filters.day as DiaCorto)) return false;
      return true;
    });
  }, [filters]);

  const hasActiveFilters = !!(filters.origin || filters.destination || filters.day);
  const onClear = () => setFilters({});

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '80vh' }}>
      <AppTypography variant="h2Bold" color="primary" gutterBottom>
        Horarios de vuelos
      </AppTypography>

      <ItinerariosFilters
        cities={cities}
        value={filters}
        onChange={setFilters}
        onClear={onClear}
        total={ITINERARIOS_MOCK.length}
        filtered={filtered.length}
      />

      {/* Leyenda de franjas */}
      <Stack direction="row" spacing={2} mb={1}>
        <Legend color={FRANJA_COLORS['mañana']} label="Mañana (06:00–12:00)" />
        <Legend color={FRANJA_COLORS['tarde']} label="Tarde (12:00–18:00)" />
        <Legend color={FRANJA_COLORS['noche']} label="Noche (18:00–05:59)" />
      </Stack>

      <ItinerariosTable
        items={filtered}
        showEmptyState={hasActiveFilters && filtered.length === 0}
        onResetAll={onClear}
      />
    </Container>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: color }} />
      <AppTypography variant="baseRegular">{label}</AppTypography>
    </Stack>
  );
}
