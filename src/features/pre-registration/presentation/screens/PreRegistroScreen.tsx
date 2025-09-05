import { useState } from 'react';
import { Box } from '@mui/material';
import StepHeader from '../components/StepHeader';
import StepDatosPersonales from '../components/StepDatosPersonales';
import StepRuta from '../components/StepRuta';
import StepCarga from '../components/StepCarga';
import StepFactura from '../components/StepFactura';
import StepResumen from '../components/StepResumen';
import AppContainer from '../../../../shared/components/AppContainer';

export default function PreRegistroScreen() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    remitente: {},
    destinatario: {},
    ruta: {},
    carga: {},
    factura: {},
    resumen: {},
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const steps = [
    <StepDatosPersonales
      key="datos"
      data={{ remitente: formData.remitente, destinatario: formData.destinatario }}
      setData={(d) =>
        setFormData({ ...formData, remitente: d.remitente, destinatario: d.destinatario })
      }
      onNext={handleNext}
    />,
    <StepRuta
      key="ruta"
      data={formData.ruta}
      setData={(d) => setFormData({ ...formData, ruta: d })}
      onNext={handleNext}
      onBack={handleBack}
    />,
    <StepCarga
      key="carga"
      data={formData.carga}
      setData={(d) => setFormData({ ...formData, carga: d })}
      onNext={handleNext}
      onBack={handleBack}
    />,
    <StepFactura
      key="factura"
      data={formData.factura}
      setData={(d) => setFormData({ ...formData, factura: d })}
      onNext={handleNext}
      onBack={handleBack}
      carga={formData.carga}
      ruta={formData.ruta}
    />,
    <StepResumen key="resumen" formData={formData} onBack={handleBack} />,
  ];

  return (
    <AppContainer>
      <StepHeader activeStep={step} />
      <Box m={4} />
      {steps[step]}
    </AppContainer>
  );
}
