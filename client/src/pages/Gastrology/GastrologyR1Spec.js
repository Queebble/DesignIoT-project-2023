import React from 'react'
import GastrologyHeader from '../../components/GastrologyHeader'
import clock from '../../images/clock.png';
import UtilisationBarHomeSpec from '../../components/UtilisationBarHomeSpec'

const GastrologyR1Spec = () => {
    return (
        <div>
            <GastrologyHeader />
            <div className="totalCount">
                Room Specificity
                <div className="line-1" />
                <div className='utilisationbar'>                
                    <UtilisationBarHomeSpec />
                </div>
                </div>
            <div className="staffCount">
                Role Breakdown
                <div className="line-1" />
            </div>
            <div className="peopleGraph">
                Role Breakdown over Time
                <img src={clock} className='clock' alt='clock' />
                <div className="line-1" />
            </div>
        </div>
    )
}

export default GastrologyR1Spec