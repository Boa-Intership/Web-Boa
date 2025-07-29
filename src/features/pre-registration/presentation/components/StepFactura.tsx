import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Paper,
  Divider
} from '@mui/material';
import { ReceiptLong } from '@mui/icons-material';

const StepFactura = ({ data, setData, onNext, onBack, carga, ruta }: any) => {
  const [tipoDocumento, setTipoDocumento] = useState(data?.tipoDocumento || 'CI');
  const [numeroDocumento, setNumeroDocumento] = useState(data?.numeroDocumento || '');
  const [razonSocial, setRazonSocial] = useState(data?.razonSocial || '');

  const [precioEstimado, setPrecioEstimado] = useState<number>(0);

  // Simulación del cálculo del precio (puedes usar un servicio real)
  useEffect(() => {
    if (!carga || !carga.detalles || carga.detalles.length === 0) return;

    let base = 50; // precio base
    let totalPiezas = carga.detalles.reduce((sum: number, item: any) => sum + Number(item.piezas || 0), 0);
    let pesoTotal = carga.detalles.reduce((sum: number, item: any) => sum + Number(item.peso || 0), 0);

    const factorCarga = carga.tipo === 'Carga frágil' ? 1.2 : 1;
    const factorRuta = ruta?.origen !== ruta?.destino ? 1.1 : 1;

    const precio = (base + pesoTotal * 5 + totalPiezas * 10) * factorCarga * factorRuta;
    setPrecioEstimado(Math.round(precio));
  }, [carga, ruta]);

  const handleNextClick = () => {
    if (!numeroDocumento || (tipoDocumento === 'NIT' && !razonSocial)) {
      return alert('Por favor completa los datos requeridos para la factura.');
    }

    setData({
      tipoDocumento,
      numeroDocumento,
      razonSocial: tipoDocumento === 'NIT' ? razonSocial : '',
      precioEstimado
    });

    onNext();
  };

  return (
    <Box>
      <Box display='flex' alignItems='center' gap={1} marginBottom={2}>
        <ReceiptLong color='primary' />
        <Typography variant="h5" color='primary'>Datos para la Factura</Typography>
      </Box>

      {/* Selección de tipo de documento */}
      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Tipo de Documento</Typography>
        <RadioGroup
          row
          value={tipoDocumento}
          onChange={(e) => setTipoDocumento(e.target.value)}
        >
          <FormControlLabel value="NIT" control={<Radio />} label="NIT" />
          <FormControlLabel value="CI" control={<Radio />} label="CI" />
        </RadioGroup>
      </FormControl>

      {/* Campos según tipo */}
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            label={tipoDocumento}
            value={numeroDocumento}
            onChange={(e) => setNumeroDocumento(e.target.value)}
            fullWidth
            required
          />
        </Grid>
        {tipoDocumento === 'NIT' && (
          <Grid item xs={12} sm={6}>
            <TextField
              label="Razón Social"
              value={razonSocial}
              onChange={(e) => setRazonSocial(e.target.value)}
              fullWidth
              required
            />
          </Grid>
        )}
      </Grid>

      {/* Estimación del costo */}
      <Box mt={4}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Estimación de Precio</Typography>
        <Paper elevation={1} sx={{ p: 2 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Tipo de Carga:</strong> {carga?.tipo || 'No definido'}
          </Typography>
          <Typography variant="body1">
            <strong>Ruta:</strong> {ruta?.origen} → {ruta?.destino}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" color='primary'>
            Total Estimado: <strong>{precioEstimado} Bs.</strong>
          </Typography>
        </Paper>
      </Box>

      {/* Navegación */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>Anterior</Button>
        <Button variant="contained" onClick={handleNextClick}>Siguiente</Button>
      </Box>
    </Box>
  );
};

export default StepFactura;