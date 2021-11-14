import React, { useEffect } from 'react';
import dataAircrafts from '../dataJson/AircraftData'


const DataJets = (props) => {
    const { category } = props
    const chosenCategory = dataAircrafts.category
    console.log('data :>> ', dataAircrafts);
    console.log('category :>> ', category);
    console.log('chosenCategory.images.exterior :>> ', dataAircrafts.category.images.exterior);



    return (
        <div>
            <h1>hello</h1>
            <div className="header">
                <img src={chosenCategory.images.exterior} alt={chosenCategory.title} />
            </div>
            <section className="description-specification">
                <div className="dataInfo">
                    <h2>{chosenCategory.title}</h2>
                    <p>{chosenCategory.description}</p>
                </div>
                <div className="specification">
                    <ul className="list">
                        <li className="listData">PASSENGER CAPACITY:{chosenCategory.specification['PASSENGER CAPACITY']}</li>

                        <li className="listData">MAX RANGE:{chosenCategory.specification['MAX RANGE']}</li>

                        <li className="listData">MAX OPERATIONAL SPEED:{chosenCategory.specification['MAX OPERATIONAL SPEED']}</li>

                        <li className="listData">CABIN HEIGHT:{chosenCategory.specification['CABIN HEIGHT']}</li>

                        <li className="listData">CABIN WIDTH:{chosenCategory.specification['CABIN WIDTH']}</li>

                        <li className="listData">CABIN LENGTH:{chosenCategory.specification['CABIN LENGTH']}</li>

                    </ul>
                </div>
            </section>

            <section className="img-cabin">
                <img src={chosenCategory.images.cabin} alt={chosenCategory.title} />
            </section>

        </div>
    );
};

export default DataJets;