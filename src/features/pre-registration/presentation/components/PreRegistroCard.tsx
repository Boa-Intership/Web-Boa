import React from 'react';
import { Card, CardContent, Button, Box, Chip } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { PreRegistroModel } from '../../data/models/pre-register.model';
import { downloadPreRegisterPDF } from '../../data/services/pre-register.service';
import { AppTypography } from 'ui';

interface Props {
  preregistro: PreRegistroModel;
}

const PreRegistroCard: React.FC<Props> = ({ preregistro }) => {
  const { codePR, createdAt, origin, destination, cargoType, estimatedCost } = preregistro;
  const handleDownload = async () => {
    try {
      await downloadPreRegisterPDF(codePR);
    } catch (error) {
      console.error('Error al descargar el comprobante:', error);
    }
  };
  return (
    <Card
      sx={{
        minWidth: 280,
        borderRadius: 2,
        boxShadow: 5,
        bgcolor: 'white',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0px 8px 20px rgba(0,0,0,0.25)', // sombra al hover
        },
      }}
    >
      <CardContent>
        {/* Código de preregistro */}
        <AppTypography variant="baseBold" fontWeight="bold" color="primary" sx={{ mb: 1 }}>
          {codePR}
        </AppTypography>

        {/* Estado */}
        <Chip
          label={'Pendiente de Revisión'}
          size="small"
          sx={{ mb: 2, bgcolor: '#F7E5B9', color: '#94400C', fontWeight: 'bold' }}
        />

        {/* Fecha */}
        <Box display="flex" alignItems="center" gap={1}>
          <CalendarTodayIcon fontSize="small" />
          <AppTypography variant="body2">{new Date(createdAt).toLocaleDateString()}</AppTypography>
        </Box>

        {/* Origen y destino */}
        {origin && destination && (
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <FlightTakeoffIcon fontSize="small" />
            <AppTypography variant="body2">
              {origin.city.cityName} → {destination.city.cityName}
            </AppTypography>
          </Box>
        )}

        {/* Tipo de carga */}
        {cargoType?.name && (
          <Box display="flex" alignItems="center" gap={1} mt={1}>
            <Inventory2Icon fontSize="small" />
            <AppTypography variant="body2">{cargoType.name}</AppTypography>
          </Box>
        )}

        {/* Costo estimado */}
        <AppTypography variant="baseBold" mt={1}>
          Costo estimado: {estimatedCost} Bs
        </AppTypography>

        {/* Cantidad de paquetes */}
        {/*<AppTypography variant="baseBold" mt={1}>
          {preregistro.paquetes} paquete
          {preregistro.paquetes > 1 ? 's' : ''}
        </AppTypography>*/}

        <Box mt={2} display="flex" flexDirection="column">
          <Button variant="contained" color="primary" onClick={handleDownload}>
            Descargar PDF
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PreRegistroCard;
