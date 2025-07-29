import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Paper
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Inventory2 } from '@mui/icons-material';

const tiposCarga = ['Carga general', 'Animales vivos', 'Perecedero'];

const StepCarga = ({ data, setData, onNext, onBack }: any) => {
  const [tipo, setTipo] = useState(data?.tipo || '');
  const [detalles, setDetalles] = useState(data?.detalles || []);

  const [nuevoItem, setNuevoItem] = useState({
    descripcion: '',
    peso: '',
    alto: '',
    ancho: '',
    largo: '',
    piezas: '',
  });

  const handleChangeNuevoItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevoItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleAgregarItem = () => {
    const valoresCompletos = Object.values(nuevoItem).every((v) => v !== '');
    if (!valoresCompletos) return alert('Completa todos los campos del ítem');

    setDetalles((prev: any) => [...prev, nuevoItem]);
    setNuevoItem({
      descripcion: '',
      peso: '',
      alto: '',
      ancho: '',
      largo: '',
      piezas: '',
    });
  };

  const handleEliminarItem = (index: number) => {
    setDetalles((prev: any) => prev.filter((_, i) => i !== index));
  };

  const handleNextClick = () => {
    if (!tipo || detalles.length === 0) {
      return alert('Selecciona tipo de carga y agrega al menos un ítem');
    }

    setData({ tipo, detalles });
    onNext();
  };

  return (
    <Box>
      <Box display='flex' alignItems='center' gap={1} marginBottom={2}>
        <Inventory2 color='primary' />
        <Typography variant="h5" color='primary'>Información de la Carga</Typography>
      </Box>

      {/* Tipo de carga */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Tipo de Carga"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            fullWidth
            required
          >
            {tiposCarga.map((opcion) => (
              <MenuItem key={opcion} value={opcion}>
                {opcion}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      {/* Detalle de ítem nuevo */}
      <Box mt={3}>
        <Typography variant="subtitle1" gutterBottom>Agregar ítem de carga</Typography>
        <Grid container spacing={2}>
          {['descripcion', 'peso', 'alto', 'ancho', 'largo', 'piezas'].map((campo) => (
            <Grid item xs={campo === 'descripcion' ? 12 : 6} sm={campo === 'descripcion' ? 6 : 2} key={campo}>
              <TextField
                name={campo}
                label={campo.charAt(0).toUpperCase() + campo.slice(1)}
                value={nuevoItem[campo as keyof typeof nuevoItem]}
                onChange={handleChangeNuevoItem}
                fullWidth
              />
            </Grid>
          ))}
          <Grid item xs={12} sm={2} display="flex" alignItems="center">
            <Button variant="outlined" onClick={handleAgregarItem} fullWidth>Agregar</Button>
          </Grid>
        </Grid>
      </Box>

      {/* Tabla de carga */}
      {detalles.length > 0 && (
        <Box mt={4}>
          <Typography variant="subtitle1">Ítems agregados</Typography>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Descripción</TableCell>
                  <TableCell>Peso</TableCell>
                  <TableCell>Alto</TableCell>
                  <TableCell>Ancho</TableCell>
                  <TableCell>Largo</TableCell>
                  <TableCell>Piezas</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {detalles.map((item: any, index: number) => (
                  <TableRow key={index}>
                    {['descripcion', 'peso', 'alto', 'ancho', 'largo', 'piezas'].map((campo) => (
                      <TableCell key={campo}>{item[campo]}</TableCell>
                    ))}
                    <TableCell>
                      <IconButton onClick={() => handleEliminarItem(index)} color="error">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      )}

      {/* Botones de navegación */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>Anterior</Button>
        <Button variant="contained" onClick={handleNextClick}>Siguiente</Button>
      </Box>
    </Box>
  );
};

export default StepCarga;