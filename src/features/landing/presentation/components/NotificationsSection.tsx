import React from 'react';
import AppBox from '../../../../shared/components/AppBox';
import AppContainer from '../../../../shared/components/AppContainer';
import AppGrid from '../../../../shared/components/AppGrid';
import AppButton from '../../../../shared/components/AppButton';
import {
  Typography,
  Divider,
  Card,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Box,
} from '@mui/material';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

type NotificationType = 'email' | 'whatsapp' | 'alert';

interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  description: string;
  date: string;
  read: boolean;
  details?: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: 'email',
    title: 'Paquete registrado',
    description: 'Tu envío ha sido registrado exitosamente.',
    date: '26/08/2025 09:15',
    read: false,
    details: 'Recibirás actualizaciones por email en cada cambio de estado.',
  },
  {
    id: 2,
    type: 'whatsapp',
    title: 'En tránsito',
    description: 'Tu paquete está en camino a su destino.',
    date: '26/08/2025 12:30',
    read: false,
    details: 'Puedes rastrear el paquete desde la sección de seguimiento.',
  },
  {
    id: 3,
    type: 'alert',
    title: 'Entrega programada',
    description: 'La entrega está programada para mañana.',
    date: '26/08/2025 15:00',
    read: true,
    details: 'Recuerda tener tu documento de identidad al recibir el paquete.',
  },
];

const getIcon = (type: NotificationType) => {
  switch (type) {
    case 'email':
      return <MarkEmailReadIcon sx={{ color: 'primary.main', fontSize: 32 }} />;
    case 'whatsapp':
      return <WhatsAppIcon sx={{ color: 'success.main', fontSize: 32 }} />;
    case 'alert':
      return <NotificationsActiveIcon sx={{ color: 'secondary.main', fontSize: 32 }} />;
    default:
      return null;
  }
};

const NotificationsSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [notifs, setNotifs] = useState(notifications);

  const handleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleMarkRead = (id: number) => {
    setNotifs((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  return (
    <AppBox sx={{ py: { xs: 6, md: 10 }, background: 'background.paper' }}>
      <AppContainer>
        <Typography variant="h3" fontWeight={700} mb={2} textAlign="center">
          Notificaciones y Comunicación
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={4} textAlign="center">
          Mantente informado sobre el estado de tu paquete en todo momento.
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <AppGrid container spacing={4} justifyContent="center">
          {notifs.map((notif) => (
            <AppGrid item xs={12} sm={6} md={4} key={notif.id}>
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: 2,
                  border: notif.read ? '1px solid #e0e0e0' : '2px solid',
                  borderColor: notif.read ? 'grey.300' : 'primary.main',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  '&:hover': {
                    boxShadow: 6,
                    borderColor: 'secondary.main',
                  },
                  background: notif.read ? 'background.default' : 'background.paper',
                  cursor: 'pointer',
                }}
                elevation={0}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {getIcon(notif.type)}
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      sx={{ ml: 2 }}
                      color={notif.read ? 'text.secondary' : 'primary.main'}
                    >
                      {notif.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    {notif.description}
                  </Typography>
                  <Typography variant="caption" color="grey.600">
                    {notif.date}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
                  <AppButton
                    size="small"
                    color={notif.read ? 'secondary' : 'primary'}
                    variant={notif.read ? 'outlined' : 'contained'}
                    onClick={() => handleMarkRead(notif.id)}
                    disabled={notif.read}
                  >
                    {notif.read ? 'Leído' : 'Marcar como leído'}
                  </AppButton>
                  <IconButton
                    onClick={() => handleExpand(notif.id)}
                    aria-label="expandir"
                    sx={{
                      transform: expanded === notif.id ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s',
                    }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded === notif.id} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {notif.details}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </AppGrid>
          ))}
        </AppGrid>
      </AppContainer>
    </AppBox>
  );
};

export default NotificationsSection;
