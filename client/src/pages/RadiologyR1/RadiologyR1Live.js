import React from 'react'
import RadiologyR1Header from '../../components/RadiologyR1Header'
import person from '../../images/person.png';
import staff from '../../images/staff.png';
import clock from '../../images/clock.png';
import Progressbar from '../../components/LivePageComponents/ProgressBar';

const RadiologyR1Live = () => {
    return (
        <div>
            <RadiologyR1Header />
            <div className="totalCount">
                Total Count
                <img src={person} className='person' alt='person' />
                <div className="line-1" />
                <div className="countNum">
                    4
                </div>
            </div>
            <div className="staffCount">
                Staff Count
                <img src={staff} className='staff' alt='staff' />
                <div className="line-1" />
                <div className="countNum">
                    4
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
            </div>
        </div>
    )
}

export default RadiologyR1Live