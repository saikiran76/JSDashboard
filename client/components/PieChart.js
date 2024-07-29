import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data, title }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [data]);

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: [
          '#6B120A',
          '#856562',
          '#1073E6',
          '#7BB896',
          '#F7A668',
          '#EB5D50',
          '#E7E9ED',
          '#9C9191',
          '#CAB8FF',
          '#FFC400',
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  const filteredLabels = [];
  const filteredColors = [];

  chartData.labels.forEach((label, index) => {
    const value = chartData.datasets[0].data[index];
    if (value > 0) {
      filteredLabels.push(label);
      filteredColors.push(chartData.datasets[0].backgroundColor[index]);
    }
  });

  return (
    <div className="flex flex-col items-center w-full md:w-1/5 p-2">
      <h3 className="text-sm font-bold mb-4 mt-3">{title}</h3>
      <div className="relative w-[10rem] h-48">
        <Doughnut ref={chartRef} data={chartData} options={options} />
      </div>
      <div className="mt-4 flex flex-col items-start">
        {filteredLabels.map((label, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="w-4 h-4 mr-2" style={{ backgroundColor: filteredColors[index], borderRadius: '50%' }}></span>
            <span className="text-[0.5rem]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
