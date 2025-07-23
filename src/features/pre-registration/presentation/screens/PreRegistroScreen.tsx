import React, {useState} from 'react';
import { Container, Box, Step, StepLabel, Stepper } from '@mui/material';
import StepHeader from '../components/StepHeader';
import StepDatosPersonales from '../components/StepDatosPersonales';
import StepRuta from '../components/StepRuta';

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
            data={{ remitente: formData.remitente, destinatario: formData.destinatario }}
            setData={(d) => setFormData({ ...formData, remitente: d.remitente, destinatario: d.destinatario })}
            onNext={handleNext}
        />,
        <StepRuta 
            data={formData.ruta} 
            setData={(d) => setFormData({...formData, ruta: d})} 
            onNext={handleNext} onBack={handleBack} 
        />,
        // ... los otros steps
    ];

    return (
        <Container>
            <StepHeader currentStep={step} />
            <Box m={4} />
            {steps[step]}
        </Container>
    );
} 