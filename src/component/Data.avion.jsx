import React from 'react';
import data from '../dataJson/AircraftData.json'


const DataJets = (props) => {    
    const {category} =  props
    console.log(data)



    return (
        <div>
            <img src="" alt={category} />
        </div>
    );
};

export default DataJets;