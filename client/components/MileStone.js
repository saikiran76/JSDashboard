import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import useFetchShipments from '../hooks/useFetchShipments';

Chart.register(ArcElement, Tooltip, Legend);

const MilestonesChart = () => {
  const url = 'https://jsdashboard.onrender.com';
  const { shipments, loading: shipmentsLoading, error: shipmentsError } = useFetchShipments(url);

  const milestoneCounts = {
    BOOKED: 0,
    DISCHARGED: 0,
    ARRIVED: 0,
    DELIVERED: 0,
    RETURNED: 0,
  };

  shipments.forEach(item => {
    if (milestoneCounts[item.milestone] !== undefined) {
      milestoneCounts[item.milestone]++;
    }
  });


  const data = {
    labels: Object.keys(milestoneCounts),
    datasets: [
      {
        data: Object.values(milestoneCounts),
        backgroundColor: ['#6B120A', '#1073E6', '#7BB896', '#F7A668', '#EB5D50'],
        hoverBackgroundColor: ['#FF4500', '#FF7F50', '#FFE135', '#98FB98', '#87CEFA'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
        align: 'start',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col items-center w-full md:w-1/5 p-2">
        <h3 className="font-bold mb-4 mt-3">MileStones</h3>
        <div className="relative w-[30rem] h-48 mt-3 ml-[20rem]">
            <Pie data={data} options={options} />
        </div>
        </div>
    );
};

export default MilestonesChart;
