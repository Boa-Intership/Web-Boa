import axios from 'axios';

export const findTrackingCode = async (airWaybill: string) => {
  const token = localStorage.getItem('token');

  const response = await axios.get(`/api/pre-register/tracking/${airWaybill}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
