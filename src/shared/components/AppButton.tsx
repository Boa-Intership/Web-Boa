import { Button, ButtonProps } from '@mui/material';

const AppButton = (props: ButtonProps) => {
  const { sx, ...rest } = props;

  return (
    <Button
      variant={props.variant || 'contained'}
      sx={{
        textTransform: 'none',
        borderRadius: 2,
        // transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        boxShadow: '0 2px 4px #002E6E', // predeterminado
        '&:hover': {
          //  transform: 'translateY(-2px) scale(1.05)',
          boxShadow: '0 2px 4px #005B96', // hover
        },
        ...(sx || {}),
      }}
      {...rest}
    />
  );
};

export default AppButton;
