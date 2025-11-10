import React from 'react';
import { Stack, StackProps } from '@mui/material';
const AppStack: React.FC<StackProps> = ({ children, sx, ...rest }) => (
  <Stack sx={{ ...sx }} {...rest} spacing={3} alignItems="stretch">
    {children}
  </Stack>
);

export default AppStack;
