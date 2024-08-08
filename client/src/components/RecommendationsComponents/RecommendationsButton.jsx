import React from 'react'
import arrow from '../../images/arrow.png'
import { Link } from "react-router-dom"
import lightbulb from '../../images/lightbulb.png'
import lightbulb2 from '../../images/lightbulb2.png'

const recommendationsAvailable = () => {
    return (
        <Link to="/Recommendations">
            <button className="recommendationsButton">
                <img src={lightbulb} className='lightbulb' alt='lightbulb' />
                <div className='recommendationsAvailable'>
                    Recommendations Available
                </div>
                <div className='recommendationsButtonText'>
                    See more to optimise your work place
                    <img src={arrow} className='arrowRecommendations' alt='arrow' />
                </div>
            </button>
        </Link>
    )
}

const noRecommendations = () => {
    return (
        <div>
            <button className="norecommendationsButton">
                <div className='norecommendationsAvailable'>
                    <img src={lightbulb2} className='lightbulb2' alt='lightbulb2' />
                    No Recommendations
                </div>
                <div className='norecommendationsButtonText'>
                    Everything seems to be working as intended
                </div>
            </button>
        </div>
    )
}

export function RecommendationsButton(display) {

    return (
        display ? recommendationsAvailable() : noRecommendations()
    )
}

export default RecommendationsButton
