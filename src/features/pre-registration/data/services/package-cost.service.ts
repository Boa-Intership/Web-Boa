import axios from 'axios';

export const calcularCostoPaquetes = async (
  originID: number,
  destinationID: number,
  cargoTypeID: number,
  packages: any[]
) => {
  const token = localStorage.getItem('token');

  const response = await axios.post(
    `api/package/cost/${originID}/${destinationID}/${cargoTypeID}`,
    { packages },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data; // { validPackages, estimatedCost, packageWeight }
};
