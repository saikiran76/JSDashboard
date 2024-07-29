import { RiShipFill } from "react-icons/ri";
import { CiPlane } from "react-icons/ci";
import { MdOutlineFireTruck } from "react-icons/md";
import { useState, useEffect } from "react";
import MilestonesChart from "../components/MileStone";
import DelayChart from "../components/DelayChart";
import List from "../components/MileStoneAnalytics";
import ShipmentsTable from "../components/ShipmentsTable";
import useFetchShipments from "../hooks/useFetchShipments";


const Analytics = () => {
    const [sizeType, setSizeType] = useState('');
    const [dateProperty, setDateProperty] = useState('');
    // const [period, setPeriod] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const url = "http://localhost:4000";
    const { shipments, loading, error } = useFetchShipments(url);
  
    const handleFilter = () => {
      let filtered = shipments;
  
      if (sizeType) {
        filtered = filtered.filter(shipment => shipment.size_type === sizeType);
      }
  
      // if (dateProperty) {
      //   filtered = filtered.filter(shipment => new Date(shipment[`${dateProperty}_date`]) >= new Date(period));
      // }
  
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
  
    const properties = ['loading', 'discharge', 'delivery', 'shipper', 'consignee', 'carrier'];
  
    return (
      <div className="bg-gray-100 w-full">
        <div className="flex gap-8 justify-center mt-4 text-gray-500 text-sm ">
          <div className="flex gap-2 items-center cursor-pointer pb-2 border-red-600 hover:text-red-600 hover:border-b-2 duration-200"><RiShipFill /><p>Sea</p></div>
          <div className="flex gap-2 items-center cursor-pointer pb-2 border-red-600 hover:text-red-600 hover:border-b-2 duration-200"><CiPlane /><p>Air</p></div>
          <div className="flex gap-2 items-center cursor-pointer pb-2 border-red-600 hover:text-red-600 hover:border-b-2 duration-200"><MdOutlineFireTruck /><p>Land</p></div>
        </div>
  
        <div className="bg-white shadow-md p-2 flex gap-4 justify-center text-sm w-fit mx-auto mt-4 rounded-md">
          <p className="rounded-md p-2 hover:text-[#856562] hover:bg-[#E7E0E0] cursor-pointer">Shipments</p>
          <p className="rounded-md p-2 hover:text-[#856562] hover:bg-[#E7E0E0] cursor-pointer">Containers</p>
        </div>
  
        <div className="bg-white shadow-md p-3 flex gap-3 items-center m-3 text-[0.880rem]">
          <div className="flex gap-3 items-center font-bold ml-3">
            <p>Size Type</p>
            <select
              value={sizeType}
              onChange={(e) => setSizeType(e.target.value)}
              className="p-[0.6rem] border-gray-300 border-[1px] text-sm rounded-[1.25rem] bg-white w-[10rem] font-semibold"
            >
              <option value="">Select</option>
              <option value="40HC">40HC</option>
              <option value="20GP">20GP</option>
            </select>
          </div>
  
          <div className="flex gap-3 items-center font-bold ml-5">
            <p>Date Property</p>
            <select
              value={dateProperty}
              onChange={(e) => setDateProperty(e.target.value)}
              className="p-[0.6rem] border-gray-300 border-[1px] text-sm rounded-[1.25rem] bg-white w-[10rem] font-semibold"
            >
              <option value="">Select</option>
              <option value="recipt">Recipt</option>
              <option value="loading">Loading</option>
              <option value="discharge">Discharge</option>
              <option value="delivery">Delivery</option>
              <option value="booking">Booking</option>
            </select>
          </div>
  
          <div className="flex gap-3 items-center font-bold ml-5">
            <p>Period</p>
            {/* <input
              type="date"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="p-[0.6rem] border-gray-300 border-[1px] text-sm rounded-[1.25rem] bg-white w-[10rem] font-semibold"
            /> */}
          </div>
  
          <div className="flex gap-3 ml-4">
            <button onClick={handleCancel} className="p-2 pr-5 pl-5 text-sm rounded-[2rem] border-red-900 border-[1.5px] text-red-900 hover:scale-105 font-semibold">Cancel</button>
            <button onClick={handleFilter} className="p-2 pr-5 pl-5 text-sm rounded-[2rem] bg-red-900 text-white font-semibold hover:scale-105">Go</button>
          </div>
        </div>
  
        <div className="flex gap-4">
          <div className="bg-white shadow-md rounded-lg w-[50%] p-3 ml-3 relative">
            <div className="p-2 pr-4 pl-4 rounded-md border-gray-200 text-gray-500 border-[1.5px] absolute right-4 top-6 text-sm">IN-TRANSIT (463)</div>
            <MilestonesChart />
          </div>
  
          <div className="bg-white shadow-md rounded-lg w-[46%] p-3 ml-3 relative">
            <DelayChart />
          </div>
        </div>
  
        <div className="flex flex-wrap shadow-md items-start gap-4 bg-gray-100 p-4">
          {properties.map(property => (
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