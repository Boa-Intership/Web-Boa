import { useState, useEffect } from 'react';
import { RegisterSchema } from '../domain/validators';

const TEMP_REGISTRATION_KEY = 'temp_registration_data';
const TEMP_EMAIL_VERIFICATION_KEY = 'email_verification_pending';

export interface TempRegistrationData extends RegisterSchema {
  timestamp: number;
  verificationEmailSent: boolean;
}

export const useTempRegistration = () => {
  const [tempData, setTempData] = useState<TempRegistrationData | null>(null);

  // Cargar datos del sessionStorage al inicializar
  useEffect(() => {
    const stored = sessionStorage.getItem(TEMP_REGISTRATION_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as TempRegistrationData;
        // Verificar que los datos no sean muy antiguos (24 horas)
        const isExpired = Date.now() - parsed.timestamp > 24 * 60 * 60 * 1000;
        if (!isExpired) {
          setTempData(parsed);
        } else {
          clearTempData();
        }
      } catch (error) {
        console.error('Error parsing temp registration data:', error);
        clearTempData();
      }
    }
  }, []);

  // Guardar datos temporales
  const saveTempData = (data: RegisterSchema) => {
    const tempData: TempRegistrationData = {
      ...data,
      timestamp: Date.now(),
      verificationEmailSent: true,
    };

    sessionStorage.setItem(TEMP_REGISTRATION_KEY, JSON.stringify(tempData));
    sessionStorage.setItem(TEMP_EMAIL_VERIFICATION_KEY, 'true');
    setTempData(tempData);
  };

  // Limpiar datos temporales
  const clearTempData = () => {
    sessionStorage.removeItem(TEMP_REGISTRATION_KEY);
    sessionStorage.removeItem(TEMP_EMAIL_VERIFICATION_KEY);
    setTempData(null);
  };

  // Verificar si hay verificación pendiente
  const isEmailVerificationPending = () => {
    return sessionStorage.getItem(TEMP_EMAIL_VERIFICATION_KEY) === 'true';
  };

  // Marcar email como verificado
  const markEmailAsVerified = () => {
    sessionStorage.removeItem(TEMP_EMAIL_VERIFICATION_KEY);
  };

  // Obtener datos para registro final
  const getTempDataForRegistration = (): RegisterSchema | null => {
    if (!tempData) return null;

    const {
      timestamp: _timestamp,
      verificationEmailSent: _verificationEmailSent,
      ...registrationData
    } = tempData;
    return registrationData;
  };

  return {
    tempData,
    saveTempData,
    clearTempData,
    isEmailVerificationPending,
    markEmailAsVerified,
    getTempDataForRegistration,
  };
};

// Hook para simular envío de email
export const useEmailVerification = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendVerificationEmail = async (email: string): Promise<boolean> => {
    setIsLoading(true);

    try {
      // Simular llamada a API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log(`📧 Código de verificación enviado a: ${email}`);
      console.log('💡 Código de prueba: 12345');

      return true;
    } catch (error) {
      console.error('Error sending verification email:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyCode = async (code: string): Promise<boolean> => {
    setIsLoading(true);

    try {
      // Simular verificación
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Por ahora, cualquier código de 5 dígitos es válido
      // En producción, aquí verificarías con tu backend
      return code.length === 5 && /^\d+$/.test(code);
    } catch (error) {
      console.error('Error verifying code:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    sendVerificationEmail,
    verifyCode,
  };
};
