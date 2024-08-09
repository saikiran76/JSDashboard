import { useState, useEffect, useCallback } from 'react';
import { formatDateTime } from '../utils/helper';

const useFetchDocuments = (url) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatAndSortDocuments = (docs) => {
    const formattedDocs = docs.map((doc) => {
      const formattedDate = formatDateTime(doc.created_at);
      const day = new Date(doc.created_at).getDate();
      return {
        ...doc,
        formattedDate,
        day,
      };
    });

    const sortedDocs = formattedDocs.sort((a, b) => a.day - b.day);

    return sortedDocs;
  };


  const fetchDocuments = useCallback(async () => {
    try {
      const response = await fetch(`${url}/api/documents`);
      const data = await response.json();
      console.log("The feteched: ", data)
      const sortedData = formatAndSortDocuments(data);
      setDocuments(sortedData);
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
