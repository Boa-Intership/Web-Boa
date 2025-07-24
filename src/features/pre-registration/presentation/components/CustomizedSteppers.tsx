import { Box, Typography } from '@mui/material';
import { CheckCircle, Person, LocationOn, Inventory2, ReceiptLong, TaskAlt } from '@mui/icons-material';

const steps = [
  { label: 'Datos personales', icon: <Person /> },
  { label: 'Ruta', icon: <LocationOn /> },
  { label: 'Paquete', icon: <Inventory2 /> },
  { label: 'Factura', icon: <ReceiptLong /> },
  { label: 'Resumen', icon: <TaskAlt /> },
];

interface Props {
  activeStep: number;
}

export default function CustomStepper({ activeStep }: Props) {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: '100%', my: 4 }}>
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        return (
          <Box key={step.label} display="flex" alignItems="center" width="100%">
            {/* Icon with circle */}
            <Box
              sx={{
                backgroundColor: isActive || isCompleted ? '#3668AD' : 'transparent',
                border: `2px solid ${isActive || isCompleted ? '#3668AD' : '#cfd8dc'}`,
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

            {/* Label */}
            <Box ml={1} display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="caption"
                color={isActive ? 'primary' : 'textSecondary'}
                sx={{ mt: 1 }}
              >
                {step.label}
              </Typography>
            </Box>

            {/* Line between steps */}
            {index < steps.length - 1 && (
              <Box
                sx={{
                  flex: 1,
                  height: 2,
                  backgroundColor: index < activeStep ? '#1976d2' : '#cfd8dc',
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
