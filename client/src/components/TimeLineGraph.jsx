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
  scaleShowVerticalLines: false,
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

const style = {
  width: 350,
  height: 150
}

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12','13', '14' ];

var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];

for (let i = 0; i < 14; i++) {
    data1[i] = Math.floor(Math.random()*10);
    data2[i] = Math.floor(Math.random()*10);
    data3[i] = Math.floor(Math.random()*10);
    data4[i] = Math.floor(Math.random()*10);
  }

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
            borderColor: '#BEBEBE',
            pointRadius: 0
        },
        {
            label: 'Radiologist',
            data: data4,
            fill: false,
            borderColor: '#3a6f72',
            pointRadius: 0
        }
    ],
};

const TimeLineGraph = () => {
  return (
    <Line options={options} style={style} data={data} />
  )
}

export default TimeLineGraph