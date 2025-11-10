import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSendResetCode } from '../../useAuth.hooks';

interface ForgotPasswordProps {
  open: boolean;
  handleClose: () => void;
  initialEmail?: string;
}

export default function ForgotPassword({ open, handleClose, initialEmail }: ForgotPasswordProps) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState(initialEmail || '');
  const [error, setError] = React.useState('');
  const sendResetCodeMutation = useSendResetCode();

  const handleContinue = async () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Por favor, introduce un correo electrónico válido.');
      return;
    }
    setError('');

    try {
      // Enviar código de recuperación al backend
      await sendResetCodeMutation.mutateAsync({ email });

      // Guardar el email para el siguiente paso
      sessionStorage.setItem('password_reset_email', email);

      // Redirigir a la nueva vista de reseteo
      navigate('/recuperar-contrasena');
      handleClose(); // Cierra el modal
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
        apiError?.response?.data?.message || 'Error al enviar el código. Inténtalo de nuevo.';
      setError(errorMessage);
    }
  };

  // Resetear estado al cerrar
  const handleOnClose = () => {
    setEmail(initialEmail || '');
    setError('');
    handleClose();
  };

  // Actualizar email cuando cambie initialEmail
  React.useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  return (
    <Dialog
      open={open}
      onClose={handleOnClose}
      PaperProps={{ sx: { backgroundColor: 'background.default', borderRadius: 2 } }}
    >
      <DialogTitle>Restablecer Contraseña</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          Ingresa tu correo electrónico y te enviaremos un código para restablecer tu contraseña.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Correo Electrónico"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error}
          helperText={error}
        />
      </DialogContent>
      <DialogActions sx={{ p: '0 24px 24px' }}>
        <Button onClick={handleOnClose}>Cancelar</Button>
        <Button onClick={handleContinue} variant="contained">
          Continuar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
