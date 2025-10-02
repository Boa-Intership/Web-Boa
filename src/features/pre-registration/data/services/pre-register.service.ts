import axios from 'axios';

const token = localStorage.getItem('token'); // o usar un método AuthUser()

export const registrarPreRegistro = async (payload: any) => {
  const response = await axios.post('api/pre-register', payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const downloadPreRegisterPDF = async (codePR: string) => {
  const token = localStorage.getItem('token');

  const response = await axios.get(`api/pre-register/pdf/${codePR}`, {
    responseType: 'blob', // Para que Axios devuelva un archivo binario
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // Crear URL para descargar el archivo
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `comprobante-${codePR}.pdf`);
  document.body.appendChild(link);
  link.click();
  link.remove();
};
