import { useMemo } from 'react';
import {
  Box,
  Stack,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Chip,
  Divider,
  Tooltip,
  Button,
} from '@mui/material';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Ciudad, DiaCorto } from '../../domain/Itinerario';
import { AppTypography } from 'ui';

export interface FiltersState {
  origin?: string; // código IATA o ""
  destination?: string; // código IATA o ""
  day?: DiaCorto | ''; // "" = todos
}

interface Props {
  cities: Ciudad[];
  value: FiltersState;
  onChange: (next: FiltersState) => void;
  onClear: () => void;
  total: number;
  filtered: number;
}

const DIAS: DiaCorto[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

export default function ItinerariosFilters({
  cities,
  value,
  onChange,
  onClear,
  total,
  filtered,
}: Props) {
  const activeChips = useMemo(() => {
    const chips: { label: string; key: string }[] = [];
    if (value.origin) {
      const c = cities.find((c) => c.codigo === value.origin);
      chips.push({ label: `Origen: ${c?.nombre} (${c?.codigo})`, key: 'origin' });
    }
    if (value.destination) {
      const c = cities.find((c) => c.codigo === value.destination);
      chips.push({ label: `Destino: ${c?.nombre} (${c?.codigo})`, key: 'destination' });
    }
    if (value.day) chips.push({ label: `Día: ${value.day}`, key: 'day' });
    return chips;
  }, [value, cities]);

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 4, bgcolor: '#FFFFFF' }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <FilterAltIcon sx={{ color: '#D98C00' }} />
        <AppTypography variant="h4Regular" sx={{ flexGrow: 1 }}>
          Filtrar Vuelos
        </AppTypography>
        <Tooltip title="Limpiar filtros">
          <span>
            <IconButton onClick={onClear} disabled={!activeChips.length} color="primary">
              <CleaningServicesIcon />
            </IconButton>
          </span>
        </Tooltip>
      </Stack>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} mt={2}>
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel>Origen</InputLabel>
          <Select
            label="Origen"
            value={value.origin ?? ''}
            onChange={(e) => onChange({ ...value, origin: e.target.value || undefined })}
          >
            <MenuItem
              value=""
              disabled
              sx={{ fontSize: '1rem ', fontWeight: 'bold', color: 'text.secondary' }}
            >
              ─ Vuelos Nacionales ─
            </MenuItem>
            {cities
              .map((c, index) => {
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
                const isBolivian = bolivianCities.includes(c.codigo);
                const prevCity = cities[index - 1];
                const prevIsBolivian = prevCity ? bolivianCities.includes(prevCity.codigo) : true;

                // Mostrar separador cuando cambiamos de bolivianas a internacionales
                const showSeparator = index > 0 && prevIsBolivian && !isBolivian;

                const items = [];

                if (showSeparator) {
                  items.push(
                    <MenuItem
                      key={`separator-${c.codigo}`}
                      disabled
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color: 'text.secondary',
                        textAlign: 'center',
                      }}
                    >
                      ── Vuelos Internacionales ──
                    </MenuItem>
                  );
                }

                items.push(
                  <MenuItem key={c.codigo} value={c.codigo}>
                    {c.nombre} ({c.codigo})
                  </MenuItem>
                );

                return items;
              })
              .flat()}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel>Destino</InputLabel>
          <Select
            label="Destino"
            value={value.destination ?? ''}
            onChange={(e) => onChange({ ...value, destination: e.target.value || undefined })}
          >
            <MenuItem
              value=""
              disabled
              sx={{ fontSize: '1rem', fontWeight: 'bold', color: 'text.secondary' }}
            >
              ─ Vuelos Nacionales ─
            </MenuItem>
            {cities
              .map((c, index) => {
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
                const isBolivian = bolivianCities.includes(c.codigo);
                const prevCity = cities[index - 1];
                const prevIsBolivian = prevCity ? bolivianCities.includes(prevCity.codigo) : true;

                // Mostrar separador cuando cambiamos de bolivianas a internacionales
                const showSeparator = index > 0 && prevIsBolivian && !isBolivian;

                const items = [];

                if (showSeparator) {
                  items.push(
                    <MenuItem
                      key={`separator-${c.codigo}`}
                      disabled
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color: 'text.secondary',
                        textAlign: 'center',
                      }}
                    >
                      ── Vuelos Internacionales ──
                    </MenuItem>
                  );
                }

                items.push(
                  <MenuItem key={c.codigo} value={c.codigo}>
                    {c.nombre} ({c.codigo})
                  </MenuItem>
                );

                return items;
              })
              .flat()}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel>Día de la semana</InputLabel>
          <Select
            label="Día de la semana"
            value={value.day ?? ''}
            onChange={(e) => onChange({ ...value, day: (e.target.value as DiaCorto) || '' })}
          >
            <MenuItem value="">Todos los días</MenuItem>
            {DIAS.map((d) => (
              <MenuItem key={d} value={d}>
                {d}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <Box mt={2}>
        {activeChips.length ? (
          <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
            <AppTypography variant="baseRegular">Filtros activos:</AppTypography>
            {activeChips.map((ch) => (
              <Chip
                key={ch.key}
                label={ch.label}
                onDelete={() => onChange({ ...value, [ch.key]: undefined })}
              />
            ))}
          </Stack>
        ) : (
          <AppTypography variant="baseRegular" color="text.secondary">
            Sin filtros activos.
          </AppTypography>
        )}
      </Box>

      <Divider sx={{ my: 2 }} />

      <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" spacing={1}>
        <AppTypography variant="baseRegular">
          {activeChips.length
            ? `${filtered} vuelos encontrados con los filtros aplicados`
            : `${total} vuelos encontrados`}
        </AppTypography>
        <Box flexGrow={1} />
        {/* Acceso rápido para ver todos si estás en vacío */}
        <Button size="small" onClick={onClear}>
          Ver todos los vuelos
        </Button>
      </Stack>
    </Paper>
  );
}
