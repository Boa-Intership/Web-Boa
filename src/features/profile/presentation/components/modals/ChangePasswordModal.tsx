import React, { useState, useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Alert,
  useTheme,
  useMediaQuery,
  Paper,
  CircularProgress,
} from '@mui/material';
import { Visibility, VisibilityOff, Close } from '@mui/icons-material';
import { AppTypography } from 'ui';
import { LoadingButton } from '@mui/lab';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  changePasswordSchema,
  type ChangePasswordSchema,
} from '../../../domain/validators/changePasswordSchema';

interface ChangePasswordModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: ChangePasswordSchema) => Promise<void>;
}

interface PasswordValidation {
  minLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ open, onClose, onSubmit }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Estados de visibilidad
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Estados de UI
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Configuración del formulario con react-hook-form y Zod
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    mode: 'onChange',
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  // Observar los valores para validación visual
  const watchedNewPassword = watch('newPassword');

  // Validación visual de la contraseña
  const passwordValidation: PasswordValidation = {
    minLength: watchedNewPassword.length >= 8,
    hasUppercase: /[A-Z]/.test(watchedNewPassword),
    hasLowercase: /[a-z]/.test(watchedNewPassword),
    hasNumber: /\d/.test(watchedNewPassword),
  };

  // Limpieza del formulario
  const resetForm = useCallback(() => {
    reset();
    setError(null);
    setSuccess(false);
    setShowCurrentPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
  }, [reset]);

  // Reset al abrir modal
  useEffect(() => {
    if (open) {
      resetForm();
    }
  }, [open, resetForm]);

  // Cerrar modal con limpieza
  const handleClose = () => {
    if (!isSubmitting) {
      resetForm();
      onClose();
    }
  };

  // Manejar envío del formulario
  const onSubmitForm = async (data: ChangePasswordSchema) => {
    setError(null);

    try {
      await onSubmit(data);
      setSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error al cambiar la contraseña');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      fullScreen={isMobile}
      PaperProps={{
        sx: {
          borderRadius: isMobile ? 0 : 2,
          bgcolor: 'background.default',
          ...(isMobile && {
            margin: 0,
            maxHeight: '100vh',
            height: '100vh',
          }),
        },
      }}
    >
      {/* Header */}
      <DialogTitle
        sx={{
          bgcolor: theme.palette.primary.dark,
          color: 'primary.contrastText',
          py: 2,
          px: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <AppTypography variant="h4Regular" color="inherit" fontWeight="medium">
          Cambiar Contraseña
        </AppTypography>
        <IconButton
          onClick={handleClose}
          disabled={isSubmitting}
          sx={{
            color: 'primary.contrastText',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' },
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      {/* Content */}
      <DialogContent sx={{ p: 3, mt: 2 }}>
        <Box component="form" onSubmit={handleSubmit(onSubmitForm)} noValidate>
          {/* Mensajes de estado */}
          {error && (
            <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              ¡Contraseña cambiada exitosamente!
            </Alert>
          )}

          {/* Contraseña actual */}
          <Controller
            name="currentPassword"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                fullWidth
                type={showCurrentPassword ? 'text' : 'password'}
                label="Contraseña Actual"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                disabled={isSubmitting}
                sx={{ mb: 2, mt: 1 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        edge="end"
                        disabled={isSubmitting}
                      >
                        {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          {/* Nueva contraseña */}
          <Controller
            name="newPassword"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                fullWidth
                type={showNewPassword ? 'text' : 'password'}
                label="Nueva Contraseña"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                disabled={isSubmitting}
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        edge="end"
                        disabled={isSubmitting}
                      >
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          {/* Indicadores de validación de contraseña */}
          {watchedNewPassword && (
            <Paper
              elevation={0}
              sx={{
                p: 2,
                mb: 2,
                bgcolor: theme.palette.background.paper,
                borderRadius: 2,
              }}
            >
              <AppTypography variant="body2" color="text.secondary" gutterBottom>
                La contraseña debe cumplir con:
              </AppTypography>
              <Box component="ul" sx={{ m: 0, pl: 2 }}>
                {Object.entries({
                  minLength: 'Al menos 8 caracteres',
                  hasUppercase: 'Una letra mayúscula',
                  hasLowercase: 'Una letra minúscula',
                  hasNumber: 'Un número',
                }).map(([key, text]) => (
                  <Box
                    component="li"
                    key={key}
                    sx={{
                      color: passwordValidation[key as keyof PasswordValidation]
                        ? theme.palette.success.dark
                        : theme.palette.secondary.light,
                      fontSize: '0.875rem',
                      mb: 0.5,
                    }}
                  >
                    {text} {passwordValidation[key as keyof PasswordValidation] ? '✓' : ''}
                  </Box>
                ))}
              </Box>
            </Paper>
          )}

          {/* Confirmar contraseña */}
          <Controller
            name="confirmNewPassword"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                fullWidth
                type={showConfirmPassword ? 'text' : 'password'}
                label="Confirmar Nueva Contraseña"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                disabled={isSubmitting}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        edge="end"
                        disabled={isSubmitting}
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Box>
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ p: 3, pt: 1 }}>
        <LoadingButton onClick={handleClose} disabled={isSubmitting} variant="text" sx={{ mr: 1 }}>
          Cancelar
        </LoadingButton>
        <LoadingButton
          onClick={handleSubmit(onSubmitForm)}
          loading={isSubmitting}
          disabled={isSubmitting}
          variant="contained"
          loadingIndicator={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CircularProgress size={16} color="inherit" />
              Cambiando...
            </Box>
          }
        >
          Cambiar Contraseña
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default ChangePasswordModal;
