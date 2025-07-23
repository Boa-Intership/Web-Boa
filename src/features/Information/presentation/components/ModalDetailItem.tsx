
import { Box, Typography } from "@mui/material";
import React from "react";

interface ModalDetailItemProps {
  title: string;
  description: string[];
  imageUrl?: string;
}

const ModalDetailItem: React.FC<ModalDetailItemProps> = ({ title, description, imageUrl }) => {
  return (
    <Box display="flex" gap={2} mb={3} alignItems={"center"} flexWrap="wrap">
      <Box flex={imageUrl ? 1 : "100%"}>
        <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
        <ul style={{ marginTop: 4 }}>
          {description.map((text, index) => (
            <li key={index} style={{ marginBottom: 4 }}>
              {text}
            </li>
          ))}
        </ul>
      </Box>
      <Box flexShrink={0}>
        <img src={imageUrl} style={{ width: 250, borderRadius: 4 }} />
      </Box>
    </Box>
  );
};

export default ModalDetailItem;
