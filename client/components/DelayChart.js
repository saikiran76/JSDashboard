import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import useFetchShipments from '../hooks/useFetchShipments';

Chart.register(ArcElement, Tooltip, Legend);

const DelayChart = () => {
  const url = 'https://jsdashboard.onrender.com';
  const { shipments, loading: shipmentsLoading, error: shipmentsError } = useFetchShipments(url);

  if (shipmentsLoading) return <div>Loading...</div>;
  if (shipmentsError) return <div>Error loading data.</div>;

  let onTimeCount = 0;
  let lateCount = 0;

  shipments.forEach(item => {
    const estimatedArrival = new Date(item.estimated_time_of_arrival);
    const actualArrival = new Date(item.actual_time_of_arrival);

    if (actualArrival > estimatedArrival) {
      lateCount++;
    } else {
      onTimeCount++;
    }
  });

  const data = {
    labels: ['On Time', 'Late'],
    datasets: [
      {
        data: [onTimeCount, lateCount],
        backgroundColor: ['#32CD32', '#FF6347'],
        hoverBackgroundColor: ['#98FB98', '#FF4500'],
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
      <div className="relative w-[30rem] h-48 mt-3 ml-[20rem]">
        <h3 className="font-bold ml-8 mb-4">Timelines</h3>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default DelayChart;
