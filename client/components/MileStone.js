import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import useFetchShipments from '../hooks/useFetchShipments';
import { Loader } from './Loader';

Chart.register(ArcElement, Tooltip, Legend);

const MilestonesChart = () => {
  const [fontSize, setFontSize] = useState(12);
  const url = 'https://jsdashboard.onrender.com';
  const { shipments, loading: shipmentsLoading, error: shipmentsError } = useFetchShipments(url);

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth > 350 ? 10 : 5);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const milestoneCounts = {
    BOOKED: 0,
    DISCHARGED: 0,
    ARRIVED: 0,
    DELIVERED: 0,
    RETURNED: 0,
  };

  shipments.forEach((item) => {
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
          font: {
            size: fontSize,
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  if (shipmentsError) {
    return <div className="text-red text-center">Error loading</div>;
  }

  return (
    <div className="flex w-full flex-col items-center p-2 md:w-1/5">
      <h3 className="mb-4 mt-3 font-bold">MileStones</h3>
      <div className="relative ml-[2rem] md:ml-[20rem] mb-[2rem] mt-3 h-48 w-[22rem] md:w-[30rem] p-4 md:p-0">
        {shipmentsLoading ? <Loader /> : <Pie data={data} options={options} />}
      </div>
    </div>
  );
};

export default MilestonesChart;
