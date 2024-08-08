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
  barThickness: 30,
  responsive: false,
  plugins: {
      legend: {
          display: false,
      },
  },
  scales: {
      x: {
          stacked: true,
      },
      y: {
          min: 0,
          max: 100,
          ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                  return value + '%';
              }
          }
      },
  }
};

const style = {
  width: 168,
  height: 125
}

const labels = ['Oncologist', 'Neurlogist', 'Gastrologist', 'Radiologist'];

const data = {
  labels,
  datasets: [
    {
      data: [50, 20, 80, 63],
      backgroundColor: [
          '#499EA4',
          '#9ACED2',
          '#BEBEBE'
      ]
    }
  ],
};

const TimeBarGraph = () => {
  return (
    <div className='barGraph'>
    <Bar options={options} style={style} data={data} />
    </div>
  )
}

export default TimeBarGraph