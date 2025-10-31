import React from 'react';
import { Card, CardActionArea, CardContent, Chip, Stack, Typography } from '@mui/material';
import AppGrid from '@/shared/components/AppGrid';
import type { ManifestEntity } from '@/features/packageTracking/domain/entities/Manifest';

interface Props {
  manifests: ManifestEntity[];
  onSelect: (manifest: ManifestEntity) => void;
}

const ManifestList: React.FC<Props> = ({ manifests, onSelect }) => {
  return (
    <AppGrid container spacing={2}>
      {manifests.map((m) => (
        <AppGrid item xs={12} sm={6} md={4} key={m.id}>
          <Card elevation={1} sx={{ borderRadius: 2 }}>
            <CardActionArea onClick={() => onSelect(m)}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" color="primary.main">
                    {m.id}
                  </Typography>
                  <Chip label={m.status} color="warning" variant="outlined" size="small" />
                </Stack>
                <Stack direction="row" spacing={2} mt={1}>
                  <Chip label={`${m.packageCount} paquetes`} size="small" />
                  {m.totalWeightKg != null && <Chip label={`${m.totalWeightKg} kg`} size="small" />}
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </AppGrid>
      ))}
    </AppGrid>
  );
};

export default ManifestList;
