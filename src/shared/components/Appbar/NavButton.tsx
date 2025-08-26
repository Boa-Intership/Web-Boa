import React from "react";
import { Button } from "@mui/material";

type Props = {
  label: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  active?: boolean;
};

const NavButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ label, onClick, onMouseEnter, onMouseLeave, active }, ref) => (
    <Button
      ref={ref}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{ textTransform: "none", fontWeight: active ? 700 : 600 }}
    >
      {label}
    </Button>
  )
);
NavButton.displayName = "NavButton";
export default NavButton;
