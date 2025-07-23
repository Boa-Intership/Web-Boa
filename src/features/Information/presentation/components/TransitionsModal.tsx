// components/TransitionsModal.tsx
import React from "react";
import { Modal, Fade, Backdrop, Box, Typography } from "@mui/material";
import ModalDetailItem from "./ModalDetailItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 900,
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

interface Detail {
  title: string;
  description: string[];
  imageUrl?: string;
}

interface TransitionsModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  details: Detail[];
}

const TransitionsModal: React.FC<TransitionsModalProps> = ({
  open,
  onClose,
  title,
  subtitle,
  details,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="modal-title" variant="h5" fontWeight="bold" mb={1}>
            {title}
          </Typography>
          <Typography variant="h6" fontWeight="bold" mb={3}>
            {subtitle}
          </Typography>

          {details.map((item, index) => (
            <ModalDetailItem
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </Box>
      </Fade>
    </Modal>
  );
};

export default TransitionsModal;
