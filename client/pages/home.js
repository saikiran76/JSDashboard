import Bookings from '../components/Bookings';
import MapComponent from '../components/MapComponent';
import useFetchLocations from '../hooks/useFetchLocations';
import useFetchBookings from '../hooks/useFetchBookings';
import PieChart from '../components/PieChart'; 
import { prepareChartData } from '../components/prepareChartData';
import useFetchShipments from '../hooks/useFetchShipments';
import { useState } from 'react';
import LatestDocuments from '../components/Documents';
import useFetchDocuments from '../hooks/useFetchDocuments';
import Announcements from '../components/Announcements';
import Toggler from '../components/Toggler';
import { useSelector } from 'react-redux';

function Home() {
  const url = 'https://jsdashboard.onrender.com';
  const { locations, loading: locationsLoading, error: locationsError } =
    useFetchLocations(url);
  const { bookings, loading: bookingsLoading, error: bookingsError } =
    useFetchBookings(url);
  const { shipments, loading: shipmentsLoading, error: shipmentsError } = useFetchShipments(url);
  const { documents, loading: documentsLoading, error: documentsError} = useFetchDocuments(url)
  const toggling = useSelector((state) => state.toggle.toggler)
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
      <div className="flex flex-col h-screen bg-gray-100">
        <Bookings bookings={bookings} />
        <div className="flex flex-1 p-4">
          <div className="w-full h-96 bg-white shadow-md rounded-md overflow-hidden">
            <MapComponent setMapObject={() => {}} locations={locations} />
          </div>
        </div>
        <div className="flex flex-row p-4">
          <div className="flex-1 bg-white shadow-md rounded-md p-4">
            <div className='flex gap-[13em] items-center'>
              <h2 className="text-xl font-bold">Pie Chart Analysis</h2>
              <Toggler/>
            </div>
            {
              !toggling ? 
            (<div className="flex flex-row space-x-4"><PieChart data={originPortChartData} title="Origin Port" />
            <PieChart data={destinationPortChartData} title="Destination Port" />
            <PieChart data={carrierChartData} title="Carrier" />
            <PieChart data={consigneeOrShipperChartData} title="Consignee or Shipper" />
            <PieChart data={milestonesChartData} title="Milestones" /></div>) :
            <h2 className='text-red-600 font-semibold text-center'>Oops!! No Data feed</h2>
          }
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
