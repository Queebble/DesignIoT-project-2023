import React from 'react'
import OncologyHeader from '../../components/OncologyHeader'
import clock from '../../images/clock.png';
import UtilisationBarCap from '../../components/UtilisationBarCap';
import BarChart from '../../components/SpecPageComponents/BarChart';
import CapUtilCalc from '../../components/CapUtilCalc';
import getOncoR1Time from '../../fetch/OncoR1/getOncoR1Time';
import LineChart from '../../components/TimePageComponents/LineChart';

const OncologyR1Cap = () => {

    var roomCapacity = 5;

    const [oncoData, setOncoData] = React.useState([]);

    // this is just code to make the progress bar move/ will be changed to database data
    React.useEffect(() => {
        const getData = async () => {
            const oncoData = await getOncoR1Time();
            setOncoData(oncoData);
        }
        getData();
        return () => {

        };
    }, []);

    var capScore = 0;

    if (typeof oncoData === 'object' && oncoData.length > 0) {

        var bookingCount = 0;
        var numBookings = [];
        var currentBooking = oncoData[0].booking_id;

        for (let i = 0; i < oncoData.length; i++) {
            var booking_id = oncoData[i].booking_id;
            if (booking_id === currentBooking) {
                bookingCount += 1;
                if (i === oncoData.length-1) {
                    numBookings.push(bookingCount)
                }
            }
            else {
                numBookings.push(bookingCount)
                currentBooking = booking_id
                bookingCount = 1;
            }
        }
        
    capScore = CapUtilCalc(oncoData, numBookings, roomCapacity)
    }

    return (
        <div>
            <OncologyHeader />
            <div className="totalCount">
                Room Capacity
                <div className="line-1" />
                <div className='utilisationbar'>                
                    {UtilisationBarCap(capScore)}
                </div>
            </div>
            <div className="staffCount">
                Role Breakdown
                <div className="line-1" />
                <div className='barGraph'>
                <BarChart/>
                </div>
            </div>
            <div className="peopleGraph">
                Average Capacity over Time
                <img src={clock} className='clock' alt='clock' />
                <div className="line-1" />
                <div className='lineGraph'>
                {LineChart(0, 0, 0, 0)}
                </div>
            </div>
            <div className="capacitySummary">
                Highest Average: 
                <div className='capacitySummaryNum'>6</div>
                <div className="line-2" />
                Lowest Average:
                <div className='capacitySummaryNum'>2</div>
                <div className="line-2" />
                Overall Average:
                <div className='capacitySummaryNum'>4</div>
                <div className="line-2" />
            </div>
        </div>
    )
}

export default OncologyR1Cap