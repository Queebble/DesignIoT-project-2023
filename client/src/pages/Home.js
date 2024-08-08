import React from 'react'
import { Link } from "react-router-dom"
import arrow from '../images/arrow.png';
import UtilisationBarCap from '../components/UtilisationBarCap';
import UtilisationBarSpec from '../components/UtilisationBarSpec';
import UtilisationBarTime from '../components/UtilisationBarTime';
import RecommendationsButton from '../components/RecommendationsComponents/RecommendationsButton';
import getOncoR1Enter from './../fetch/OncoR1/getOncoR1Enter';
import getNeuroR1Enter from './../fetch/NeuroR1/getNeuroR1Enter';
import getGastroR1Enter from './../fetch/GastroR1/getGastroR1Enter';
import getRadioR1Enter from './../fetch/RadioR1/getRadioR1Enter';
import getRadioR2Enter from './../fetch/RadioR2/getRadioR2Enter';
import getOncoR1Time from './../fetch/OncoR1/getOncoR1Time';
import getNeuroR1Time from './../fetch/NeuroR1/getNeuroR1Time';
import getGastroR1Time from './../fetch/GastroR1/getGastroR1Time';
import getRadioR1Time from './../fetch/RadioR1/getRadioR1Time';
import getRadioR2Time from './../fetch/RadioR2/getRadioR2Time';
import SpecCalc from '../components/SpecCalcFunctions';
import TimeCalc from '../components/TimeCalcFunctions';
import CapCalc from '../components/CapCalcFunctions';

