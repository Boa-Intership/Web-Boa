import React from "react";
import { Modal, Fade, Backdrop, Box, Typography, Grid } from "@mui/material";
import ModalDetailItem from "./ModalDetailItem";
import CardSimple from "./CardSimple";
import ExampleType from "./ExampleType";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 900,
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "#ffffff",
  transition: "opacity 1s ease-in-out, transform 0.5s ease-in-out",
  boxShadow: 24,
  p: 6,
  borderRadius: 4,
};

interface Detail {
  title: string;
  description: string[];
  imageUrl?: string[];
}

type Card = {
  title?: string;
  description: string;
  imageUrl?: string;
  background?: string;

}

type Example = {
  title: string;
  description: string;
  image: string;
}

interface TransitionsModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  concept: Card[];
  subtitle: string;
  details: Detail[];
  example?: Example[];
}

const TransitionsModal: React.FC<TransitionsModalProps> = ({
  open,
  onClose,
  title,
  concept,
  subtitle,
  details,
  example,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 800 } }}
    >
      <Fade in={open} timeout={800}>
        <Box sx={style}>
          <Typography id="modal-title" variant="h4" fontWeight="bold" color={'#002f5bff'} mb={2}>
            {title}
          </Typography>

          {concept.map((item, index) => (
            <CardSimple
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              background={item.background}
            />
          ))}

          <Typography variant="h6" fontWeight="bold" color={'#002f5bff'} mt={2}>
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
          {example && example.length > 0 && (
            <Box>
              <Typography variant="subtitle1" fontWeight={"bold"} mt={2} color={'#002f5bff'}>
                ¿Que cargas pueden entrar a esta categoria?
              </Typography>
              <Typography variant="body2">
                Ejemplos comunes de {title} en BoA Cargo:
              </Typography>
              <Grid container spacing={2} mt={2}>
                {example.map((item, index) => (
                  <Grid item key={index} xs={12} sm={6} md={3} >
                    <ExampleType
                      title={item.title}
                      description={item.description}
                      image={item.image}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default TransitionsModal;