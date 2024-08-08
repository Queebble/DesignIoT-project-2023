import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

const RadiologyR2Header = () => {
  

  const { pathname } = useLocation();

  function getTitle() {
      switch (pathname) {
          case "/RadiologyR2Time":
              return "Time Utilisation";
          case "/RadiologyR2Spec":
              return "Specificity";
          case "/RadiologyR2Cap":
              return "Capacity";
          default:
              return "Metrics"
      }
  }

  function setCSSLive() {
    switch (pathname) {
        case '/RadiologyR2Live':
            return 'live';
        default:
            return 'notlive'
    }
}

function setCSSMetrics() {
  switch (pathname) {
      case '/RadiologyR2Live':
          return 'Dropdownbuttonlive';
      default:
          return 'Dropdownbuttonmetrics'
  }
}

  const [open, setOpen] = React.useState(false);
  const [resourceType, setResourceType]  = useState(getTitle)

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className="roomHeader">
      <Link to="/RadiologyR2Live">
        <button className={setCSSLive()}><h2>Live</h2></button>
        </Link>
        <button onClick={handleOpen} className={setCSSMetrics()}><h2>{resourceType}</h2></button>
          {open ? (
            <div className="Dropdownmenu">
                <Link to="/RadiologyR2Time">
                <button onClick={() => setResourceType('Time Utilisation')} className='Dropdownselect'><h2>Time Utilisation</h2></button>
                </Link>
                <Link to="/RadiologyR2Spec">
                <button onClick={() => setResourceType('Specificity')} className='Dropdownselect'><h2>Specificity</h2></button>
                </Link>
                <Link to="/RadiologyR2Cap">
                <button onClick={() => setResourceType('Capacity')} className='Dropdownselect'><h2>Capacity</h2></button>
                </Link>
            </div>
          ) : null}
    </header>
  )
}

export default RadiologyR2Header