
import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function AppBar() {
    return (
    <>
      <MuiAppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div">
            Inicio
          </Typography>
        </Toolbar>
      </MuiAppBar>
      <Toolbar />
      </>
    );
  }