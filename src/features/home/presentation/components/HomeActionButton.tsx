import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { AppTypography } from 'ui';

interface HomeActionButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  description?: string;
}

const HomeActionButton: React.FC<HomeActionButtonProps> = ({
  label,
  onClick,
  icon,
  description,
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: { xs: '70%', md: '25%' },
        minHeight: { xs: 140, sm: 200 },
        borderRadius: 3,
        fontWeight: 'bold',
        textTransform: 'none',
        p: 2,
        boxShadow: 2,
        border: '2px solid #eeeeeeff',
        display: 'flex',
        flexDirection: 'column',
        color: 'primary.dark',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        overflow: 'hidden',
        '&:hover': {
          background: '#E6B445',
          color: '#fff',
          border: '2px solid #E6B445',
        },
        '&:focus, &.Mui-focusVisible': {
          outline: 'none',
          boxShadow: 'none',
        },
      }}
    >
      {icon && <Box sx={{ fontSize: 40 }}>{icon}</Box>}

      <AppTypography variant="h4Bold" textAlign="center">
        {label}
      </AppTypography>

      {description && (
        <AppTypography
          variant="h4Regular"
          align="center"
          sx={{
            textAlign: 'center',
            wordBreak: 'break-word',
          }}
        >
          {description}
        </AppTypography>
      )}
    </Button>
  );
};

export default HomeActionButton;
