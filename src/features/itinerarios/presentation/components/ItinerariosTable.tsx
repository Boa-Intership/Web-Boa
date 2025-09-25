import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Paper,
  Box,
  Stack,
  Avatar,
  TableContainer,
} from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Itinerario } from '../../domain/Itinerario';
import { getFlightStatus, FRANJA_COLORS } from '../../domain/getFlightStatus';
import { alpha } from '@mui/material/styles';
import { AppTypography } from 'ui';

interface Props {
  items: Itinerario[];
  showEmptyState?: boolean;
  onResetAll?: () => void;
}

export default function ItinerariosTable({ items, showEmptyState, onResetAll }: Props) {
  if (showEmptyState) {
    return (
      <Paper sx={{ p: 6, textAlign: 'center', bgcolor: '#FFFFFF' }}>
        <Stack alignItems="center" spacing={2}>
          <Avatar sx={{ width: 72, height: 72, bgcolor: '#F3F4F6' }}>
            <FlightTakeoffIcon fontSize="large" sx={{ color: '#9CA3AF' }} />
          </Avatar>
          <AppTypography variant="h4Regular">No se encontraron vuelos</AppTypography>
          <AppTypography variant="h4Regular" color="text.secondary">
            No hay vuelos disponibles con los filtros seleccionados. Intenta cambiar los criterios
            de búsqueda.
          </AppTypography>
          {onResetAll && (
            <Chip
              label="Ver todos los vuelos"
              onClick={onResetAll}
              clickable
              color="primary"
              sx={{
                p: 2.5,
              }}
            />
          )}
        </Stack>
      </Paper>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 850 }}>
        <TableHead sx={{ bgcolor: '#002D57' }}>
          <TableRow
            sx={{
              '& .MuiTableCell-root': {
                color: '#FFFFFF',
              },
            }}
          >
            <TableCell>Vuelo</TableCell>
            <TableCell>Ruta</TableCell>
            <TableCell>Salida</TableCell>
            <TableCell>Llegada</TableCell>
            <TableCell>Días</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ bgcolor: '#FAFAFA' }}>
          {items.map((it) => {
            const franja = getFlightStatus(it.salida);
            return (
              <TableRow key={it.id} hover>
                <TableCell>{it.vuelo}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <span>
                      {it.origenNombre} ({it.origenCodigo})
                    </span>
                    <ArrowForwardIcon sx={{ color: '#D98C00' }} />
                    <span>
                      {it.destinoNombre} ({it.destinoCodigo})
                    </span>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Box
                      component="span"
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        bgcolor: FRANJA_COLORS[franja],
                      }}
                    />
                    <span>{it.salida}</span>
                  </Stack>
                </TableCell>
                <TableCell>{it.llegada}</TableCell>
                <TableCell>
                  <Stack direction="row" flexWrap="wrap" gap={0.5}>
                    {it.dias.map((d) => (
                      <Chip
                        key={d}
                        size="small"
                        label={d}
                        sx={(t) => ({
                          px: 0.5,
                          fontWeight: 600,
                          bgcolor: alpha(t.palette.primary.main, 0.08),
                          color: t.palette.primary.main,
                        })}
                      />
                    ))}
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
