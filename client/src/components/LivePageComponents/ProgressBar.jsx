import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';

function Progressbar() {
  var d = new Date()
  var timer = d.getSeconds()

  return (
    <div className='progressbar'>
      <ProgressBar now={timer} max={60} label={`${Math.floor(timer/60*100)}%`} />
      <div>
        <div className='progressbartext'>
          {timer}/60 minutes
        </div>
      </div>
    </div>
  );
}

export default Progressbar;