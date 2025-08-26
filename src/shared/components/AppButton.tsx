import { Button, ButtonProps } from '@mui/material';

const AppButton = (props: ButtonProps) => (
  <Button
    variant={props.variant || 'contained'}
    sx={{
      fontSize: { xs: '0.7rem', md: '1.2rem' }, // tamaño de letra más grande
      minHeight: { xs: 15, md: 40 }, // alto mínimo
      borderRadius: 7,
      mt: 2,
      outline: 'none',
      boxShadow: '0 4px 16px rgba(46,92,154,0.15)', // sombra saliente
      transition: 'box-shadow 0.2s, transform 0.2s',
      '&:hover': {
        boxShadow: '0 8px 24px rgba(46,92,154,0.25)', // sombra más fuerte en hover
        transform: 'translateY(-2px) scale(1.04)', // efecto saliente y agrandado
      },
      '&:focus': {
        outline: 'none',
        boxShadow: '0 4px 16px rgba(46,92,154,0.15)',
      },
    }}
    color="primary"
    {...props}
  />
);

export default AppButton;
