import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart,
    LineElement,
    BarElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend,
    Title,
    Tooltip
  } from 'chart.js';
  
  Chart.register(
    LineElement,
    BarElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend,
    Title,
    Tooltip
  );

const options = {
  responsive: true,
  plugins: {
      legend: {
        maxHeight: 20,
          display: true,
          position: 'bottom',
          labels: {
            boxHeight: 1,
            boxWidth: 15,
            font: {
                size: 8
            }
          }
      },
  },
  scales: {
    y: {
        min: 0,
        max: 10,
        stepSize: 2
    },
    x: {
        title: {
            display: true,
            text: 'Days'
          },
        grid: {
          display: false
        }
      },
}
};

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12','13', '14' ];

export function LineChart (onco, neuro, gastro, radio) {

var data1 = onco;
var data2 = neuro;
var data3 = gastro;
var data4 = radio;

const data = {
    labels,
    datasets: [
        {
            label: 'Oncologist',
            data: data1,
            fill: false,
            borderColor: '#499EA4',
            pointRadius: 0
        },
        {
            label: 'Neurologist',
            data: data2,
            fill: false,
            borderColor: '#9ACED2',
            pointRadius: 0
        },
        {
            label: 'Gastrologist',
            data: data3,
            fill: false,
            borderColor: '#3a6f72',
            pointRadius: 0
        },
        {
            label: 'Radiologist',
            data: data4,
            fill: false,
            borderColor: '#BEBEBE',
            pointRadius: 0
        }
    ],
};

  return (
    <Line options={options} data={data} />
  )
}

export default LineChart