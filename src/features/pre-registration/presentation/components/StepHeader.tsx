import { Box, Typography } from '@mui/material';
import {
  Person,
  LocationOn,
  Inventory2,
  ReceiptLong,
  TaskAlt,
} from '@mui/icons-material';

const steps = [
  { label: 'Datos personales', icon: <Person /> },
  { label: 'Ruta', icon: <LocationOn /> },
  { label: 'Carga', icon: <Inventory2 /> },
  { label: 'Factura', icon: <ReceiptLong /> },
  { label: 'Resúmen', icon: <TaskAlt /> },
];

interface Props {
  activeStep: number;
}

const StepHeader = ({ activeStep }: Props) => {
  return (
    <Box display="flex" alignItems="center" sx={{ width: '100%', my: 4 }}>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;
        const color = isActive || isCompleted ? '#3668AD' : '#cfd8dc';

        return (
          <Box
            key={step.label}
            display="flex"
            alignItems="center"
            flex={1}
          >
            {/* Paso */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{ minWidth: 60 }}
            >
              <Box
                sx={{
                  border: `2px solid ${color}`,
                  backgroundColor: isActive || isCompleted ? color : 'transparent',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive || isCompleted ? '#fff' : '#cfd8dc',
                }}
              >
                {step.icon}
              </Box>
              <Typography
                variant="caption"
                align="center"
                sx={{
                  mt: 1,
                  lineHeight: 1.2,
                  height: 28, // -> alinear iconos
                  color: isActive ? '#3668AD' : 'text.secondary',
                }}
              >
                {step.label}
              </Typography>
            </Box>

            {/* Línea entre pasos */}
            {index < steps.length - 1 && (
              <Box
                sx={{
                  height: 2,
                  backgroundColor: index < activeStep ? '#3668AD' : '#cfd8dc',
                  flex: 1,
                  mx: 1,
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}

export default StepHeader;