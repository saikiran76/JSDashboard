import { useState, useEffect, useCallback } from 'react';

const useFetchShipments = (url) => {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchShipments = useCallback(async () => {
    try {
      const response = await fetch(`${url}/api/shipments`);
      const data = await response.json();
      setShipments(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchShipments();
  }, [fetchShipments]);

  return { shipments, loading, error };
};


export default useFetchShipments;
