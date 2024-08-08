import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function UtilisationBarCap(time) {

    var pathColorHex
    if(time <= 20){
      pathColorHex = '#FF0000'
    } else if(time > 21 && time < 40) {
      pathColorHex = '#FDEE4B'
    } else if(time >= 100) {
      pathColorHex = '#FF0000'
    } else{
      pathColorHex = '#499EA4'
    }

  return (
    <div>
      <CircularProgressbar value={time} text={`${time}%`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.5,
      
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'round',
      
          // Text size
          textSize: '24px',
      
          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,
      
          // Colors
          pathColor: pathColorHex,
          textColor: '#3E3E3E',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })} />
    </div>
  );
}

export default UtilisationBarCap;