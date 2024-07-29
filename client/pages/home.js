import Bookings from '../components/Bookings';
import MapComponent from '../components/MapComponent';
import useFetchLocations from '../hooks/useFetchLocations';
import useFetchBookings from '../hooks/useFetchBookings';
import PieChart from '../components/PieChart';
import { prepareChartData } from '../components/prepareChartData';
import useFetchShipments from '../hooks/useFetchShipments';
import LatestDocuments from '../components/Documents';
import useFetchDocuments from '../hooks/useFetchDocuments';
import Announcements from '../components/Announcements';
import Toggler from '../components/Toggler';
import { Loader } from '../components/Loader'
import { useSelector } from 'react-redux';

function Home() {
  const url = 'https://jsdashboard.onrender.com';
  const { locations, loading: locationsLoading, error: locationsError } = useFetchLocations(url);
  const { bookings, loading: bookingsLoading, error: bookingsError } = useFetchBookings(url);
  const { shipments, loading: shipmentsLoading, error: shipmentsError } = useFetchShipments(url);
  const { documents, loading: documentsLoading, error: documentsError } = useFetchDocuments(url);
  const toggling = useSelector((state) => state.toggle.toggler);
  console.log('passing shipments: ', shipments);
  console.log('passing docs: ', documents);

  if (bookingsLoading || shipmentsLoading || documentsLoading || locationsLoading) {
    return <Loader/>
  }

  if (bookingsError || shipmentsError || documentsError || locationsError) {
    return <div className="text-red text-center font-semibold">Error</div>;
  }

  const {
    originPortChartData,
    destinationPortChartData,
    carrierChartData,
    consigneeOrShipperChartData,
    milestonesChartData,
  } = prepareChartData(shipments);

  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <div className="flex h-screen flex-col bg-gray-100">
        <Bookings bookings={bookings} />
        <div className="flex flex-1 p-4">
          <div className="h-96 w-full overflow-hidden rounded-md bg-white shadow-md">
            <MapComponent setMapObject={() => {}} locations={locations} />
          </div>
        </div>
        <div className="flex flex-col p-4 md:flex-row">
          <div className="flex-1 rounded-md bg-white p-4 shadow-md">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-[13em]">
              <h2 className="text-xl font-bold">Pie Chart Analysis</h2>
              <Toggler />
            </div>
            {!toggling ? (
              <div className="flex flex-wrap space-x-4">
                <PieChart data={originPortChartData} title="Origin Port" />
                <PieChart data={destinationPortChartData} title="Destination Port" />
                <PieChart data={carrierChartData} title="Carrier" />
                <PieChart data={consigneeOrShipperChartData} title="Consignee or Shipper" />
                <PieChart data={milestonesChartData} title="Milestones" />
              </div>
            ) : (
              <h2 className="text-center font-semibold text-red-600">Oops!! No Data feed</h2>
            )}
          </div>
        </div>
        <div className="flex h-[20rem] flex-col p-4 md:flex-row">
          <div className="mb-4 flex-1 rounded-md bg-white p-4 shadow-md md:mb-0 md:mr-4">
            <h2 className="text-xl font-bold">Latest Documents</h2>
            <LatestDocuments docs={documents} />
          </div>
          <div className="flex-1 rounded-md bg-white p-4 shadow-md">
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
