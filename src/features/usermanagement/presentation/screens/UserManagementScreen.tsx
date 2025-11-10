import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Chip,
  Button,
  Container,
} from '@mui/material';
import { Security, Group, Person, FilterList, PersonAddAlt } from '@mui/icons-material';
import { getRoles } from '../../data/services/role.service';
import { getUsers } from '../../data/services/user.service';
import { Role } from '../../domain/models/role.model';
import { User } from '../../domain/models/user.model';

type TipoUsuario = string;

const rolesDisponibles = [
  'Revisor / Recepción de Paquetes',
  'Inspector NAABOL',
  'Almacenador / Encargado de Almacén',
  'Encargado de Aeronave',
  'Entregador / Despachador',
  'Manifestador',
  'Facturador',
  'Control Físico',
  'Administrador (Admin General)',
];

const UserManagement: React.FC = () => {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [filtro, setFiltro] = useState<TipoUsuario | 'Todos'>('Todos');
  const [busqueda, setBusqueda] = useState('');
  const [rolesApi, setRolesApi] = useState<Role[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchData = async () => {
      try {
        const [rolesData, usersData] = await Promise.all([getRoles(token), getUsers(token)]); // Obtener roles y usuarios en paralelo
        setRolesApi(rolesData);
        setUsuarios(usersData);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    fetchData();
  }, []);

  const handleTipoChange = (id: number, nuevoRol: TipoUsuario) => {
    setUsuarios((prev) =>
      prev.map((u) =>
        u.id === id
          ? {
              ...u,
              roles: [{ id: 0, name: nuevoRol, description: '' }],
              rolesFuncionario: nuevoRol === 'FUNCIONARIO' ? u.rolesFuncionario || [] : [],
            }
          : u
      )
    );
  };

  const handleRoleToggle = (id: number, role: string) => {
    setUsuarios((prev) =>
      prev.map((u) =>
        u.id === id
          ? {
              ...u,
              rolesFuncionario: u.rolesFuncionario?.includes(role)
                ? u.rolesFuncionario.filter((r) => r !== role)
                : [...(u.rolesFuncionario || []), role],
            }
          : u
      )
    );
  };

  const filtrados = usuarios.filter(
    (u) =>
      (filtro === 'Todos' || u.roles.some((r) => r.name === filtro)) &&
      (u.name.toLowerCase().includes(busqueda.toLowerCase()) ||
        u.email.toLowerCase().includes(busqueda.toLowerCase()))
  );

  const contadores = {
    Administrador: usuarios.filter((u) => u.roles.some((r) => r.name === 'ADMIN')).length,
    Funcionario: usuarios.filter((u) => u.roles.some((r) => r.name === 'FUNCIONARIO')).length,
    Usuario: usuarios.filter((u) => u.roles.some((r) => r.name === 'USER')).length,
  };

  return (
    <Container sx={{ py: 4, minHeight: '80vh' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Gestión de Usuarios
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={3}>
        Administra los tipos de usuario y roles del sistema
      </Typography>

      {/* Tarjetas resumen */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <Security sx={{ color: '#EF4444' }} />
                <Typography variant="subtitle1" fontWeight="medium">
                  Administradores
                </Typography>
              </Box>
              <Typography variant="h4" mt={1}>
                {contadores.Administrador}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <Group sx={{ color: '#3B82F6' }} />
                <Typography variant="subtitle1" fontWeight="medium">
                  Funcionarios
                </Typography>
              </Box>
              <Typography variant="h4" mt={1}>
                {contadores.Funcionario}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <Person sx={{ color: '#6B7280' }} />
                <Typography variant="subtitle1" fontWeight="medium">
                  Usuarios
                </Typography>
              </Box>
              <Typography variant="h4" mt={1}>
                {contadores.Usuario}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filtros */}
      <Box display="flex" gap={2} mb={3} flexWrap="wrap">
        <TextField
          label="Buscar usuarios"
          placeholder="Buscar por nombre o email..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          sx={{ flex: 1, minWidth: 260 }}
        />
        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel>Filtrar por tipo de usuario</InputLabel>
          <Select
            value={filtro}
            label="Filtrar por tipo de usuario"
            onChange={(e) => setFiltro(e.target.value as any)}
            startAdornment={<FilterList sx={{ mr: 1 }} />}
          >
            <MenuItem value="Todos">Todos los tipos</MenuItem>
            {rolesApi.map((rol) => (
              <MenuItem key={rol.id} value={rol.name}>
                {rol.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          startIcon={<PersonAddAlt />}
          sx={{ backgroundColor: '#2563EB' }}
        >
          Agregar Usuario
        </Button>
      </Box>

      {/* Lista de usuarios */}
      {filtrados.map((u) => (
        <Card key={u.id} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6">{u.name}</Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              {u.email}
            </Typography>

            <Typography variant="subtitle2">Tipo de Usuario:</Typography>
            <RadioGroup
              row
              value={u.roles?.[0]?.name}
              onChange={(e) => handleTipoChange(u.id, e.target.value as TipoUsuario)}
            >
              {rolesApi.map((rol) => (
                <FormControlLabel
                  key={rol.id}
                  value={rol.name}
                  control={<Radio />}
                  label={rol.name}
                />
              ))}
            </RadioGroup>

            {u.roles.some((r) => r.name === 'FUNCIONARIO') && (
              <>
                <Typography variant="subtitle2" mt={2}>
                  Roles de Funcionario:
                </Typography>
                <Grid container spacing={1}>
                  {rolesDisponibles.map((role) => (
                    <Grid item xs={12} sm={6} md={4} key={role}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={u.rolesFuncionario?.includes(role) || false}
                            onChange={() => handleRoleToggle(u.id, role)}
                          />
                        }
                        label={role}
                      />
                    </Grid>
                  ))}
                </Grid>

                <Typography variant="subtitle2" mt={2}>
                  Roles Actuales:
                </Typography>
                <Box display="flex" gap={1} flexWrap="wrap">
                  {u.rolesFuncionario && u.rolesFuncionario.length > 0 ? (
                    u.rolesFuncionario.map((r) => (
                      <Chip key={r} label={r} color="primary" variant="outlined" />
                    ))
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      Sin roles asignados
                    </Typography>
                  )}
                </Box>

                <Button variant="contained" sx={{ mt: 2 }}>
                  Guardar cambios
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default UserManagement;
