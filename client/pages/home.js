import Bookings from '../components/Bookings';
import MapComponent from '../components/MapComponent';
import useFetchLocations from '../hooks/useFetchLocations';
import useFetchBookings from '../hooks/useFetchBookings';
import PieChart from '../components/PieChart'; 
import { prepareChartData } from '../components/prepareChartData';
import useFetchShipments from '../hooks/useFetchShipments';
import { MdDashboard } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { useState } from 'react';
import LatestDocuments from '../components/Documents';
import useFetchDocuments from '../hooks/useFetchDocuments';
import Announcements from '../components/Announcements';

function Home() {
  const url = 'http://localhost:4000';
  const { locations, loading: locationsLoading, error: locationsError } =
    useFetchLocations(url);
  const { bookings, loading: bookingsLoading, error: bookingsError } =
    useFetchBookings(url);
  const { shipments, loading: shipmentsLoading, error: shipmentsError } = useFetchShipments(url);
  const { documents, loading: documentsLoading, error: documentsError} = useFetchDocuments(url)
  console.log("passing shipments: ", shipments)
  console.log("passing docs: ", documents)

  const [transportMode, setTransportMode] = useState('Sea');

  const {
    originPortChartData,
    destinationPortChartData,
    carrierChartData,
    consigneeOrShipperChartData,
    milestonesChartData,
  } = prepareChartData(shipments);

  return (
    <div className='flex gap-2'>
      <div className='bg-[#6B120A] rounded-r-[2rem] w-[17%] h-screen'>
        <ul className='list-none text-white m-5 mt-10'>
          <li className='flex gap-2 items-center hover:bg-[#7D2F28] cursor-pointer rounded p-3'><MdDashboard/>Dashboard</li>
          <li className='flex gap-2 items-center hover:bg-[#7D2F28] cursor-pointer rounded p-3'><SiGoogleanalytics/>Analytics</li>
          <li className='flex gap-2 items-center hover:bg-[#7D2F28] cursor-pointer rounded p-3'><SiGoogleanalytics/>Rate Request</li>
        </ul>


      </div>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="flex flex-row p-4 bg-white shadow-md">
          <div className="flex-1 flex items-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <div className="flex items-center">
            <span className="mr-4">Edward William</span>
            <img
              src="/path-to-avatar.jpg"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
        <Bookings bookings={bookings} />
        <div className="flex flex-1 p-4">
          <div className="w-full h-96 bg-white shadow-md rounded-md overflow-hidden">
            <MapComponent setMapObject={() => {}} locations={locations} />
          </div>
        </div>
        <div className="flex flex-row p-4">
          <div className="flex-1 bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl font-bold">Pie Chart Analysis</h2>
            <div className="flex flex-row space-x-4">
              <PieChart data={originPortChartData} title="Origin Port" />
              <PieChart data={destinationPortChartData} title="Destination Port" />
              <PieChart data={carrierChartData} title="Carrier" />
              <PieChart data={consigneeOrShipperChartData} title="Consignee or Shipper" />
              <PieChart data={milestonesChartData} title="Milestones" />
            </div>
          </div>
        </div>
        <div className="flex flex-row p-4 h-[20rem]">
          <div className="flex-1 bg-white shadow-md rounded-md p-4 mr-4">
            <h2 className="text-xl font-bold">Latest Documents</h2>
            <LatestDocuments docs={documents}/>
            
          </div>
          <div className="flex-1 bg-white shadow-md rounded-md p-4">
            <Announcements/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
