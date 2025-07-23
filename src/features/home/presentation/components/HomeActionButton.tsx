import React from 'react';
import { Button, Typography, Box } from '@mui/material';

interface HomeActionButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  description?: string;
}

const HomeActionButton: React.FC<HomeActionButtonProps> = ({ label, onClick, icon, description }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        width: { xs: '100%', sm: 160, md: 180 },
        minHeight: { xs: 140, sm: 170 },
        borderRadius: 3,
        fontWeight: 'bold',
        textTransform: 'none',
        p: 2,
        boxShadow: 2,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          width: '100%',
          flexGrow: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, mt: 1 }}>
          {icon}
        </Box>

        <Typography
          variant="h7"
          component="div"
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
            wordBreak: 'break-word',
            mb: 0.5,
          }}
        >
          {label}
        </Typography>

        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{
              width: '100%',
              textAlign: 'center',
              wordBreak: 'break-word',
              mt: 'auto', // empuja hacia abajo si hay espacio
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </Button>
  );
};

export default HomeActionButton;
