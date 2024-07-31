import { useState, useEffect, useCallback } from 'react';

const useFetchDocuments = (url) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDocuments = useCallback(async () => {
    try {
      const response = await fetch(`${url}/api/documents`);
      const data = await response.json();
      setDocuments(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  return { documents, loading, error };
};

export default useFetchDocuments;
