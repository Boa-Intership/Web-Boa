import { Button, ButtonProps } from '@mui/material';

const AppButton = (props: ButtonProps) => {
  const { sx, ...rest } = props;

  return (
    <Button
      variant={props.variant || 'contained'}
      sx={{
        minHeight: { xs: 15, md: 40 },
        borderRadius: 7,
        outline: 'none',
        boxShadow: '0 4px 16px rgba(46,92,154,0.15)',
        transition: 'box-shadow 0.2s, transform 0.2s',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(46,92,154,0.25)',
          transform: 'translateY(-2px) scale(1.04)',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '0 4px 16px rgba(46,92,154,0.15)',
        },
        ...(sx || {}),
      }}
      {...rest}
    />
  );
};

export default AppButton;
