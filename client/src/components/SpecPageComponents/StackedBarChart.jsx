import React from 'react'
import { Bar } from 'react-chartjs-2';
import clock from '../../images/clock.png';
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
    barThickness: 10,
    responsive: true,
    plugins: {
        legend: {
            maxHeight: 20,
            display: true,
            position: 'bottom',
            labels: {
                boxHeight: 7,
                boxWidth: 15,
                font: {
                    size: 8
                }
            }
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Days'
            },
            grid: {
                display: true
            },
            stacked: true,
        },
        y: {
            stacked: true,
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

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

export function StackedBarChart(oncoR1Data) {

    var oncoDays = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var neuroDays = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var gastroDays = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var radioDays = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    if (typeof oncoR1Data === 'object' && oncoR1Data.length > 0) {
        var startDay = new Date().getDate();
        var latestDay = startDay;
        var i = 13;

        while ((latestDay > (startDay - 14))) {

            for (let j = 0; j < oncoR1Data.length; j++) {
                var currentDate = oncoR1Data[j].moveTime
                var currentDay = currentDate.substring(8, 10);
                var currentDayInt = parseInt(currentDay);

                if (currentDayInt === latestDay) {
                    if (oncoR1Data[j].role_id === 1) {
                        oncoDays[i] += 1
                    } else if (oncoR1Data[j].role_id === 2) {
                        neuroDays[i] += 1
                    } else if (oncoR1Data[j].role_id === 3) {
                        gastroDays[i] += 1
                    }
                    else if (oncoR1Data[j].role_id === 4) {
                        radioDays[i] += 1
                    }
                } else {
                    var newDay = latestDay - currentDayInt;
                    i = i - newDay;
                    if (oncoR1Data[j].role_id === 1) {
                        oncoDays[i] += 1
                    } else if (oncoR1Data[j].role_id === 2) {
                        neuroDays[i] += 1
                    } else if (oncoR1Data[j].role_id === 3) {
                        gastroDays[i] += 1
                    }
                    else if (oncoR1Data[j].role_id === 4) {
                        radioDays[i] += 1
                    }
                    latestDay = latestDay - newDay;
                }
            }
            latestDay = 0
        }

        for (let x = 0; x < oncoDays.length; x++) {
            var dayTotal = 0;
            dayTotal += oncoDays[x];
            dayTotal += neuroDays[x];
            dayTotal += gastroDays[x];
            dayTotal += radioDays[x];

            oncoDays[x] = (oncoDays[x] / dayTotal) * 100;
            neuroDays[x] = (neuroDays[x] / dayTotal) * 100;
            gastroDays[x] = (gastroDays[x] / dayTotal) * 100;
            radioDays[x] = (radioDays[x] / dayTotal) * 100;
        }
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Oncologist',
                data: oncoDays,
                fill: false,
                backgroundColor: '#499EA4',
                pointRadius: 0
            },
            {
                label: 'Neurologist',
                data: neuroDays,
                fill: false,
                backgroundColor: '#9ACED2',
                pointRadius: 0
            },
            {
                label: 'Gastrologist',
                data: gastroDays,
                fill: false,
                backgroundColor: '#3a6f72',
                pointRadius: 0
            },
            {
                label: 'Radiologist',
                data: radioDays,
                fill: false,
                backgroundColor: '#BEBEBE',
                pointRadius: 0
            }
        ],
    };

    function median(array) {
        const middle = Math.floor(array.length / 2);
    
        if (array.length % 2 === 0) {
            return (array[middle - 1] + array[middle]) / 2;
        }
    
        return array[middle];
    }

    oncoDays = oncoDays.slice(0, 15).filter(value => isFinite(value));
    oncoDays = oncoDays.sort(function(a, b){return a - b});

    return (<div>
        <div className="peopleGraph">
            Role Breakdown over Time
            <img src={clock} className='clock' alt='clock' />
            <div className="line-1" />
            <div className="lineGraph">
                <Bar options={options} data={data} />
            </div>
        </div>
        <div className="timeSummary">
            Highest Specificity:
            <div className='timeSummaryRole'>{Math.floor(Math.max(...oncoDays))}%</div>
            <div className="line-2" />
            Lowest Specificity:
            <div className='timeSummaryRole'>{Math.floor(Math.min(...oncoDays))}%</div>
            <div className="line-2" />
            Median Specificity:
            <div className='timeSummaryRole'>{Math.floor(median(oncoDays))}%</div>
            <div className="line-2" />
        </div></div>
    )
}

export default StackedBarChart