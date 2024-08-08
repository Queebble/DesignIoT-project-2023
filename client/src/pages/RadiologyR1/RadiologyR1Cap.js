import React from 'react'
import RadiologyR1Header from '../../components/RadiologyR1Header'
import clock from '../../images/clock.png';
import UtilisationBarHomeCap from '../../components/UtilisationBarHomeCap';

const RadiologyR1Cap = () => {
    return (
        <div>
            <RadiologyR1Header />
            <div className="totalCount">
                Room Capacity
                <div className="line-1" />
                <div className='utilisationbar'>                
                    <UtilisationBarHomeCap />
                </div>
            </div>
            <div className="staffCount">
                Role Breakdown
                <div className="line-1" />
            </div>
            <div className="peopleGraph">
                Capacity over Time
                <img src={clock} className='clock' alt='clock' />
                <div className="line-1" />
            </div>
        </div>
    )
}

export default RadiologyR1Cap