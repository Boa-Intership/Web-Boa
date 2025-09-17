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
  autoComplete,
  select = false,
  options = [],
  control,
  errors,
}) => (
  <Grid item xs={gridSize.xs} sm={gridSize.sm || gridSize.xs}>
    <Controller
      name={name}
      control={control}
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

interface BillingDataFormProps {
  control: Control<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
}

const BillingDataForm: React.FC<BillingDataFormProps> = ({ control, errors }) => {
  const formFields: FormFieldConfig[] = [
    {
      id: 'businessName',
      name: 'businessName',
      label: 'Razón Social',
      gridSize: { xs: 12 },
      required: true,
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
      id: 'billingNit',
      name: 'billingNit',
      label: 'CI o NIT de Facturación',
      gridSize: { xs: 12, sm: 8 },
      required: true,
    },
  ];

  return (
    <>
      <Box sx={{ mb: '20px' }}>
        <AppTypography variant="h4Medium" color={'primary.main'}>
          Datos de Facturación
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

export default BillingDataForm;
