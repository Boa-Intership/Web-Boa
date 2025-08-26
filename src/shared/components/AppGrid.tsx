import React from 'react';
import { Grid, GridProps } from '@mui/material';

const AppGrid: React.FC<GridProps> = ({ children, ...rest }) => (
  <Grid item xs={0} md={0} {...rest}>
    {children}
  </Grid>
);

export default AppGrid;
