import React from 'react';
import { User, TipoUsuario, RolFuncionario } from '../../types/user.types';
import {
  Box,
  Typography,
  Avatar,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Grid,
  Chip,
} from '@mui/material';

interface Props {
  user: User;
  onUpdate: (updatedUser: User) => void;
}

const rolesDisponibles: RolFuncionario[] = [
  'Facturador',
  'Revisor / Recepción de Paquetes',
  'Inspector NAABOL',
  'Almacenador / Encargado de Almacén',
  'Encargado de Aeronave',
  'Entregador / Despachador',
  'Manifestador',
  'Control Físico',
  'Administrador (Admin General)',
];

export const UserCard: React.FC<Props> = ({ user, onUpdate }) => {
  const handleTipoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tipo = e.target.value as TipoUsuario;
    const updatedUser = { ...user, tipo };
    if (tipo !== 'Funcionario') {
      updatedUser.rolesFuncionario = [];
    }
    onUpdate(updatedUser);
  };

  const toggleRol = (rol: RolFuncionario) => {
    if (!user.rolesFuncionario) user.rolesFuncionario = [];
    const updatedRoles = user.rolesFuncionario.includes(rol)
      ? user.rolesFuncionario.filter((r) => r !== rol)
      : [...user.rolesFuncionario, rol];
    onUpdate({ ...user, rolesFuncionario: updatedRoles });
  };

  return (
    <Box p={2} mb={2} border="1px solid #ddd" borderRadius={2}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar src={user.avatarUrl} sx={{ width: 46, height: 46 }} />
        </Grid>
        <Grid item xs>
          <Typography variant="h6">{user.nombre}</Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>

          <Typography mt={2}>Tipo de Usuario:</Typography>
          <RadioGroup row value={user.tipo} onChange={handleTipoChange}>
            <FormControlLabel value="Administrador" control={<Radio />} label="Administrador" />
            <FormControlLabel value="Funcionario" control={<Radio />} label="Funcionario" />
            <FormControlLabel value="Usuario" control={<Radio />} label="Usuario" />
          </RadioGroup>

          {user.tipo === 'Funcionario' && (
            <>
              <Typography mt={2}>Roles de Funcionario:</Typography>
              <Grid container spacing={1}>
                {rolesDisponibles.map((rol) => (
                  <Grid item xs={12} sm={6} md={4} key={rol}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={user.rolesFuncionario?.includes(rol) ?? false}
                          onChange={() => toggleRol(rol)}
                        />
                      }
                      label={rol}
                    />
                  </Grid>
                ))}
              </Grid>
              <Typography mt={1}>Roles Actuales:</Typography>
              {user.rolesFuncionario?.map((r) => (
                <Chip key={r} label={r} sx={{ mr: 1, mt: 1 }} />
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
