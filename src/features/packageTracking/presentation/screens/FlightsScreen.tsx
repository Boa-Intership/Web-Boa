import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppContainer from '@/shared/components/AppContainer';
import { Typography, Box, TextField, MenuItem, Grid, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { FlightEntity } from '@/features/packageTracking/domain/entities/Flight';
import FlightList from '@/features/packageTracking/presentation/components/FlightList';
import { useFlights } from '@/features/packageTracking/presentation/hooks/useFlights';
import { ROUTES } from '@/router/routes';

const FlightsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { data = [], isLoading } = useFlights();

  // Filters state
  const [codeFilter, setCodeFilter] = React.useState('');
  const [dateFilter, setDateFilter] = React.useState<Date | null>(new Date());
  const [originFilter, setOriginFilter] = React.useState('');
  const [destinationFilter, setDestinationFilter] = React.useState('');

  // derive options
  const origins = React.useMemo(() => {
    const s = new Set<string>();
    data.forEach((f: FlightEntity) => f?.route?.origin && s.add(f.route.origin));
    return Array.from(s).sort();
  }, [data]);
  const destinations = React.useMemo(() => {
    const s = new Set<string>();
    data.forEach((f: FlightEntity) => f?.route?.destination && s.add(f.route.destination));
    return Array.from(s).sort();
  }, [data]);

  const resetFilters = () => {
    setCodeFilter('');
    setDateFilter(new Date());
    setOriginFilter('');
    setDestinationFilter('');
  };

  const normalizeFlightDate = (d: string) => {
    // If the date is already a date-only string (YYYY-MM-DD), treat it as local date
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) {
      return d;
    }

    // Otherwise parse (ISO or datetime) and return local YYYY-MM-DD
    try {
      const dt = new Date(d);
      const yyyy = dt.getFullYear();
      const mm = String(dt.getMonth() + 1).padStart(2, '0');
      const dd = String(dt.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    } catch {
      // Fallback: take substring before T if present
      return (d || '').split('T')[0];
    }
  };

  const formatDate = (d: Date | null) => {
    if (!d) return '';
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const filtered = React.useMemo(() => {
    return data.filter((f: FlightEntity) => {
      // code filter (partial, case-insensitive)
      if (codeFilter && !f.code?.toLowerCase().includes(codeFilter.toLowerCase())) return false;

      // date filter (compare YYYY-MM-DD)
      if (dateFilter) {
        const fd = normalizeFlightDate(f.date || '');
        const sel = formatDate(dateFilter);
        if (fd !== sel) return false;
      }

      // origin/destination
      if (originFilter && f.route?.origin !== originFilter) return false;
      if (destinationFilter && f.route?.destination !== destinationFilter) return false;

      return true;
    });
  }, [data, codeFilter, dateFilter, originFilter, destinationFilter]);

  const onSelect = (flight: FlightEntity) => {
    navigate(`${ROUTES.TRACKING}/${encodeURIComponent(flight.id)}`);
  };

  return (
    <AppContainer>
      <Typography variant="h4" color="primary.main" mb={2}>
        Vuelos
      </Typography>
      {isLoading ? (
        <Typography>Cargando...</Typography>
      ) : (
        <>
          <Box mb={2}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4} md={3}>
                <TextField
                  label="Código"
                  placeholder="AA1234"
                  size="small"
                  fullWidth
                  value={codeFilter}
                  onChange={(e) => setCodeFilter(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Fecha"
                    value={dateFilter}
                    onChange={(newValue) => setDateFilter(newValue)}
                    slotProps={{
                      textField: {
                        size: 'small',
                        fullWidth: true,
                        InputLabelProps: { shrink: true },
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6} sm={2} md={2}>
                <TextField
                  label="Origen"
                  select
                  size="small"
                  fullWidth
                  value={originFilter}
                  onChange={(e) => setOriginFilter(e.target.value)}
                >
                  <MenuItem value="">Todos</MenuItem>
                  {origins.map((o) => (
                    <MenuItem key={o} value={o}>
                      {o}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6} sm={2} md={2}>
                <TextField
                  label="Destino"
                  select
                  size="small"
                  fullWidth
                  value={destinationFilter}
                  onChange={(e) => setDestinationFilter(e.target.value)}
                >
                  <MenuItem value="">Todos</MenuItem>
                  {destinations.map((d) => (
                    <MenuItem key={d} value={d}>
                      {d}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <Button variant="outlined" onClick={resetFilters} size="small">
                  Limpiar
                </Button>
              </Grid>
            </Grid>
          </Box>

          <FlightList flights={filtered} onSelect={onSelect} />
        </>
      )}
    </AppContainer>
  );
};

export default FlightsScreen;
