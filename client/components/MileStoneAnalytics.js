import React from 'react';
import useFetchShipments from '../hooks/useFetchShipments';

const List = ({ property }) => {
  const url = 'https://jsdashboard.onrender.com';
  const { shipments,  error } = useFetchShipments(url);

  const aggregatedData = shipments.reduce((acc, shipment) => {
    const key = shipment[property];
    if (key) {
      acc[key] = (acc[key] || 0) + 1;
    }
    return acc;
  }, {});

  const dataArray = Object.entries(aggregatedData).map(([value, count]) => ({ value, count }));

  if (error) {
    return <div className='text-red-600 text-center'>Error loading data: {error}</div>;
  }

  return (
    <div className="md:w-[32%] w-full rounded-lg bg-white p-4 shadow-lg">
      <h2 className="mb-2 text-lg font-bold">
        {property.charAt(0).toUpperCase() + property.slice(1)}
      </h2>
      <div className="overflow-y-auto" style={{ maxHeight: '300px' }}>
        {dataArray.map(({ value, count }, index) => (
          <div key={index} className="flex justify-between border-b p-2 text-[0.6rem]">
            <span>{value}</span>
            <span>{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
