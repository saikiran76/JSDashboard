import { useState, useEffect } from 'react';

const useFetchLocations = (url, milestone) => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        let status;
        const response = await fetch(
          `${url}/api/locations${milestone ? `?status=${milestone}` : ''}`,
        );
        const data = await response.json();
        if (Array.isArray(data.locations)) {
          setLocations(data.locations);
        } else {
          setLocations(data.map((shipment) => shipment.locations).flat());
        }
        // setLocations(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, [url, milestone]);

  return { locations, loading, error };
};

export default useFetchLocations;
