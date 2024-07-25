import { useState, useEffect } from 'react';

const useFetchLocations = (url) => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(`${url}/api/locations`);
        const data = await response.json();
        setLocations(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, [url]);

  return { locations, loading, error };
};

export default useFetchLocations;
