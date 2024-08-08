import React from 'react'
import RadiologyR2Header from '../../components/RadiologyR2Header'
import clock from '../../images/clock.png';
import UtilisationBarHomeTime from '../../components/UtilisationBarHomeTime'
import BarChart from '../../components/SpecPageComponents/BarChart';

const RadiologyR2Time = () => {
    return (
        <div>
            <RadiologyR2Header />
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

export default RadiologyR2Time