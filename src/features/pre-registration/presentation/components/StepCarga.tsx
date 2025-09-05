import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Paper,
  InputAdornment,
} from '@mui/material';
import {
  Inventory2,
  Visibility,
  Edit,
  Delete,
  ViewInAr,
  LocalShipping,
  AddCircle,
  Inventory2Outlined,
} from '@mui/icons-material';

const tiposCarga = [
  { label: 'Carga general', codigo: 'CG' },
  { label: 'Animales vivos', codigo: 'AV' },
  { label: 'Perecedero', codigo: 'PR' },
];

const StepCarga = ({ data, setData, onNext, onBack }: any) => {
  const [tipo, setTipo] = useState(data?.tipo || '');
  const [detalles, setDetalles] = useState(data?.detalles || []);
  const [modalOpen, setModalOpen] = useState(false);
  const [openVisualizacion, setOpenVisualizacion] = useState(false); // estado visualizacion
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState<any>(null); // estado visualizacion
  const [openEditar, setOpenEditar] = useState(false); // estado edicion
  const [paqueteEditado, setPaqueteEditado] = useState<any>(null); // estado edicion
  const [indiceEditado, setIndiceEditado] = useState<number | null>(null); // estado edicion
  const [openEliminar, setOpenEliminar] = useState(false); // estado eliminar
  const [indiceAEliminar, setIndiceAEliminar] = useState<number | null>(null); // estado eliminar

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
    if (!valoresCompletos) return;
    setDetalles((prev: any) => [...prev, nuevoItem]);
    setNuevoItem({ descripcion: '', peso: '', alto: '', ancho: '', largo: '', piezas: '' });
    setModalOpen(false);
  };

  const handleVisualizarItem = (item: any) => {
    setPaqueteSeleccionado(item);
    setOpenVisualizacion(true);
  };

  // Abrir modal de edición
  const handleEditarItem = (item: any, index: number) => {
    setPaqueteEditado(item);
    setIndiceEditado(index);
    setOpenEditar(true);
  };

  // Guardar cambios de edición
  const handleGuardarEdicion = () => {
    if (!paqueteEditado || indiceEditado === null) return;

    const nuevosDetalles = [...detalles];
    nuevosDetalles[indiceEditado] = paqueteEditado;
    setDetalles(nuevosDetalles);

    setOpenEditar(false);
    setPaqueteEditado(null);
    setIndiceEditado(null);
  };

  // Actualizar campos de edición
  const handleChangeEdicion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaqueteEditado((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleEliminarItem = (index: number) => {
    setIndiceAEliminar(index);
    setOpenEliminar(true);
  };

  const confirmarEliminacion = () => {
    if (indiceAEliminar !== null) {
      setDetalles((prev: any) => prev.filter((_, i) => i !== indiceAEliminar));
      setIndiceAEliminar(null);
      setOpenEliminar(false);
    }
  };

  const cancelarEliminacion = () => {
    setIndiceAEliminar(null);
    setOpenEliminar(false);
  };

  const handleNextClick = () => {
    if (!tipo || detalles.length === 0) {
      return alert('Selecciona tipo de carga y agrega al menos un paquete');
    }
    setData({ tipo, detalles });
    onNext();
  };

  const pesoTotal = detalles.reduce((acc, curr) => acc + parseFloat(curr.peso), 0);
  const costoEstimado = pesoTotal * 10;

  return (
    <Box>
      <Paper elevation={2} sx={{ p: 3, borderRadius: 4, bgcolor: '#FAFAFA' }}>
        <Box display="flex" alignItems="center" gap={1} marginBottom={2}>
          <Inventory2 color="primary" />
          <Typography variant="h5" color="primary">
            Información de la Carga
          </Typography>
        </Box>

        {/* Tipo de carga */}
        <TextField
          select
          label="Tipo de Carga"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalShipping color="action" />
              </InputAdornment>
            ),
          }}
        >
          {tiposCarga.map(({ label, codigo }) => (
            <MenuItem key={codigo} value={label}>{`${label} (${codigo})`}</MenuItem>
          ))}
        </TextField>

        {/* Detalle de ítems agregados */}
        <Box mt={3}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h6" color="primary">
              Paquetes Agregados
            </Typography>
            <IconButton color="primary" onClick={() => setModalOpen(true)}>
              <AddCircle />
            </IconButton>
          </Box>

          {detalles.length === 0 ? (
            //<Typography color='text.secondary' mt={2}>No hay paquetes agregados</Typography>
            <Box
              sx={{
                //backgroundColor: '#4a6b91',
                borderRadius: 2,
                p: 4,
                textAlign: 'center',
                color: 'text.secondary',
              }}
            >
              <Inventory2Outlined sx={{ fontSize: 60, mb: 1, opacity: 0.8 }} />
              <Typography variant="h6" fontWeight="bold">
                No hay paquetes agregados
              </Typography>
              <Typography variant="body2" mt={1} sx={{ opacity: 0.8 }}>
                Toca el botón <strong>+</strong> para agregar tu primer paquete
              </Typography>
            </Box>
          ) : (
            <Box mt={2} display="flex" flexDirection="column">
              {detalles.map((item, index) => (
                <Paper
                  key={index}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Typography fontWeight={600}>{item.descripcion}</Typography>
                    <Typography variant="body2">
                      {item.peso}kg • {item.alto}×{item.ancho}×{item.largo}cm • {item.piezas} piezas
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton onClick={() => handleVisualizarItem(item)}>
                      <Visibility />
                    </IconButton>
                    <IconButton onClick={() => handleEditarItem(item, index)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleEliminarItem(index)} color="error">
                      <Delete />
                    </IconButton>
                  </Box>
                </Paper>
              ))}
            </Box>
          )}
        </Box>

        <Box mt={4}>
          <Typography variant="body2">
            Peso Total: <strong>{pesoTotal.toFixed(2)} kg</strong>
          </Typography>
          <Typography variant="body2">
            Costo Estimado: <strong>Bs {costoEstimado.toFixed(2)}</strong>
          </Typography>
        </Box>
      </Paper>

      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onBack}>
          Anterior
        </Button>
        <Button variant="contained" onClick={handleNextClick}>
          Siguiente
        </Button>
      </Box>

      {/* Dialog de Agregar items */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        <DialogTitle>Agregar Paquete</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {['descripcion', 'peso', 'piezas', 'alto', 'ancho', 'largo'].map((campo) => (
              <Grid item xs={campo === 'descripcion' ? 12 : 6} key={campo}>
                <TextField
                  name={campo}
                  label={campo.charAt(0).toUpperCase() + campo.slice(1)}
                  value={nuevoItem[campo as keyof typeof nuevoItem]}
                  onChange={handleChangeNuevoItem}
                  fullWidth
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {(campo === 'peso' && 'kg') ||
                          (['alto', 'ancho', 'largo'].includes(campo) && 'cm') ||
                          null}
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)}>Cancelar</Button>
          <Button onClick={handleAgregarItem} variant="contained">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog visualización */}
      <Dialog
        open={openVisualizacion}
        onClose={() => setOpenVisualizacion(false)}
        PaperProps={{ sx: { borderRadius: 3, minWidth: 300 } }}
      >
        <DialogTitle>Detalles del Paquete</DialogTitle>
        <DialogContent dividers>
          {paqueteSeleccionado && (
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography>
                <strong>Descripción:</strong> {paqueteSeleccionado.descripcion}
              </Typography>
              <Typography>
                <strong>Peso:</strong> {paqueteSeleccionado.peso} kg
              </Typography>
              <Typography>
                <strong>Dimensiones:</strong> {paqueteSeleccionado.alto} ×{' '}
                {paqueteSeleccionado.ancho} × {paqueteSeleccionado.largo} cm
              </Typography>
              <Typography>
                <strong>Piezas:</strong> {paqueteSeleccionado.piezas}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenVisualizacion(false)} autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog edición */}
      <Dialog open={openEditar} onClose={() => setOpenEditar(false)} fullWidth maxWidth="sm">
        <DialogTitle>Editar Paquete</DialogTitle>
        <DialogContent dividers>
          {paqueteEditado && (
            <Grid container spacing={2}>
              {['descripcion', 'peso', 'piezas', 'alto', 'ancho', 'largo'].map((campo) => (
                <Grid item xs={campo === 'descripcion' ? 12 : 6} key={campo}>
                  <TextField
                    name={campo}
                    label={campo.charAt(0).toUpperCase() + campo.slice(1)}
                    value={paqueteEditado[campo]}
                    onChange={handleChangeEdicion}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {(campo === 'peso' && 'kg') ||
                            (['alto', 'ancho', 'largo'].includes(campo) && 'cm') ||
                            null}
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditar(false)}>Cancelar</Button>
          <Button variant="contained" onClick={handleGuardarEdicion}>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog eliminación */}
      <Dialog
        open={openEliminar}
        onClose={cancelarEliminacion}
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <DialogTitle>Eliminar Paquete</DialogTitle>
        <DialogContent dividers>
          <Typography>¿Estás seguro de que deseas eliminar este paquete?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelarEliminacion}>Cancelar</Button>
          <Button variant="contained" color="error" onClick={confirmarEliminacion}>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default StepCarga;
