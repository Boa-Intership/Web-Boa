
import { Box, Typography } from "@mui/material";
import React from "react";

interface DetailSectionProps {
  title: string;
  description: string[] | string;
  images?: string[];
  isList?: boolean;
  imagePosition?: "left" | "right";
}

const DetailSection: React.FC<DetailSectionProps> = ({
  title,
  description,
  images = [],
  isList = false,
  imagePosition = "right",
}) => {

    {/*Esta funcion solo devuelve como se va a mostrar el texto */}
  const renderDescription = () => {
    if (isList && Array.isArray(description)) {
      return (
        <ul style={{ marginTop: 4 }}>
          {description.map((text, index) => (
            <li key={index} style={{ marginBottom: 4 }}>
              {text}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <Typography variant="body1" mt={1}>
        {typeof description === "string" ? description : description.join(" ")}
      </Typography>
    );
  };


   {/*Esta funcion solo devuelve como se acomodara las imagenes */}
  const renderImages = () => (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      flexShrink={0}
      alignItems={imagePosition === "left" ? "flex-start" : "flex-end"}
    >
      {images.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Detalle ${index + 1}`}
          style={{ width: 200, borderRadius: 6 }}
        />
      ))}
    </Box>
  );

  {/*se crea ya la estructura del componente */}
  return (
    <Box
      display="flex"
      flexDirection={imagePosition === "left" ? "row-reverse" : "row"}
      gap={2}
      mb={4}
      alignItems="center"
      flexWrap="wrap"
      
    >
      <Box flex={1}>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          {title}
        </Typography>
        {renderDescription()}
      </Box>
      {images.length > 0 && renderImages()}
    </Box>
  );
};

export default DetailSection;
