import React from 'react'
import { Button } from '@mui/material';

interface Props {
 color?: string;
 children: React.ReactNode;
 onClick: () => void;
}

const RoundButton = ({ color = "#f6a40e", children, onClick }: Props) => {
 return (
    <Button
      onClick={onClick} // <-- añadimos el onClick aquí
      sx={{
        textTransform: "none",
        borderRadius: "20px",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: color,
        background: "none",
        color: color,
        fontWeight: "bold",
        px: 3,
        "&:hover": {
          backgroundColor: color,
          color: "#fff",
          borderColor: color,
        },
        "&:focus, &.Mui-focusVisible": {
          outline: "none",
          boxShadow: "none",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default RoundButton
