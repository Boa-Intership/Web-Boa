import React from 'react';
import { TextField, MenuItem, Grid, Box } from '@mui/material';
import { Control, Controller, FieldErrors, useWatch } from 'react-hook-form';
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
  placeholder?: string;
  inputProps?: { maxLength?: number };
}

interface FormFieldProps extends FormFieldConfig {
  control: Control<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
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
  placeholder,
  inputProps,
  control,
  errors,
  onKeyDown,
}) => {
  return (
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
            placeholder={placeholder}
            inputProps={inputProps}
            error={!!errors[name]}
            helperText={errors[name]?.message}
            color={errors[name] ? 'error' : 'primary'}
            onKeyDown={onKeyDown}
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
};

interface UserDataFormProps {
  control: Control<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
}

const UserDataForm: React.FC<UserDataFormProps> = ({ control, errors }) => {
  const docType = useWatch({
    control,
    name: 'docType',
    defaultValue: '1',
  });
  // Función para controlar que solo se puedan escribir números
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isNumericField =
      (event.target as HTMLInputElement).name === 'number' ||
      (event.target as HTMLInputElement).name === 'nit';

    if (!isNumericField) return;

    if (
      event.key === 'Backspace' ||
      event.key === 'Delete' ||
      event.key === 'Tab' ||
      event.key === 'Enter' ||
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowRight' ||
      (event.ctrlKey && ['a', 'c', 'v', 'x', 'z'].includes(event.key.toLowerCase()))
    ) {
      return;
    }

    // Bloquear si no es un número
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

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
      gridSize: { xs: 12, sm: docType === '1' ? 6 : 8 },
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
      placeholder: 'Ej: Calle Falsa 123, Ciudad, País',
    },
  ];

  // Campo de complemento condicional para incluir después del NIT
  const nitComplementField: FormFieldConfig = {
    id: 'nitComplemento',
    name: 'nitComplemento',
    label: 'Complemento',
    gridSize: { xs: 12, sm: 2 },
    required: false,
    placeholder: 'Ej: A1',
    inputProps: { maxLength: 3 },
  };

  return (
    <>
      <Box sx={{ mb: '20px' }}>
        <AppTypography variant="h4Regular" color={'primary.main'}>
          Datos de Usuario
        </AppTypography>
      </Box>
      <Grid container spacing={3}>
        {formFields.map((field) => {
          // Renderizar el campo
          const fieldComponent = (
            <FormField
              key={field.id}
              {...field}
              control={control}
              errors={errors}
              onKeyDown={handleKeyDown}
            />
          );

          // Si es el campo 'nit' y el tipo de documento es CI, agregar el complemento
          if (field.id === 'nit' && docType === '1') {
            return (
              <React.Fragment key={field.id}>
                {fieldComponent}
                <FormField
                  key={nitComplementField.id}
                  {...nitComplementField}
                  control={control}
                  errors={errors}
                />
              </React.Fragment>
            );
          }

          return fieldComponent;
        })}
      </Grid>
    </>
  );
};

export default UserDataForm;
