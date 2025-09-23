import * as React from 'react';
import { Box, Button, FormControl, Link, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AppTypography } from 'ui';
import ForgotPassword from './ForgotPassword';
import { loginSchema, LoginSchema } from '../../../domain/validators/loginSchema';

interface LoginFormProps {
  onSubmit: (data: LoginSchema) => void;
  isLoading?: boolean;
}

export default function LoginForm({ onSubmit, isLoading = false }: LoginFormProps) {
  const [open, setOpen] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onFormSubmit = (data: LoginSchema) => {
    onSubmit(data);
  };

  return (
    <>
      <AppTypography color={'primary'} variant="h3Regular" sx={{ pb: '8px' }}>
        Iniciar sesión
      </AppTypography>
      <Box
        component="form"
        onSubmit={handleSubmit(onFormSubmit)}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 2,
        }}
      >
        <FormControl>
          <AppTypography variant="smallRegular">Correo</AppTypography>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.email}
                helperText={errors.email?.message}
                id="email"
                type="email"
                placeholder="tu@correo.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={errors.email ? 'error' : 'primary'}
                sx={{ pt: '8px' }}
              />
            )}
          />
        </FormControl>
        <FormControl>
          <AppTypography variant="smallRegular">Contraseña</AppTypography>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.password}
                helperText={errors.password?.message}
                placeholder="••••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                required
                fullWidth
                variant="outlined"
                color={errors.password ? 'error' : 'primary'}
                sx={{ pt: '8px' }}
              />
            )}
          />
        </FormControl>
        <ForgotPassword open={open} handleClose={handleClose} />
        <Button type="submit" fullWidth variant="contained" disabled={isSubmitting || isLoading}>
          {isSubmitting || isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
        </Button>
        <Link
          component="button"
          type="button"
          onClick={handleClickOpen}
          variant="body2"
          sx={{ alignSelf: 'center' }}
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </Box>
    </>
  );
}
