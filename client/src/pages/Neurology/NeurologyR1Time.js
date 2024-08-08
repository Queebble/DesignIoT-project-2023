import React from 'react'
import { useState, useEffect } from 'react'
import NeurologyHeader from '../../components/NeurologyHeader'
import clock from '../../images/clock.png';
import UtilisationBarHomeTime from '../../components/UtilisationBarHomeTime'
import BarChart from '../../components/SpecPageComponents/BarChart';
import LineChart from '../../components/TimePageComponents/LineChart';

var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];

function generateData() {
    for (let i = 0; i < 14; i++) {
        data1[i] = Math.floor(Math.random()*10);
        data2[i] = Math.floor(Math.random()*10);
        data3[i] = Math.floor(Math.random()*10);
        data4[i] = Math.floor(Math.random()*10);
      }
}

const NeurologyR1Time = () => {

    const [updateCount, setCount] = React.useState(0);

    // this is just code to make the progress bar move/ will be changed to database data
    React.useEffect(() => {

        const timer = setInterval(() => {
            setCount((oldProgress) => {
                generateData();
                return Math.floor(oldProgress + Math.random() * 10);
            });
        }, 1500);
    }, []);

    return (
        <div>
            <NeurologyHeader />
            <div className="totalCount">
                Room Utilisation
                <div className="line-1" />
                <div className='utilisationbar'>                
                    <UtilisationBarHomeTime />
                </div>
            </div>
            <div className="staffCount">
                Role Utilisation
                <div className="line-1" />
                <BarChart/>
            </div>
            <div className="peopleGraph">
                Hours per Occupation over Time
                <img src={clock} className='clock' alt='clock' />
                <div className="line-1" />
                <div className='lineGraph'>
                {LineChart(data1, data2, data3, data4)}
                </div>
            </div>
            <div className="timeSummary">
                Most Time Spent: 
                <div className='timeSummaryRole'>Oncologist</div>
                <div className="line-2" />
                Least Time Spent:
                <div className='timeSummaryRole'>Gastrologist</div>
                <div className="line-2" />
                Best Time Utilisation:
                <div className='timeSummaryRole'>Gastrologist</div>
                <div className="line-2" />
            </div>
        </div>
    )
}

export default NeurologyR1Time