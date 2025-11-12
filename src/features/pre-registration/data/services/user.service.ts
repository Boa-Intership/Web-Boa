import axios from 'axios';

export const getUserProfile = async (token: string) => {
  const response = await axios.get('/api/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
