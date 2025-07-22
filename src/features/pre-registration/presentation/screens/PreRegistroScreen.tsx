import React, {useState} from 'react';
import { Container, Step, StepLabel, Stepper } from '@mui/material';
import StepHeader from '../components/StepHeader';
import StepDatosPersonales from '../components/StepDatosPersonales';
import StepRuta from '../components/StepRuta';

export default function PreRegistroScreen() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        datosPersonales: {},
        ruta: {},
        carga: {},
        factura: {},
        resumen: {},
    });

    const handleNext = () => setStep((prev) => prev + 1);
    const handleBack = () => setStep((prev) => prev - 1);

    const steps = [
        <StepDatosPersonales 
            data={formData.datosPersonales} 
            setData={(d) => setFormData({...formData, datosPersonales: d})} 
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
            {steps[step]}
        </Container>
    );
} 