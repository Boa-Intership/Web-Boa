import axios from 'axios';

export const calcularCostoPaquetes = async (
  originID: number,
  destinationID: number,
  cargoTypeID: number,
  packages: any[]
) => {
  const token = localStorage.getItem('token'); // 👈 o donde lo tengas guardado

  const response = await axios.post(
    `http://localhost:5173/api/package/cost/${originID}/${destinationID}/${cargoTypeID}`,
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
