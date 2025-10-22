import React, { useEffect, useRef, useState } from 'react';
import { Box, Paper, TextField, Link } from '@mui/material';
import { AppTypography } from 'ui';
import { MuiPhone } from '@/shared/components/PhoneInput';

interface DataCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  field: string;
  onValueChange: (field: string, value: string) => void;
  multiline?: boolean;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  variant?: 'standard' | 'outlined';
  backgroundColor?: string;
  editable?: boolean;
  resetEditingState?: boolean; // ✅ Nueva prop para resetear estado
}

const DataCard: React.FC<DataCardProps> = ({
  icon,
  label,
  value,
  field,
  onValueChange,
  multiline = false,
  type = 'text',
  placeholder,
  variant = 'standard',
  backgroundColor,
  editable = true,
  resetEditingState = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [originalValue, setOriginalValue] = useState(value);

  const inputRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      // Usar setTimeout para asegurar que el DOM se haya actualizado
      const timer = setTimeout(() => {
        if (type === 'tel' && phoneRef.current) {
          phoneRef.current.focus();
        } else if (inputRef.current) {
          // Para TextField normal
          inputRef.current.focus();
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isEditing, type]);

  React.useEffect(() => {
    if (resetEditingState && isEditing) {
      setIsEditing(false);
      setOriginalValue(value); // Actualizar valor original también
    }
  }, [resetEditingState, isEditing, value]);

  const handleToggleEdit = () => {
    if (isEditing) {
      // Cancelar - restaurar valor original
      onValueChange(field, originalValue);
    } else {
      // Iniciar edición - guardar valor actual
      setOriginalValue(value);
    }
    setIsEditing(!isEditing);
  };

  const handleValueChange = (newValue: string) => {
    onValueChange(field, newValue);
  };

  return (
    <Paper
      sx={{
        p: 2,
        boxShadow: 0,
        width: '100%',
        backgroundColor: backgroundColor || 'background.paper',
        border: variant === 'outlined' && isEditing ? '1px solid' : 'none',
        borderColor: 'grey.300',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={2}>
        {/* Icono */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ mt: variant === 'standard' ? 0 : isEditing ? 2 : 0.5 }}
        >
          {icon}
        </Box>

        {/* Contenido */}
        <Box sx={{ flex: 1, mt: variant === 'standard' ? 0.5 : 0 }}>
          <AppTypography
            variant="caption"
            color="text.secondary"
            sx={{
              fontWeight: variant === 'standard' ? 'bold' : 'normal',
              mb: variant === 'standard' ? 0 : 1,
              display: 'block',
            }}
          >
            {label}
          </AppTypography>

          {isEditing ? (
            type === 'tel' ? (
              <MuiPhone
                inputRef={phoneRef}
                value={value}
                onChange={(phone) => handleValueChange(phone || '')}
                label=""
                placeholder={placeholder || 'Número de teléfono'}
                error={false}
                helperText=""
                fullWidth
                required={false}
                variant="standard"
              />
            ) : (
              <TextField
                inputRef={inputRef}
                fullWidth
                variant={variant}
                size="small"
                value={value}
                onChange={(e) => handleValueChange(e.target.value)}
                type={type}
                multiline={multiline}
                rows={multiline ? 2 : 1}
                placeholder={placeholder}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 1,
                  },
                  color: 'secondary.main',
                }}
              />
            )
          ) : (
            <AppTypography
              variant="body1"
              color={variant === 'standard' ? 'primary.dark' : 'text.primary'}
              fontWeight={500}
              sx={{
                wordBreak: multiline ? 'break-word' : 'normal',
                lineHeight: multiline ? 1.4 : 'normal',
              }}
            >
              {value || placeholder || 'No registrado'}
            </AppTypography>
          )}
        </Box>

        {/* Botón Editar/Cancelar */}
        {editable && (
          <Link
            color="primary.light"
            component="button"
            fontWeight="bold"
            onClick={handleToggleEdit}
            sx={{
              fontSize: '0.8rem',
              textDecoration: 'none',
              outline: 'none',
              ':hover': { color: 'primary.main' },
              ':focus': { outline: 'none' },
              alignSelf: 'center',
              mt: variant === 'standard' ? 0 : isEditing ? 2 : 0.5,
            }}
          >
            {isEditing ? 'Cancelar' : 'Editar'}
          </Link>
        )}
      </Box>
    </Paper>
  );
};

export default DataCard;
