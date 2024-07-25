import { useState, useEffect } from 'react';
// import { url } from '../utils/constants';

const useFetchBookings = (url) => {
  const [documents, setDocuments] = useState({
    title: "",
    description: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${url}/api/shipments`);
        const data = await response.json();
        setDocuments({
            title,
            description,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [url]);

  return { documents, loading, error };
};

export default useFetchBookings;
