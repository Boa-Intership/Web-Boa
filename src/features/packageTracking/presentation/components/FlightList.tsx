import React from 'react';
import { Card, CardActionArea, CardContent, Chip, Stack, Typography } from '@mui/material';
import AppGrid from '../../../../shared/components/AppGrid';
import type { FlightEntity } from '../../domain/entities/Flight';

interface Props {
  flights: FlightEntity[];
  onSelect: (flight: FlightEntity) => void;
}

const FlightList: React.FC<Props> = ({ flights, onSelect }) => {
  return (
    <AppGrid container spacing={2}>
      {flights.map((f) => (
        <AppGrid item xs={12} sm={6} md={4} key={f.id}>
          <Card elevation={1} sx={{ borderRadius: 2 }}>
            <CardActionArea onClick={() => onSelect(f)}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" color="primary.main">
                    {f.code}
                  </Typography>
                  <Chip label={f.cargoType} color="primary" variant="outlined" size="small" />
                </Stack>
                <Typography variant="body2" color="text.secondary" mt={0.5}>
                  {f.route.origin} → {f.route.destination}
                </Typography>
                <Stack direction="row" spacing={2} mt={1}>
                  {f.manifestCount != null && (
                    <Chip label={`${f.manifestCount} manifiestos`} size="small" />
                  )}
                  {f.totalWeightKg != null && (
                    <Chip label={`${f.totalWeightKg} kg`} size="small" />
                  )}
                </Stack>
                <Typography variant="caption" color="text.disabled" display="block" mt={1}>
                  {new Date(f.date).toLocaleDateString()}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </AppGrid>
      ))}
    </AppGrid>
  );
};

export default FlightList;
