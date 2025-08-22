import React from 'react';
import { Box, BoxProps } from '@mui/material';

const AppBox: React.FC<BoxProps> = ({ children, sx, ...rest }) => (
  <Box
    sx={{
      p: 2,
      bgcolor: '#f9f9f9',
      borderRadius: 2,
      boxShadow: 0,
      ...sx,
    }}
    {...rest}
  >
    {children}
  </Box>
);

export default AppBox;
