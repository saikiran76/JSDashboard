import { useState, useEffect } from 'react';
// import { url } from '../utils/constants';

const useFetchBookings = (url) => {
  const [bookings, setBookings] = useState({
    total: 0,
    utilized: 0,
    cancelled: 0,
    utilization: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${url}/api/shipments`);
        const data = await response.json();
        const total = data.length;
        const utilized = data.filter((item) => item.booking_status === 'BOOKED').length;
        const cancelled = data.filter((item) => item.booking_status === 'CANCELLED').length;
        const utilization = total > 0 ? (utilized / total) * 100 : 0;

        setBookings({
          total,
          utilized,
          cancelled,
          utilization,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [url]);

  return { bookings, loading, error };
};

export default useFetchBookings;