const Home = () => {

  // constants for the rooms' capacities
  const oncoR1Cap = 5;
  const neuroR1Cap = 5;
  const gastroR1Cap = 7
  const radioR1Cap = 4;
  const radioR2Cap = 6;

  // Use States for initialising/updating data from API
  const [oncoData, setOncoData] = React.useState([]);
  const [neuroData, setNeuroData] = React.useState([]);
  const [gastroData, setGastroData] = React.useState([]);
  const [radioR1Data, setRadioR1Data] = React.useState([]);
  const [radioR2Data, setRadioR2Data] = React.useState([]);
  const [oncoTimeCapData, setOncoTimeCapData] = React.useState([]);
  const [neuroTimeCapData, setNeuroTimeCapData] = React.useState([]);
  const [gastroTimeCapData, setGastroTimeCapData] = React.useState([]);
  const [radioR1TimeCapData, setRadioR1TimeCapData] = React.useState([]);
  const [radioR2TimeCapData, setRadioR2TimeCapData] = React.useState([]);

  // Use Effect to rerender page with updated data from API
  React.useEffect(() => {
    const getData = async () => {
      const oncoData = await getOncoR1Enter();
      const neuroData = await getNeuroR1Enter();
      const gastroData = await getGastroR1Enter();
      const radioR1Data = await getRadioR1Enter();
      const radioR2Data = await getRadioR2Enter();
      const oncoTimeCapData = await getOncoR1Time();
      const neuroTimeCapData = await getNeuroR1Time();
      const gastroTimeCapData = await getGastroR1Time();
      const radioR1TimeCapData = await getRadioR1Time();
      const radioR2TimeCapData = await getRadioR2Time();
      setOncoData(oncoData);
      setNeuroData(neuroData);
      setGastroData(gastroData);
      setRadioR1Data(radioR1Data);
      setRadioR2Data(radioR2Data);
      setOncoTimeCapData(oncoTimeCapData);
      setNeuroTimeCapData(neuroTimeCapData);
      setGastroTimeCapData(gastroTimeCapData);
      setRadioR1TimeCapData(radioR1TimeCapData);
      setRadioR2TimeCapData(radioR2TimeCapData);
    }
    getData();
    return () => {
    };

  }, [oncoData, neuroData, gastroData, radioR1Data, radioR2Data, oncoTimeCapData, neuroTimeCapData, gastroTimeCapData, radioR1TimeCapData, radioR2TimeCapData]);

  // Calculates the overall average scores (time utilisation, specificity, capacity) for the entire hospital
  var totalspecificity = 0;
  var totalTime = 0;
  var totalCap = 0;
  if (typeof oncoData === 'object' && oncoData.length > 0) {
    var oncoRoom1Time = TimeCalc(oncoTimeCapData)
    var neuroRoom1Time = TimeCalc(neuroTimeCapData)
    var gastroRoom1Time = TimeCalc(gastroTimeCapData)
    var radioRoom1Time = TimeCalc(radioR1TimeCapData)
    var radioRoom2Time = TimeCalc(radioR2TimeCapData)
    totalTime = Math.floor((oncoRoom1Time + neuroRoom1Time + gastroRoom1Time + radioRoom1Time + radioRoom2Time) / 5);
    var oncoRoom1Specificity = SpecCalc(oncoData, 1)
    var neuroRoom1Specificity = SpecCalc(neuroData, 2)
    var gastroRoom1Specificity = SpecCalc(gastroData, 3)
    var radioRoom1Specificity = SpecCalc(radioR1Data, 4)
    var radioRoom2Specificity = SpecCalc(radioR2Data, 4)
    totalspecificity = Math.floor((oncoRoom1Specificity + neuroRoom1Specificity + gastroRoom1Specificity + radioRoom1Specificity + radioRoom2Specificity) / 5);
    var oncoRoom1Cap = CapCalc(oncoTimeCapData, oncoR1Cap)
    var neuroRoom1Cap = CapCalc(neuroTimeCapData, neuroR1Cap)
    var gastroRoom1Cap = CapCalc(gastroTimeCapData, gastroR1Cap)
    var radioRoom1Cap = CapCalc(radioR1TimeCapData, radioR1Cap)
    var radioRoom2Cap = CapCalc(radioR2TimeCapData, radioR2Cap)
    totalCap = Math.floor((oncoRoom1Cap + neuroRoom1Cap + gastroRoom1Cap + radioRoom1Cap + radioRoom2Cap) / 5);
  }

  const [displayRecommendations, setDisplayRecommendations] = React.useState(false);

  React.useEffect(() => {
    if ((oncoRoom1Specificity <= 30)
      || (neuroRoom1Specificity <= 30)
      || (gastroRoom1Specificity <= 30)
      || (radioRoom1Specificity <= 30)
      || (radioRoom2Specificity <= 30)
      || (oncoRoom1Time <= 30)
      || (neuroRoom1Time <= 30)
      || (gastroRoom1Time <= 30)
      || (radioRoom1Time <= 30)
      || (radioRoom2Time <= 30)
      || (oncoRoom1Cap <= 20)
      || (neuroRoom1Cap <= 20)
      || (gastroRoom1Cap <= 20)
      || (radioRoom1Cap <= 20)
      || (radioRoom2Cap <= 20)
      || (oncoRoom1Cap > 100)
      || (neuroRoom1Cap > 100)
      || (gastroRoom1Cap > 100)
      || (radioRoom1Cap > 100)
      || (radioRoom2Cap > 100)) {
      setDisplayRecommendations(true)
    } else {
      setDisplayRecommendations(false)
    }
  }, [oncoRoom1Specificity, neuroRoom1Specificity, gastroRoom1Specificity, radioRoom1Specificity, radioRoom2Specificity,
    oncoRoom1Time, neuroRoom1Time, gastroRoom1Time, radioRoom1Time, radioRoom2Time,
    oncoRoom1Cap, neuroRoom1Cap, gastroRoom1Cap, radioRoom1Cap, radioRoom2Cap]);

  return (
    <div>
      {RecommendationsButton(displayRecommendations)}
      <button className='overall-performance'>
        <div className='overall-performance-text'>
          Overall Performance
        </div>

        <div className='UtilisationBarHome'>
          {UtilisationBarTime(totalTime)}
        </div>
        <div className='UtilisationBarHome'>
          {UtilisationBarSpec(totalspecificity)}
        </div>
        <div className='UtilisationBarHome'>
          {UtilisationBarCap(totalCap)}
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

      <Link to="/OncologyR1Live">
        <button className='roomtop'>
          <h1>
            Oncology Room 1
            <img src={arrow} className='arrow' alt='arrow' />
          </h1>
        </button>
      </Link>

      <Link to="/NeurologyR1Live">
        <button className='room'>
          <h1>
            Neurology Room 1
            <img src={arrow} className='arrow' alt='arrow' />
          </h1>
        </button>
      </Link>

      <Link to="/GastrologyR1Live">
        <button className='room'>
          <h1>
            Gastrology Room 1
            <img src={arrow} className='arrow' alt='arrow' />
          </h1>
        </button>
      </Link>

      <Link to="/RadiologyR1Live">
        <button className='room'>
          <h1>
            Radiology Room 1
            <img src={arrow} className='arrow' alt='arrow' />
          </h1>
        </button>
      </Link>

      <Link to="/RadiologyR2Live">
        <button className='roombottom'>
          <h1>
            Radiology Room 2
            <img src={arrow} className='arrow' alt='arrow' />
          </h1>
        </button>
      </Link>
    </div>
  )
}

export default Home

