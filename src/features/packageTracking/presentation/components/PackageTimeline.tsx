import React from 'react';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Card, CardContent, Typography } from '@mui/material';
import type { PackageStatusEntity } from '@/features/packageTracking/domain/entities/PackageStatus';

interface Props {
  history: PackageStatusEntity[];
}

const statusColor = (status: PackageStatusEntity['status']) => {
  switch (status) {
    case 'Entregado':
      return 'success';
    case 'Incidencia':
      return 'error';
    case 'En tránsito':
      return 'primary';
    case 'Procesando':
      return 'warning';
    default:
      return 'info';
  }
};

const PackageTimeline: React.FC<Props> = ({ history }) => {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" mb={2} color="primary.main">
          Historial de estados
        </Typography>
        <Timeline position="alternate">
          {history.map((h) => (
            <TimelineItem key={h.id}>
              <TimelineOppositeContent color="text.secondary" sx={{ fontSize: 12 }}>
                {new Date(h.dateTime).toLocaleString()}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={statusColor(h.status) as any} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="subtitle2">{h.status}</Typography>
                {h.location && (
                  <Typography variant="body2" color="text.secondary">
                    {h.location}
                  </Typography>
                )}
                {h.note && (
                  <Typography variant="body2" color="text.secondary">
                    {h.note}
                  </Typography>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
};

export default PackageTimeline;
