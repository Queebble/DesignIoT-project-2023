import React, { useState } from 'react'
import arrow from '../../images/arrow.png'
import UtilisationBarCap from '../UtilisationBarCap'
import UtilisationBarSpec from '../UtilisationBarSpec'
import UtilisationBarTime from '../UtilisationBarTime'


const noRecommendations = () => {
    return (
        <div>
        </div>
    )
}

export function SpecRecNeurology1(display, time, spec, cap) {

    const [showButton, setShowButton] = useState(true);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        display ?
            <div>
                {showButton &&
                    <div>
                        <button className='recommendationsOne' onClick={handleOpen}>
                            <h1>
                                Neurology R1
                                {open ? (
                                    <img src={arrow} className='arrowDropDownFlip' alt='arrowDropDownFlip' />
                                ) : <img src={arrow} className='arrowDropDown' alt='arrowDropDown' />}
                            </h1>
                        </button>
                        {open ? (
                            <div className="DropdownMenuRecommendations">
                                <button className='overall-performance-recommendations'>
                                    <div className='overall-performance-text-recommendations'>
                                        Neurology Room 1
                                        </div>
                                    <div className='UtilisationBarRecommendations'>
                                        {UtilisationBarTime(time)}
                                    </div>
                                    <div className='UtilisationBarRecommendations'>
                                        {UtilisationBarSpec(spec)}
                                    </div>
                                    <div className='UtilisationBarRecommendations'>
                                        {UtilisationBarCap(cap)}
                                    </div>
                                    <div>
                                        <div className='UtilisationBarLabelsHomeTime'>
                                            Time Utilisation
                                        </div>
                                        <div className='UtilisationBarLabelsHomeSpec'>
                                            Specificity
                                        </div>
                                        <div className='UtilisationBarLabelsHomeCap'>
                                            Capacity
                                        </div>
                                    </div>
                                </button>
                                <button className='recommendationsRadiologyRoom1TextBox'>
                                    <div className='recommendationsRadiologyRoom1Text'>
                                        We recommend an investigation into the metrics of this
                                        room. You may want to consider options to improve its scores.
                                        <ul className='recommendationsRadiologyRoom1TextBoxDotPoints'>
                                            <li>Time Utilisation: Adjust booking periods</li>
                                            <li>Specificity: Reallocate room to different apartment</li>
                                            <li>Capacity: Increase the capacity of this room</li>
                                        </ul>
                                    </div>
                                    <button className='markAsReadButton' onClick={() => setShowButton(false)}>
                                        <div className='markAsReadButtonText'>
                                            Mark as read
                                        </div>
                                    </button>
                                </button>
                            </div>
                        ) : null}
                    </div>
                }
            </div>

            : noRecommendations()
    )
}

export default SpecRecNeurology1