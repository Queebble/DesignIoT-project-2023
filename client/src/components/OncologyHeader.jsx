import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import arrow from '../images/arrow.png'
import greenarrow from '../images/greenarrow.png'

const OncologyHeader = () => {
  const { pathname } = useLocation();

  function getTitle() {
    switch (pathname) {
      case "/OncologyR1Time":
        return "Time Utilisation";
      case "/OncologyR1Spec":
        return "Specificity";
      case "/OncologyR1Cap":
        return "Capacity";
      default:
        return "Metrics"
    }
  }

  function setCSSLive() {
    switch (pathname) {
      case '/OncologyR1Live':
        return 'live';
      default:
        return 'notlive'
    }
  }

  function setCSSMetrics() {
    switch (pathname) {
      case '/OncologyR1Live':
        return 'Dropdownbuttonlive';
      default:
        return 'Dropdownbuttonmetrics'
    }
  }

  function setArrowColor() {
    switch (pathname) {
      case "/OncologyR1Time":
        return (greenarrow);
      case "/OncologyR1Spec":
        return (greenarrow);
      case "/OncologyR1Cap":
        return (greenarrow);
      default:
        return (arrow)
    }
  }

  const [open, setOpen] = React.useState(false);
  const [resourceType, setResourceType] = useState(getTitle)

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="roomHeader">
      <Link to="/OncologyR1Live">
        <button className={setCSSLive()}><h2>Live</h2></button>
      </Link>
      <button onClick={handleOpen} className={setCSSMetrics()}>
        <h2>
          {resourceType}
          {open ? (
            <img src={setArrowColor()} className='arrowDropDownFlipHeader' alt='arrowDropDownFlipHeader' />) : 
            <img src={setArrowColor()} className='arrowDropDownHeader' alt='arrowDropDownHeader' />}
        </h2>
      </button>
      {open ? (
        <div className="Dropdownmenu">
          <Link to="/OncologyR1Time">
            <button onClick={() => setResourceType('Time Utilisation')} className='Dropdownselect'><h2>Time Utilisation</h2></button>
          </Link>
          <Link to="/OncologyR1Spec">
            <button onClick={() => setResourceType('Specificity')} className='Dropdownselect'><h2>Specificity</h2></button>
          </Link>
          <Link to="/OncologyR1Cap">
            <button onClick={() => setResourceType('Capacity')} className='Dropdownselect'><h2>Capacity</h2></button>
          </Link>
        </div>
      ) : null}
    </header>
  )
}

export default OncologyHeader