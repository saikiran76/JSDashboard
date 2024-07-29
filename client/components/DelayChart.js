import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import useFetchShipments from '../hooks/useFetchShipments';
import { Loader } from './Loader';

Chart.register(ArcElement, Tooltip, Legend);

const DelayChart = () => {
  const url = 'https://jsdashboard.onrender.com';
  const { shipments, loading: shipmentsLoading, error: shipmentsError } = useFetchShipments(url);

  if (shipmentsLoading) return <Loader />;
  if (shipmentsError) return <Loader />;

  let onTimeCount = 0;
  let lateCount = 0;

  shipments.forEach((item) => {
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
    <div className="flex w-full flex-col items-center p-2 md:w-1/5">
      <div className="relative ml-[6rem] md:ml-[20rem] mb-[3rem] mt-3 h-48 w-[30rem]">
        <h3 className="mb-4 ml-[9.5rem] font-bold">Timelines</h3>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default DelayChart;
