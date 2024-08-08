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
      y: {
          min: 0,
          suggestedMax: 5,
          stepSize: 1,
      },
  }
};

const labels = ['Oncologist', 'Neurlogist', 'Gastrologist', 'Radiologist', 'Other'];

export function PeopleBarChart(staff, non_staff) {

var onco = 0;
var neuro = 0;
var gastro = 0;
var radio = 0;
var other = non_staff;

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

const data = {
  labels,
  datasets: [
    {
      data: [onco, neuro, gastro, radio, other],
      backgroundColor: [
          '#499EA4',
          '#9ACED2',
          '#3a6f72',
          '#BEBEBE',
          '#666666'
      ]
    }
  ]};

  return (
    <Bar options={options} data={data} />
  )
}

export default PeopleBarChart