import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

interface ForgotPasswordProps {
  open: boolean;
  handleClose: () => void;
}

export default function ForgotPassword({ open, handleClose }: ForgotPasswordProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          handleClose();
        },
        sx: {
          backgroundImage: 'none',
          backgroundColor: 'background.default',
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle color="primary.main">Restablecer contraseña</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
        <DialogContentText>
          Ingresa la dirección de correo electrónico de tu cuenta y te enviaremos un enlace para
          restablecer tu contraseña.
        </DialogContentText>
        <TextField
          required
          margin="dense"
          id="email"
          name="email"
          label="Email"
          placeholder="Dirección de correo electrónico"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Canelar</Button>
        <Button variant="contained" type="submit">
          Continuar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
