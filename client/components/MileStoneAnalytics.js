import React from 'react';
import useFetchShipments from '../hooks/useFetchShipments';


const List = ({ property }) => {
  const url = 'http://localhost:4000';
  const { shipments, loading, error } = useFetchShipments(url);

  const aggregatedData = shipments.reduce((acc, shipment) => {
    const key = shipment[property];
    if (key) {
      acc[key] = (acc[key] || 0) + 1;
    }
    return acc;
  }, {});

  const dataArray = Object.entries(aggregatedData).map(([value, count]) => ({ value, count }));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg w-[32%]">
      <h2 className="font-bold text-lg mb-2">{property.charAt(0).toUpperCase() + property.slice(1)}</h2>
      <div className="overflow-y-auto" style={{ maxHeight: '300px' }}>
        {dataArray.map(({ value, count }, index) => (
          <div key={index} className="flex justify-between border-b py-2 text-sm">
            <span>{value}</span>
            <span>{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;

