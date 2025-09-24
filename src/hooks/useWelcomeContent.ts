import { useState, useEffect } from 'react';

interface WelcomeData {
  id: number;
  title: string;
  title2: string;
  title3: string;
  description: string;
  button_text: string;
}

export const useWelcomeContent = () => {
  const [data, setData] = useState<WelcomeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/bienvenidas');
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const result = await response.json();
        if (result.data && result.data.length > 0) {
          setData(result.data[0]); // Tomamos el primer elemento
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
