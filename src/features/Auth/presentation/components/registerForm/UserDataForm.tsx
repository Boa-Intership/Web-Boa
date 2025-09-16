import React from 'react';
import { TextField, MenuItem, Grid, Box } from '@mui/material';
import { AppTypography } from 'ui';

interface FormFieldConfig {
  id: string;
  name: string;
  label: string;
  type?: string;
  gridSize: { xs: number; sm?: number };
  required?: boolean;
  autoComplete?: string;
  select?: boolean;
  options?: { value: string; label: string }[];
  defaultValue?: string;
}

const FormField: React.FC<FormFieldConfig> = ({
  id,
  name,
  label,
  type = 'text',
  gridSize,
  required = false,
  autoComplete,
  select = false,
  options = [],
  defaultValue,
}) => (
  <Grid item xs={gridSize.xs} sm={gridSize.sm || gridSize.xs}>
    <TextField
      select={select}
      required={required}
      id={id}
      name={name}
      label={label}
      type={type}
      fullWidth
      autoComplete={autoComplete}
      defaultValue={defaultValue}
    >
      {select &&
        options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  </Grid>
);

const UserDataForm = () => {
  const formFields: FormFieldConfig[] = [
    {
      id: 'email',
      name: 'email',
      label: 'Correo Electrónico',
      gridSize: { xs: 12 },
      required: true,
      autoComplete: 'email',
    },
    {
      id: 'password',
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      gridSize: { xs: 12, sm: 6 },
      required: true,
      autoComplete: 'new-password',
    },
    {
      id: 'confirmPassword',
      name: 'confirmPassword',
      label: 'Repetir Contraseña',
      type: 'password',
      gridSize: { xs: 12, sm: 6 },
      required: true,
      autoComplete: 'new-password',
    },
    {
      id: 'fullName',
      name: 'fullName',
      label: 'Nombre Completo',
      gridSize: { xs: 12 },
      required: true,
      autoComplete: 'name',
    },
    {
      id: 'docType',
      name: 'docType',
      label: 'Tipo de Documento',
      gridSize: { xs: 12, sm: 4 },
      required: true,
      select: true,
      defaultValue: 'CI',
      options: [
        { value: '1', label: 'CI' },
        { value: '5', label: 'NIT' },
      ],
    },
    {
      id: 'ci_nit',
      name: 'ci_nit',
      label: 'CI o NIT',
      gridSize: { xs: 12, sm: 8 },
      required: true,
    },
    {
      id: 'cellphone',
      name: 'cellphone',
      label: 'Número de Celular',
      gridSize: { xs: 12 },
      required: true,
      autoComplete: 'tel',
    },
    {
      id: 'address',
      name: 'address',
      label: 'Dirección',
      gridSize: { xs: 12 },
      required: false,
      autoComplete: 'shipping address-line1',
    },
  ];

  return (
    <>
      <Box sx={{ mb: '20px' }}>
        <AppTypography variant="h4Regular" color={'primary.main'}>
          Datos de Usuario
        </AppTypography>
      </Box>
      <Grid container spacing={3}>
        {formFields.map((field) => (
          <FormField key={field.id} {...field} />
        ))}
      </Grid>
    </>
  );
};

export default UserDataForm;
