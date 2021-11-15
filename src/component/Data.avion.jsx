import React from 'react';
import data from '../dataJson/AircraftData'
import Typical from 'react-typical'



const DataJets = (props) => {
    const { category } = props
    const chosenCategory = data[category]
    console.log('data :>> ', data);
    console.log('category :>> ', category);
    console.log('chosenCategory :>> ', chosenCategory);



    return (


        <div>
            
                <h1 style={{ position: "absolute", top: "20%", left: "17%", color: "white", zIndex: "0", width: "auto" }}>
                    <Typical loop={1} wrapper='b' steps={[
                        'Model', 1000, chosenCategory.title, 1000
                    ]} />
                </h1>
                <button onClick={()=>window.location.reload()} style={{ position: "absolute", top: "20%", right: "17%", color: "black", zIndex: "0", width: "auto" }} >return</button>
            
            {chosenCategory &&
                <>
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
                </>
            }
        </div>
    );
};

export default DataJets;