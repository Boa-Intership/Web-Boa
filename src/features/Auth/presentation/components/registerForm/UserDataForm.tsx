import React from 'react';
import { TextField, MenuItem, Grid, Box } from '@mui/material';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { AppTypography } from 'ui';
import { RegisterSchema } from '../../../domain/validators';

interface FormFieldConfig {
  id: string;
  name: keyof RegisterSchema;
  label: string;
  type?: string;
  gridSize: { xs: number; sm?: number };
  required?: boolean;
  autoComplete?: string;
  select?: boolean;
  options?: { value: string; label: string }[];
  defaultValue?: string;
}

interface FormFieldProps extends FormFieldConfig {
  control: Control<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  gridSize,
  required = false,
  select = false,
  options = [],
  defaultValue,
  control,
  errors,
}) => (
  <Grid item xs={gridSize.xs} sm={gridSize.sm || gridSize.xs}>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      render={({ field }) => (
        <TextField
          {...field}
          select={select}
          required={required}
          id={id}
          label={label}
          type={type}
          fullWidth
          error={!!errors[name]}
          helperText={errors[name]?.message}
          color={errors[name] ? 'error' : 'primary'}
        >
          {select &&
            options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </TextField>
      )}
    />
  </Grid>
);

interface UserDataFormProps {
  control: Control<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
}

const UserDataForm: React.FC<UserDataFormProps> = ({ control, errors }) => {
  const formFields: FormFieldConfig[] = [
    {
      id: 'email',
      name: 'email',
      label: 'Correo Electrónico',
      gridSize: { xs: 12 },
      required: true,
    },
    {
      id: 'password',
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      gridSize: { xs: 12, sm: 6 },
      required: true,
    },
    {
      id: 'confirmPassword',
      name: 'confirmPassword',
      label: 'Repetir Contraseña',
      type: 'password',
      gridSize: { xs: 12, sm: 6 },
      required: true,
    },
    {
      id: 'name',
      name: 'name',
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
      defaultValue: '1',
      options: [
        { value: '1', label: 'CI' },
        { value: '5', label: 'NIT' },
      ],
    },
    {
      id: 'nit',
      name: 'nit',
      label: 'CI o NIT',
      gridSize: { xs: 12, sm: 8 },
      required: true,
    },
    {
      id: 'number',
      name: 'number',
      label: 'Número de Celular',
      gridSize: { xs: 12 },
      required: true,
    },
    {
      id: 'address',
      name: 'address',
      label: 'Dirección',
      gridSize: { xs: 12 },
      required: false,
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
          <FormField key={field.id} {...field} control={control} errors={errors} />
        ))}
      </Grid>
    </>
  );
};

export default UserDataForm;
