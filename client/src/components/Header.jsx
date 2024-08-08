import React from 'react'
import hamburger from '../images/hamburger.png';
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

const Header = () => {

    const { pathname } = useLocation();

    function getTitle() {
        switch (pathname) {
            case "/Recommendations":
                return "Recommendations";
            case "/OncologyR1Live":
                return "Oncology Room 1";
            case "/OncologyR1Time":
                return "Oncology Room 1";
            case "/OncologyR1Spec":
                return "Oncology Room 1";
            case "/OncologyR1Cap":
                return "Oncology Room 1";
            case "/NeurologyR1Live":
                return "Neurology Room 1";
            case "/NeurologyR1Time":
                return "Neurology Room 1";
            case "/NeurologyR1Spec":
                return "Neurology Room 1";
            case "/NeurologyR1Cap":
                return "Neurology Room 1";
            case "/GastrologyR1Live":
                return "Gastrology Room 1";
            case "/GastrologyR1Time":
                return "Gastrology Room 1";
            case "/GastrologyR1Spec":
                return "Gastrology Room 1";
            case "/GastrologyR1Cap":
                return "Gastrology Room 1";
            case "/RadiologyR1Live":
                return "Radiology Room 1";
            case "/RadiologyR1Time":
                return "Radiology Room 1";
            case "/RadiologyR1Spec":
                return "Radiology Room 1";
            case "/RadiologyR1Cap":
                return "Radiology Room 1";
            case "/RadiologyR2Live":
                return "Radiology Room 2";
            case "/RadiologyR2Time":
                return "Radiology Room 2";
            case "/RadiologyR2Spec":
                return "Radiology Room 2";
            case "/RadiologyR2Cap":
                return "Radiology Room 2";
            default:
                return "Home"
        }
    }

    function setCSS() {
        switch (pathname) {
            case '/':
                return 'mainHeader';
            default:
                return 'mainHeaderMetrics'
        }
    }

    return (
        <header className={setCSS()}>
            <Link to="/">
            <img src={hamburger} className='hamburger' alt='hamburger'/>
            </Link>
            <h1 className='headingtext'>
                {getTitle()}
                {/* this will be a  prop so we can auto change home to recommendations and stuff*/}
            </h1>
        </header>
    )
}

Header.defaultProps = {
    pathname: 'Home',
}

export default Header