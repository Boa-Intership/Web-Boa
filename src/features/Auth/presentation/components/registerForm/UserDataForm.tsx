import React from 'react';
import { TextField, MenuItem, Grid, Typography } from '@mui/material';
import { AppTypography } from 'ui';

const UserDataForm = () => {
  return (
    <>
      <Typography color={'primary.main'}>Datos de Usuario</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Correo Electrónico"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Contraseña"
            type="password"
            fullWidth
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="confirmPassword"
            name="confirmPassword"
            label="Repetir Contraseña"
            type="password"
            fullWidth
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="fullName"
            name="fullName"
            label="Nombre Completo"
            fullWidth
            autoComplete="name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            required
            id="docType"
            name="docType"
            label="Tipo de Documento"
            fullWidth
            defaultValue="CI"
          >
            <MenuItem value="1">CI</MenuItem>
            <MenuItem value="5">NIT</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField required id="ci_nit" name="ci_nit" label="CI o NIT" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cellphone"
            name="cellphone"
            label="Número de Celular"
            fullWidth
            autoComplete="tel"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Dirección"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default UserDataForm;
