'use client'

import React, {useState, useEffect} from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import useFetchShipments from '../hooks/useFetchShipments';
import { Loader } from './Loader';

Chart.register(ArcElement, Tooltip, Legend);

const DelayChart = () => {
  const [fontSize, setFontSize] = useState(12);
  const url = 'https://jsdashboard.onrender.com';
  const { shipments, loading: shipmentsLoading, error: shipmentsError } = useFetchShipments(url);

  useEffect(() => {
    if(typeof window !== "undefined"){
      const handleResize = () => {
        setFontSize(window.innerWidth > 350 ? 10 : 3);
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

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
          font: {
            size: fontSize,
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="flex w-[80%] flex-col items-center p-2 md:w-1/5">
      <h3 className="mb-4 ml-[3rem] mt-4 font-bold w-fit">Timelines</h3>
      <div className="relative ml-[4rem] md:ml-[20rem] mb-[3rem] mt-3 h-48 w-[25rem] md:w-[30rem] p-4 md:p-0">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default DelayChart;
