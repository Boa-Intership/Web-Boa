import React, { useState, useRef, useEffect } from 'react';
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
  CircularProgress,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
import { Visibility, VisibilityOff, Close } from '@mui/icons-material';
import { AppTypography } from 'ui';
import { LoadingButton } from '@mui/lab';

interface ChangePasswordModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (currentPassword: string, newPassword: string) => Promise<void>;
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

  // Estados del formulario
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Estados de visibilidad
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Estados de validación y UI
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [touched, setTouched] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  // Referencias para el foco
  const currentPasswordRef = useRef<HTMLInputElement>(null);

  // Validación de contraseña
  const validatePassword = (password: string): PasswordValidation => {
    return {
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
    };
  };

  const passwordValidation = validatePassword(newPassword);
  const isPasswordValid = Object.values(passwordValidation).every(Boolean);
  const passwordsMatch = newPassword === confirmPassword;

  // Limpieza del formulario
  const resetForm = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setError(null);
    setSuccess(false);
    setTouched({
      currentPassword: false,
      newPassword: false,
      confirmPassword: false,
    });
    setShowCurrentPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
  };

  // Focus automático al abrir
  useEffect(() => {
    if (open && currentPasswordRef.current) {
      const timer = setTimeout(() => {
        currentPasswordRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Cerrar modal con limpieza
  const handleClose = () => {
    if (!loading) {
      resetForm();
      onClose();
    }
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (!isPasswordValid) {
      setError('La nueva contraseña no cumple con los requisitos de seguridad');
      return;
    }

    if (!passwordsMatch) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (currentPassword === newPassword) {
      setError('La nueva contraseña debe ser diferente a la actual');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await onSubmit(currentPassword, newPassword);
      setSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error al cambiar la contraseña');
    } finally {
      setLoading(false);
    }
  };

  // Validación en tiempo real
  const getFieldError = (field: keyof typeof touched) => {
    if (!touched[field]) return '';

    switch (field) {
      case 'currentPassword':
        return !currentPassword ? 'La contraseña actual es obligatoria' : '';
      case 'newPassword':
        return !newPassword
          ? 'La nueva contraseña es obligatoria'
          : !isPasswordValid
            ? 'La contraseña no cumple con los requisitos'
            : '';
      case 'confirmPassword':
        return !confirmPassword
          ? 'Confirma tu nueva contraseña'
          : !passwordsMatch
            ? 'Las contraseñas no coinciden'
            : '';
      default:
        return '';
    }
  };

  const canSubmit =
    currentPassword &&
    newPassword &&
    confirmPassword &&
    isPasswordValid &&
    passwordsMatch &&
    !loading;

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
          disabled={loading}
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
        <Box component="form" onSubmit={handleSubmit} noValidate>
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
          <TextField
            ref={currentPasswordRef}
            fullWidth
            type={showCurrentPassword ? 'text' : 'password'}
            label="Contraseña Actual"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, currentPassword: true }))}
            error={!!getFieldError('currentPassword')}
            helperText={getFieldError('currentPassword')}
            disabled={loading}
            sx={{ mb: 2, mt: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    edge="end"
                    disabled={loading}
                  >
                    {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Nueva contraseña */}
          <TextField
            fullWidth
            type={showNewPassword ? 'text' : 'password'}
            label="Nueva Contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, newPassword: true }))}
            error={!!getFieldError('newPassword')}
            helperText={getFieldError('newPassword')}
            disabled={loading}
            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    edge="end"
                    disabled={loading}
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Indicadores de validación de contraseña */}
          {newPassword && (
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
          <TextField
            fullWidth
            type={showConfirmPassword ? 'text' : 'password'}
            label="Confirmar Nueva Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => setTouched((prev) => ({ ...prev, confirmPassword: true }))}
            error={!!getFieldError('confirmPassword')}
            helperText={getFieldError('confirmPassword')}
            disabled={loading}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                    disabled={loading}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ p: 3, pt: 1 }}>
        <LoadingButton onClick={handleClose} disabled={loading} variant="text" sx={{ mr: 1 }}>
          Cancelar
        </LoadingButton>
        <LoadingButton
          onClick={handleSubmit}
          loading={loading}
          disabled={!canSubmit}
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
