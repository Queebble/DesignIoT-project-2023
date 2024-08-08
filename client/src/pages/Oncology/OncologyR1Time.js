import React from 'react'
import OncologyHeader from '../../components/OncologyHeader'
import clock from '../../images/clock.png';
import UtilisationBarTime from '../../components/UtilisationBarTime'
import BarChart from '../../components/SpecPageComponents/BarChart';
import TimeUtilCalc from '../../components/TimeUtilCalc';
import getOncoR1Time from '../../fetch/OncoR1/getOncoR1Time';
import LineChart from '../../components/TimePageComponents/LineChart';

const OncologyR1Time = () => {

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

    var timeScore = 0;

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
        
    timeScore = TimeUtilCalc(oncoData, numBookings)
    }

    return (
        <div>
            <OncologyHeader />
            <div className="totalCount">
                Room Utilisation
                <div className="line-1" />
                <div className='utilisationbar'>
                    {UtilisationBarTime(timeScore)}
                </div>
            </div>
            <div className="staffCount">
                Role Utilisation
                <div className="line-1" />
                <div className='barGraph'>
                    <BarChart />
                </div>
            </div>
            <div className="peopleGraph">
                Hours per Occupation over Time
                <img src={clock} className='clock' alt='clock' />
                <div className="line-1" />
                <div className='lineGraph'>
                    {LineChart(0, 0, 0, 0)}
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

export default OncologyR1Time