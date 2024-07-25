import { useState, useEffect } from 'react';

const useFetchShipments = (url) => {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await fetch(`${url}/api/shipments`);
        const data = await response.json();
        console.log("Shipmnents data to reduce: ", data)
        setShipments(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchShipments();
  }, [url]);

  return { shipments, loading, error };
};

export default useFetchShipments;
