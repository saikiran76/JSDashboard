import { RiShipFill } from 'react-icons/ri';
import { CiPlane } from 'react-icons/ci';
import { MdOutlineFireTruck } from 'react-icons/md';
import { useState, useEffect } from 'react';
import MilestonesChart from '../components/MileStone';
import DelayChart from '../components/DelayChart';
import List from '../components/MileStoneAnalytics';
import ShipmentsTable from '../components/ShipmentsTable';
import useFetchShipments from '../hooks/useFetchShipments';
import { Loader } from '../components/Loader';

const Analytics = () => {
  const [sizeType, setSizeType] = useState('');
  const [dateProperty, setDateProperty] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const url = 'https://jsdashboard.onrender.com';
  const { shipments, loading, error } = useFetchShipments(url);

  const handleFilter = () => {
    let filtered = shipments;

    if (sizeType) {
      filtered = filtered.filter((shipment) => shipment.size_type === sizeType);
    }

    setFilteredData(filtered);
  };

  const handleCancel = () => {
    setSizeType('');
    setDateProperty('');
    setPeriod('');
    setFilteredData(shipments);
  };

  useEffect(() => {
    setFilteredData(shipments);
  }, [shipments]);

  if (loading) {
    return <Loader />;
  }

  const properties = ['loading', 'discharge', 'delivery', 'shipper', 'consignee', 'carrier'];

  return (
    <div className="w-full bg-gray-100">
      <div className="mt-4 flex flex-col justify-center gap-8 text-sm text-gray-500 md:flex-row">
        <div className="flex cursor-pointer items-center gap-2 border-red-600 pb-2 duration-200 hover:border-b-2 hover:text-red-600">
          <RiShipFill />
          <p>Sea</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2 border-red-600 pb-2 duration-200 hover:border-b-2 hover:text-red-600">
          <CiPlane />
          <p>Air</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2 border-red-600 pb-2 duration-200 hover:border-b-2 hover:text-red-600">
          <MdOutlineFireTruck />
          <p>Land</p>
        </div>
      </div>

      <div className="mx-auto mt-4 flex w-fit flex-col justify-center gap-4 rounded-md bg-white p-2 text-sm shadow-md md:flex-row">
        <p className="cursor-pointer rounded-md p-2 hover:bg-[#E7E0E0] hover:text-[#856562]">
          Shipments
        </p>
        <p className="cursor-pointer rounded-md p-2 hover:bg-[#E7E0E0] hover:text-[#856562]">
          Containers
        </p>
      </div>

      <div className="m-3 flex flex-wrap items-center gap-3 bg-white p-3 text-[0.880rem] shadow-md md:flex-row">
        <div className="ml-3 flex items-center gap-3 font-bold">
          <p>Size Type</p>
          <select
            value={sizeType}
            onChange={(e) => setSizeType(e.target.value)}
            className="w-[10rem] rounded-[1.25rem] border-[1px] border-gray-300 bg-white p-[0.6rem] text-sm font-semibold"
          >
            <option value="">Select</option>
            <option value="40HC">40HC</option>
            <option value="20GP">20GP</option>
          </select>
        </div>

        <div className="ml-5 flex items-center gap-3 font-bold">
          <p>Date Property</p>
          <select
            value={dateProperty}
            onChange={(e) => setDateProperty(e.target.value)}
            className="w-[10rem] rounded-[1.25rem] border-[1px] border-gray-300 bg-white p-[0.6rem] text-sm font-semibold"
          >
            <option value="">Select</option>
            <option value="recipt">Recipt</option>
            <option value="loading">Loading</option>
            <option value="discharge">Discharge</option>
            <option value="delivery">Delivery</option>
            <option value="booking">Booking</option>
          </select>
        </div>

        <div className="ml-5 flex items-center gap-3 font-bold">
          <p>Period</p>
        </div>

        <div className="ml-4 flex gap-3">
          <button
            onClick={handleCancel}
            className="rounded-[2rem] border-[1.5px] border-red-900 p-2 pl-5 pr-5 text-sm font-semibold text-red-900 hover:scale-105"
          >
            Cancel
          </button>
          <button
            onClick={handleFilter}
            className="rounded-[2rem] bg-red-900 p-2 pl-5 pr-5 text-sm font-semibold text-white hover:scale-105"
          >
            Go
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative ml-3 w-full rounded-lg bg-white p-3 shadow-md md:w-[50%]">
          <div className="absolute right-4 top-6 rounded-md border-[1.5px] border-gray-200 p-2 pl-4 pr-4 text-sm text-gray-500">
            IN-TRANSIT (463)
          </div>
          <MilestonesChart />
        </div>

        <div className="relative ml-3 w-full rounded-lg bg-white p-3 shadow-md md:w-[46%]">
          <DelayChart />
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-4 bg-gray-100 p-4 shadow-md">
        {properties.map((property) => (
          <List key={property} property={property} />
        ))}
      </div>

      <div className="min-h-screen bg-gray-100 p-8">
        <ShipmentsTable data={filteredData} />
      </div>
    </div>
  );
};

export default Analytics;
