import React from 'react';
import { Card, CardActionArea, CardContent, Chip, Divider, Stack, Typography } from '@mui/material';
import AppGrid from '@/shared/components/AppGrid';
import type { PackageEntity } from '@/features/packageTracking/domain/entities/Package';

interface Props {
  packages: PackageEntity[];
  onSelect: (pkg: PackageEntity) => void;
}

const PackageList: React.FC<Props> = ({ packages, onSelect }) => {
  return (
    <AppGrid container spacing={2}>
      {packages.map((p) => (
        <AppGrid item xs={12} md={6} key={p.id}>
          <Card elevation={1} sx={{ borderRadius: 2 }}>
            <CardActionArea onClick={() => onSelect(p)}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="subtitle1" color="primary.main" fontWeight={700}>
                    {p.id}
                  </Typography>
                  <Chip
                    label={p.priority}
                    size="small"
                    color={p.priority === 'Urgente' ? 'secondary' : 'primary'}
                  />
                </Stack>
                <Typography variant="body2" color="text.secondary" mt={0.5}>
                  {p.category} • {p.status}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                  <Typography variant="body2">Remitente: {p.sender}</Typography>
                  <Typography variant="body2">Destinatario: {p.recipient}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} mt={1}>
                  {p.weightKg != null && <Chip label={`${p.weightKg} kg`} size="small" />}
                  {p.dimensions && <Chip label={p.dimensions} size="small" />}
                  {p.estimatedDelivery && (
                    <Chip
                      label={`Entrega: ${new Date(p.estimatedDelivery).toLocaleDateString()}`}
                      size="small"
                    />
                  )}
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </AppGrid>
      ))}
    </AppGrid>
  );
};

export default PackageList;
