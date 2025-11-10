import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Alert,
  Snackbar,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AppTypography } from '../../../../../ui';
import { Visibility, VisibilityOff, Close } from '@mui/icons-material';

// Esquema de validación para el formulario de nueva contraseña
const newPasswordSchema = z
  .object({
    password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'], // Error se asigna al campo de confirmación
  });

type NewPasswordSchema = z.infer<typeof newPasswordSchema>;

interface NewPasswordFormProps {
  onSubmit: (data: NewPasswordSchema) => Promise<void>;
  isLoading?: boolean;
  error?: string;
}

export default function NewPasswordForm({
  onSubmit,
  isLoading = false,
  error,
}: NewPasswordFormProps) {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [localError, setLocalError] = useState<string>('');
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewPasswordSchema>({
    resolver: zodResolver(newPasswordSchema),
    mode: 'onBlur',
    defaultValues: { password: '', confirmPassword: '' },
  });

  const handleFormSubmit = async (data: NewPasswordSchema) => {
    setLocalError(''); // Limpiar errores previos

    try {
      await onSubmit(data);
      // Si llega aquí, el submit fue exitoso
      setShowSuccessMessage(true);
    } catch (error: unknown) {
      // Manejar errores del backend
      const apiError = error as {
        response?: {
          data?: {
            message?: string;
          };
        };
      };

      const errorMessage =
        apiError?.response?.data?.message || 'Error al cambiar la contraseña. Inténtalo de nuevo.';

      setLocalError(errorMessage);
    }
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  const handleCloseError = () => {
    setLocalError('');
  };

  // Calcular si hay algún error para mostrar
  const currentError = error || localError;

  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 3, sm: 4 }, // Menos padding en móviles
        maxWidth: 500,
        width: '100%',
        borderRadius: 3,
        backgroundColor: 'background.default',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(handleFormSubmit)}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Box display="flex" flexDirection="column" sx={{ mb: 2 }}>
          <AppTypography variant="h3Bold" color="primary" textAlign={'center'}>
            Crea tu nueva contraseña
          </AppTypography>
          <AppTypography variant="baseRegular" color="text.secondary" textAlign={'center'}>
            Asegúrate de que tu nueva contraseña sea segura.
          </AppTypography>
        </Box>

        <FormControl>
          <AppTypography variant="smallRegular">Nueva Contraseña</AppTypography>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type={showNewPassword ? 'text' : 'password'}
                placeholder="••••••••"
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
                variant="outlined"
                sx={{ pt: '8px' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowNewPassword(!showNewPassword)} edge="end">
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <AppTypography variant="smallRegular">Confirmar Contraseña</AppTypography>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type={showCurrentPassword ? 'text' : 'password'}
                placeholder="••••••••"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                fullWidth
                variant="outlined"
                sx={{ pt: '8px' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        edge="end"
                      >
                        {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </FormControl>
        {/* Mensaje de error */}
        {currentError && (
          <Alert severity="error" onClose={() => setLocalError('')} sx={{ mt: 1 }}>
            {currentError}
          </Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isSubmitting || isLoading}
          sx={{ mt: 2 }}
        >
          {isLoading ? 'Guardando...' : 'Guardar Contraseña'}
        </Button>

        {/* Mensaje de éxito */}
        <Snackbar
          open={showSuccessMessage}
          autoHideDuration={6000}
          onClose={handleCloseSuccessMessage}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSuccessMessage} severity="success" sx={{ width: '100%' }}>
            ¡Contraseña cambiada con éxito! Serás redirigido al login.
          </Alert>
        </Snackbar>
      </Box>
    </Paper>
  );
}
