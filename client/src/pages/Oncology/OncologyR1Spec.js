import React from 'react'
import OncologyHeader from '../../components/OncologyHeader'
import UtilisationBarSpec from '../../components/UtilisationBarSpec'
import BarChart from '../../components/SpecPageComponents/BarChart';
import StackedBarChart from '../../components/SpecPageComponents/StackedBarChart';
import getOncoR1Spec from '../../fetch/OncoR1/getOncoR1Spec';

const OncologyR1Spec = () => {

    const [oncoData, setOncoData] = React.useState([]);

    // this is just code to make the progress bar move/ will be changed to database data
    React.useEffect(() => {
        const getData = async () => {
            const oncoData = await getOncoR1Spec();
            setOncoData(oncoData);
        }
        getData();
        return () => {

        };
    }, []);

    var oncoCount = 0;
    var staffList = [];
    var specificity = 0;

    for (let i = 0; i < oncoData.length; i++) {
        var role_id = oncoData[i].role_id;
        if (role_id === 1) {
            oncoCount += 1;
        }
        staffList.push(role_id)
    }

    if (typeof oncoData === 'object' && oncoData.length > 0) {
        // the array is defined and has at least one element
        specificity = Math.floor((oncoCount / staffList.length) * 100);
    }

    return (
        <div>
            <OncologyHeader />
            <div className="totalCount">
                Room Specificity
                <div className="line-1" />
                <div className='utilisationbar'>
                    {UtilisationBarSpec(specificity)}
                </div>
            </div>
            <div className="staffCount">
                Role Breakdown
                <div className="line-1" />
                <div className='barGraph'>
                    {BarChart(staffList)}
                </div>
            </div>
            {StackedBarChart(oncoData)}
        </div>
    )
}

export default OncologyR1Spec