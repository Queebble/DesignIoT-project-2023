import React from 'react'
import OncologyHeader from '../../components/OncologyHeader'
import person from '../../images/person.png';
import staff from '../../images/staff.png';
import clock from '../../images/clock.png';
import Progressbar from '../../components/LivePageComponents/ProgressBar';
import PeopleBarChart from '../../components/LivePageComponents/PeopleBarChart';
import getOncoR1 from '../../fetch/OncoR1/getOncoR1';

const OncologyR1Live = () => {

    const [oncoData, setOncoData] = React.useState([]);
    
        React.useEffect(() => {
            getOncoR1()
                .then(oncoData => setOncoData(oncoData));
        }, [oncoData]);

    var staff_movements = 0;
    var other_movements = 0;
    var staffList = [];

    for (let i = 0; i < oncoData.length; i++) {
        var role_id = oncoData[i].role_id;
        if (oncoData[i].entering && role_id === 5) {
            other_movements += 1;
        } else if (!oncoData[i].entering && role_id === 5) {
            other_movements -= 1;
        } else if (oncoData[i].entering) {
            staff_movements += 1;
            staffList.push(role_id)
        } else {
            staff_movements -= 1;
            staffList.splice(staffList.indexOf(role_id), 1);
        }
    }

    return (
        <div>
            <OncologyHeader />
            <div className="totalCount">
                Total Count
                <img src={person} className='person' alt='person' />
                <div className="line-1" />
                <div className="countNum">
                    {staff_movements + other_movements}/5
                </div>
            </div>
            <div className="staffCount">
                Staff Count
                <img src={staff} className='staff' alt='staff' />
                <div className="line-1" />
                <div className="countNum">
                    {staff_movements}
                </div>
            </div>
            <div className="bookingTime">
                Booking Time Elapsed
                <img src={clock} className='clock' alt='clock' />
                <div className="line-1" />
                <Progressbar/>
            </div>
            <div className="peopleGraph">
                Total People Overview
                <img src={person} className='person' alt='person' />
                <div className="line-1" />
                <div className="peopleBarGraph">
                    {PeopleBarChart(staffList, other_movements)}
                </div>
            </div>
        </div>
    )
}

export default OncologyR1Live