import { useState, useEffect, useCallback } from 'react';

const useFetchLocations = (url, milestone) => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLocations = useCallback(async () => {
    try {
      const response = await fetch(
        `${url}/api/locations${milestone ? `?status=${milestone}` : ''}`
      );
      const data = await response.json();
      if (Array.isArray(data.locations)) {
        setLocations(data.locations);
      } else {
        setLocations(data.map((shipment) => shipment.locations).flat());
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, milestone]);

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  return { locations, loading, error };
};


export default useFetchLocations;
