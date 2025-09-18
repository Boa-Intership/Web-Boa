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
  autoComplete,
  select = false,
  options = [],
  control,
  errors,
  defaultValue,
  placeholder,
  inputProps,
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
            autoComplete={autoComplete}
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

interface BillingDataFormProps {
  control: Control<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
}

const BillingDataForm: React.FC<BillingDataFormProps> = ({ control, errors }) => {
  const billingDocType = useWatch({
    control,
    name: 'billingDocType',
    defaultValue: '1',
  });

  // Función para controlar que solo se puedan escribir números
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const isNumericField = (event.target as HTMLInputElement).name === 'billingNit';

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
      id: 'businessName',
      name: 'businessName',
      label: 'Razón Social',
      gridSize: { xs: 12 },
      required: true,
    },
    {
      id: 'billingDocType',
      name: 'billingDocType',
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
      id: 'billingNit',
      name: 'billingNit',
      label: 'CI o NIT de Facturación',
      gridSize: { xs: 12, sm: billingDocType === '1' ? 6 : 8 },
      required: true,
    },
  ];

  // Campo de complemento condicional para incluir después del NIT de facturación
  const billingComplementField: FormFieldConfig = {
    id: 'billingNitComplemento',
    name: 'billingNitComplemento',
    label: 'Complemento',
    gridSize: { xs: 12, sm: 2 },
    required: false,
    placeholder: 'Ej: A1',
    inputProps: { maxLength: 2 },
  };

  return (
    <>
      <Box sx={{ mb: '20px' }}>
        <AppTypography variant="h4Medium" color={'primary.main'}>
          Datos de Facturación
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

          // Si es el campo 'billingNit' y el tipo de documento es CI, agregar el complemento
          if (field.id === 'billingNit' && billingDocType === '1') {
            return (
              <React.Fragment key={field.id}>
                {fieldComponent}
                <FormField
                  key={billingComplementField.id}
                  {...billingComplementField}
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

export default BillingDataForm;
