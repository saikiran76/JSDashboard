import { useState, useEffect } from 'react';

const useFetchDocuments = (url) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch(`${url}/api/documents`);
        const data = await response.json();
        console.log("Data of documents: ", data);
        setDocuments(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [url]);

  return { documents, loading, error };
};

export default useFetchDocuments;
