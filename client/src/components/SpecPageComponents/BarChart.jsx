import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  barThickness: 15,
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
      legend: {
          display: false,
      },
  },
  scales: {
      x: {
        display: false,
      },
      y: {
          min: 0,
          max: 100,
          stepSize: 20,
          ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                  return value + '%';
              }
          }
      },
  }
};



export function BarChart(staff) {

  const labels = ['Oncologist', 'Neurlogist', 'Gastrologist', 'Radiologist'];

  
  var onco = 0;
  var neuro = 0;
  var gastro = 0;
  var radio = 0;

  for (let i = 0; i < staff.length; i++) {
  if (staff[i] === 1) {
    onco +=1
  } else if (staff[i] === 2) {
    neuro +=1
  } else if (staff[i] === 3) {
    gastro +=1
  } else if (staff[i] === 4) {
    radio +=1
  }
  }

  var oncoSpec = Math.floor((onco / staff.length) * 100);
  var neuroSpec = Math.floor((neuro / staff.length) * 100);
  var gastroSpec = Math.floor((gastro / staff.length) * 100);
  var radioSpec = Math.floor((radio / staff.length) * 100);

  const data = {
    labels,
    datasets: [
      {
        data: [oncoSpec, neuroSpec, gastroSpec, radioSpec],
        backgroundColor: [
            '#499EA4',
            '#9ACED2',
            '#3a6f72',
            '#BEBEBE'
        ]
      }
    ],
  };

  return (
    <Bar options={options} data={data} />
  )
}

export default BarChart