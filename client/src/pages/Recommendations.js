import React from 'react'
import SpecRecRadiology1 from '../components/RecommendationsComponents/RadioR1Rec'
import SpecRecRadiology2 from '../components/RecommendationsComponents/RadioR2Rec'
import SpecRecGastro1 from '../components/RecommendationsComponents/GastroR1Rec'
import SpecRecNeurology1 from '../components/RecommendationsComponents/NeuroR1Rec'
import SpecRecOncology1 from '../components/RecommendationsComponents/OncoR1Rec'
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

const Recommendations = () => {

    // constants for the rooms' capacities
    const oncoR1Cap = 5;
    const neuroR1Cap = 5;
    const gastroR1Cap = 7
    const radioR1Cap = 4;
    const radioR2Cap = 6;

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

    if (typeof oncoData === 'object' && oncoData.length > 0) {
        var oncoRoom1Time = TimeCalc(oncoTimeCapData)
        var neuroRoom1Time = TimeCalc(neuroTimeCapData)
        var gastroRoom1Time = TimeCalc(gastroTimeCapData)
        var radioRoom1Time = TimeCalc(radioR1TimeCapData)
        var radioRoom2Time = TimeCalc(radioR2TimeCapData)
        var oncoRoom1Specificity = SpecCalc(oncoData, 1)
        var neuroRoom1Specificity = SpecCalc(neuroData, 2)
        var gastroRoom1Specificity = SpecCalc(gastroData, 3)
        var radioRoom1Specificity = SpecCalc(radioR1Data, 4)
        var radioRoom2Specificity = SpecCalc(radioR2Data, 4)
        var oncoRoom1Cap = CapCalc(oncoTimeCapData, oncoR1Cap)
        var neuroRoom1Cap = CapCalc(neuroTimeCapData, neuroR1Cap)
        var gastroRoom1Cap = CapCalc(gastroTimeCapData, gastroR1Cap)
        var radioRoom1Cap = CapCalc(radioR1TimeCapData, radioR1Cap)
        var radioRoom2Cap = CapCalc(radioR2TimeCapData, radioR2Cap)
        }
        // determines if Radiology room 1  recommendation appears
        const [displayRadiologySpecR1, setDisplayRadiologyR1Spec] = React.useState(false);
        React.useEffect(() => {
            if ((radioRoom1Specificity <= 30) || (radioRoom1Time <= 30) || (radioRoom1Cap <= 20) || (radioRoom1Cap >= 100)) {
                setDisplayRadiologyR1Spec(true)
            } else {
                setDisplayRadiologyR1Spec(false)
            }
        }, [radioRoom1Specificity, radioRoom1Time, radioRoom1Cap]);

        // determines if Radiology room 2  recommendation appears
        const [displayRadiologySpecR2, setDisplayRadiologyR2Spec] = React.useState(false);
        React.useEffect(() => {
            if ((radioRoom2Specificity <= 30) || (radioRoom2Time <= 30) || (radioRoom2Cap <= 20) || (radioRoom2Cap >= 100)) {
                setDisplayRadiologyR2Spec(true)
            } else {
                setDisplayRadiologyR2Spec(false)
            }
        }, [radioRoom2Specificity, radioRoom2Time, radioRoom2Cap]);

        // determines if Gastrology room 1  recommendation appears
        const [displayGastrologySpecR1, setDisplayGastrologyR1Spec] = React.useState(false);
        React.useEffect(() => {
            if ((gastroRoom1Specificity <= 30) || (gastroRoom1Time <= 30) || (gastroRoom1Cap <= 20) || (gastroRoom1Cap >= 100)) {
                setDisplayGastrologyR1Spec(true)
            } else {
                setDisplayGastrologyR1Spec(false)
            }
        }, [gastroRoom1Specificity, gastroRoom1Time, gastroRoom1Cap]);

        // determines if Neurology room 1  recommendation appears
        const [displayNeurologySpecR1, setDisplayNeurologyR1Spec] = React.useState(false);
        React.useEffect(() => {
            if ((neuroRoom1Specificity <= 30) || (neuroRoom1Time <= 30) || (neuroRoom1Cap <= 20) || (neuroRoom1Cap >= 100)) {
                setDisplayNeurologyR1Spec(true)
            } else {
                setDisplayNeurologyR1Spec(false)
            }
        }, [neuroRoom1Specificity, neuroRoom1Time, neuroRoom1Cap]);


        // determines if Oncology room 1  recommendation appears
        const [displayOncologySpecR1, setDisplayOncologyR1Spec] = React.useState(false);
        React.useEffect(() => {
            if ((oncoRoom1Specificity <= 30) || (oncoRoom1Time <= 30) || (oncoRoom1Cap <= 20) || (oncoRoom1Cap >= 100)) {
                setDisplayOncologyR1Spec(true)
            } else {
                setDisplayOncologyR1Spec(false)
            }
        }, [oncoRoom1Specificity, oncoRoom1Time, oncoRoom1Cap]);

        return (
            <div>
                {SpecRecRadiology1(displayRadiologySpecR1, radioRoom1Time, radioRoom1Specificity, radioRoom1Cap)}
                {SpecRecRadiology2(displayRadiologySpecR2, radioRoom2Time, radioRoom2Specificity, radioRoom2Cap)}
                {SpecRecGastro1(displayGastrologySpecR1, gastroRoom1Time, gastroRoom1Specificity, gastroRoom1Cap)}
                {SpecRecNeurology1(displayNeurologySpecR1, neuroRoom1Time, neuroRoom1Specificity, neuroRoom1Cap)}
                {SpecRecOncology1(displayOncologySpecR1, oncoRoom1Time, oncoRoom1Specificity, oncoRoom1Cap)}
            </div>
        )
    }

    export default Recommendations