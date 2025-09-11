import React from 'react';
import { TextField, MenuItem, Grid, Typography } from '@mui/material';

const BillingDataForm = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Datos de Facturación
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="razonSocial"
            name="razonSocial"
            label="Razón Social"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            select
            required
            id="billingDocType"
            name="billingDocType"
            label="Tipo de Documento"
            fullWidth
            defaultValue="CI"
          >
            <MenuItem value='1'>CI</MenuItem>
            <MenuItem value='5'>NIT</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            required
            id="billing_ci_nit"
            name="billing_ci_nit"
            label="CI o NIT"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="complemento"
            name="complemento"
            label="Complemento"
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BillingDataForm;
