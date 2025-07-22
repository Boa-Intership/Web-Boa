import { Step, StepLabel, Stepper } from '@mui/material';

const steps = [
  'Datos personales', 'Ruta', 'Carga', 'Factura', 'Resumen'
];

const StepHeader = ({ currentStep }: { currentStep: number }) => {
  return (
    <Stepper alternativeLabel activeStep={1} >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
  );
};

export default StepHeader;