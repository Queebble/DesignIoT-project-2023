import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function UtilisationBarHomeSpec() {
  const [countOfProgess, setCountOfProgess] = React.useState(0);


  // this is just code to make the progress bar move/ will be changed to database data
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountOfProgess((oldProgress) => {
        if (100 === oldProgress) return 0;
        return Math.floor(Math.min(oldProgress + Math.random() * 10, 100));
      });
    }, 499);
    return () => {
      clearInterval(timer);
    };
  }, []);
  // comment

  var pathColorHex
  if(countOfProgess <= 30){
    pathColorHex = `#FF0000`
  } else if(countOfProgess > 31 && countOfProgess <= 65) {
    pathColorHex = `#FDEE4B`
  } else{
    pathColorHex = `#499EA4`
  }

  return (
    <div>
      <CircularProgressbar value={countOfProgess} text={`${countOfProgess}%`}
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

export default UtilisationBarHomeSpec;