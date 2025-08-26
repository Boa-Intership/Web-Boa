import { useMemo, useState } from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { ITINERARIOS_MOCK } from "../../data/itinerarios.mock";
import { Ciudad, DiaCorto, Itinerario } from "../../domain/Itinerario";
import { FRANJA_COLORS } from "../../domain/getFlightStatus";
import ItinerariosFilters, { FiltersState } from "../components/ItinerariosFilters";


export default function ItinerariosScreen() {
  const [filters, setFilters] = useState<FiltersState>({});

  // Ciudades únicas a partir de los datos
  const cities: Ciudad[] = useMemo(() => {
    const map = new Map<string, string>();
    ITINERARIOS_MOCK.forEach(i => {
      map.set(i.origenCodigo, i.origenNombre);
      map.set(i.destinoCodigo, i.destinoNombre);
    });
    return Array.from(map.entries())
      .sort((a,b) => a[1].localeCompare(b[1], "es"))
      .map(([codigo, nombre]) => ({ codigo, nombre }));
  }, []);

  // Lógica de filtrado
  const filtered: Itinerario[] = useMemo(() => {
    return ITINERARIOS_MOCK.filter(i => {
      if (filters.origin && i.origenCodigo !== filters.origin) return false;
      if (filters.destination && i.destinoCodigo !== filters.destination) return false;
      if (filters.day && !(i.dias as DiaCorto[]).includes(filters.day as DiaCorto)) return false;
      return true;
    });
  }, [filters]);

  const hasActiveFilters = !!(filters.origin || filters.destination || filters.day);
  const onClear = () => setFilters({});

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Horarios de Vuelos
      </Typography>

      {/* Leyenda de franjas */}
      <Stack direction="row" spacing={2} mb={1}>
        <Legend color={FRANJA_COLORS["mañana"]} label="Mañana (06:00–12:00)" />
        <Legend color={FRANJA_COLORS["tarde"]} label="Tarde (12:00–18:00)" />
        <Legend color={FRANJA_COLORS["noche"]} label="Noche (18:00–05:59)" />
      </Stack>

      <ItinerariosFilters
        cities={cities}
        value={filters}
        onChange={setFilters}
        onClear={onClear}
        total={ITINERARIOS_MOCK.length}
        filtered={filtered.length}
      />

      
    </Container>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: color }} />
      <Typography variant="caption">{label}</Typography>
    </Stack>
  );
}
