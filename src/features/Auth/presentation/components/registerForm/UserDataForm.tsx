import React, { useState } from 'react';
import { TextField, MenuItem, Grid, Box, IconButton, InputAdornment } from '@mui/material';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { AppTypography } from 'ui';
import { CreateRegisterSchema } from '../../../domain/validators';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { MuiPhone } from '../../../../../shared/components/PhoneInput';

interface FormFieldConfig {
  id: string;
  name: keyof CreateRegisterSchema;
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
  control: Control<CreateRegisterSchema>;
  errors: FieldErrors<CreateRegisterSchema>;
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
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const inputType = type === 'password' && showPassword ? 'text' : type;
  const passwordAdornment =
    type === 'password'
      ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePasswordVisibility}
                onMouseDown={(event) => event.preventDefault()}
                edge="end"
                size="small"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }
      : {};

  if (name === 'number' || type === 'phone') {
    return (
      <Grid item xs={gridSize.xs} sm={gridSize.sm || gridSize.xs}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue || ''}
          render={({ field }) => (
            <Box>
              {/* Label personalizado */}
              <AppTypography
                variant="body2"
                sx={{
                  mb: 1,
                  color: errors[name] ? 'error.main' : 'text.secondary',
                  fontWeight: required ? 600 : 400,
                }}
              ></AppTypography>

              {/* Componente de teléfono */}
              <MuiPhone
                value={field.value || ''}
                onChange={field.onChange}
                label={label}
                placeholder={placeholder || 'Número de teléfono'}
                error={!!errors[name]}
                helperText={errors[name]?.message}
                fullWidth
                required={required}
              />
            </Box>
          )}
        />
      </Grid>
    );
  }

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
            name={String(name)}
            label={label}
            type={inputType}
            fullWidth
            placeholder={placeholder}
            inputProps={inputProps}
            InputProps={passwordAdornment}
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
  control: Control<CreateRegisterSchema>;
  errors: FieldErrors<CreateRegisterSchema>;
}

const UserDataForm: React.FC<UserDataFormProps> = ({ control, errors }) => {
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
      id: 'ci',
      name: 'ci',
      label: 'CI',
      gridSize: { xs: 12, sm: 4 },
      required: true,
    },
    {
      id: 'nitComplemento',
      name: 'nitComplemento',
      label: 'Complemento',
      gridSize: { xs: 12, sm: 2 },
      required: false,
      placeholder: 'Ej: A1',
      inputProps: { maxLength: 3 },
    },
    {
      id: 'number',
      name: 'number',
      label: 'Número de Celular',
      gridSize: { xs: 12, sm: 6 },
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

  return (
    <>
      <Box sx={{ mb: '20px' }}>
        <AppTypography variant="h4Regular" color={'primary.main'}>
          Datos personales
        </AppTypography>
      </Box>
      <Grid container spacing={3} mb={3}>
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

          return fieldComponent;
        })}
      </Grid>
    </>
  );
};

export default UserDataForm;
