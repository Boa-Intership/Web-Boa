import React from 'react';
import { Box, Tooltip, IconButton, Zoom } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const PHONE_NUMBER = '+59176936077';
const WHATSAPP_NUMBER = '59176936077';
const SCHEDULE = 'Lunes a Viernes 8:00-18:00';

const QuickContactButtons: React.FC = () => (
  <Box
    sx={{
      position: 'fixed',
      bottom: { xs: 24, md: 32 },
      right: { xs: 24, md: 32 },
      zIndex: 1300,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    }}
  >
    <Tooltip title={`Llamada (${SCHEDULE})`} placement="left" arrow TransitionComponent={Zoom}>
      <IconButton
        size="large"
        sx={{
          bgcolor: 'primary.main',
          color: 'white !important',
          minHeight: { xs: 15, md: 40 },
          borderRadius: 7,
          outline: 'none',
          boxShadow: '0 4px 16px rgba(46,92,154,0.15)',
          transition: 'box-shadow 0.2s, transform 0.2s',
          '&:hover': {
            bgcolor: 'primary.dark',
            boxShadow: '0 8px 24px rgba(46,92,154,0.25)',
            transform: 'translateY(-2px) scale(1.04)',
            color: 'white !important',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: '0 4px 16px rgba(46,92,154,0.15)',
            color: 'white !important',
          },
        }}
        href={`tel:${PHONE_NUMBER}`}
      >
        <CallIcon fontSize="inherit" />
      </IconButton>
    </Tooltip>
    <Tooltip title={`WhatsApp (${SCHEDULE})`} placement="left" arrow TransitionComponent={Zoom}>
      <IconButton
        size="large"
        sx={{
          bgcolor: 'success.main',
          color: 'white !important',
          minHeight: { xs: 15, md: 40 },
          borderRadius: 7,
          outline: 'none',
          boxShadow: '0 4px 16px rgba(46,92,154,0.15)',
          transition: 'box-shadow 0.2s, transform 0.2s',
          '&:hover': {
            bgcolor: 'success.dark',
            boxShadow: '0 8px 24px rgba(46,92,154,0.25)',
            transform: 'translateY(-2px) scale(1.04)',
            color: 'white !important',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: '0 4px 16px rgba(46,92,154,0.15)',
            color: 'white !important',
          },
        }}
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon fontSize="inherit" />
      </IconButton>
    </Tooltip>
  </Box>
);

export default QuickContactButtons;
