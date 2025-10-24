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

interface ForgotPasswordProps {
  open: boolean;
  handleClose: () => void;
}

export default function ForgotPassword({ open, handleClose }: ForgotPasswordProps) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');

  const handleContinue = () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Por favor, introduce un correo electrónico válido.');
      return;
    }
    setError('');

    // Guardar el email para el siguiente paso
    sessionStorage.setItem('pwd_reset_email', email);

    // (Futuro) Aquí se llamaría al backend para enviar el código.

    // Redirigir a la nueva vista de reseteo
    navigate('/recuperar-contrasena');
    handleClose(); // Cierra el modal
  };

  // Resetear estado al cerrar
  const handleOnClose = () => {
    setEmail('');
    setError('');
    handleClose();
  };

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
