import React from 'react';
import data from '../dataJson/AircraftData'
import Typical from 'react-typical'
import '../css/detail.avion.css'



const DataJets = (props) => {
    const { category } = props
    const chosenCategory = data[category]
    console.log('data :>> ', data);
    console.log('category :>> ', category);
    console.log('chosenCategory :>> ', chosenCategory);



    return (



        <div className='container-detail-avion'>


            <h1 style={{ position: "absolute", top: "20%", left: "5%", color: "white", zIndex: "0", width: "auto" }}>
                <Typical loop={1} wrapper='b' steps={[
                    'Model', 1000, chosenCategory.title, 1000
                ]} />
            </h1>
            <button onClick={() => window.location.reload()} >return</button>

            {chosenCategory &&
                <>
                    <div className="header-avion-detail">
                        <img className="img-header" src={chosenCategory.images.exterior} alt={chosenCategory.title} />
                    </div>
                    <section className="description-specification">
                        <div className="dataInfo">
                            <h2>{chosenCategory.title}</h2>
                            <p>{chosenCategory.description}</p>
                        </div>
                        <div className="specification">
                            <ul className="list-detail-ul">
                                <li className="listData">PASSENGER CAPACITY:<span>{chosenCategory.specification['PASSENGER CAPACITY']}</span></li>

                                <li className="listData">MAX RANGE:<span>{chosenCategory.specification['MAX RANGE']}</span></li>

                                <li className="listData">MAX OPERATIONAL SPEED:<span>{chosenCategory.specification['MAX OPERATIONAL SPEED']}</span></li>

                                <li className="listData">CABIN HEIGHT:<span>{chosenCategory.specification['CABIN HEIGHT']}</span></li>

                                <li className="listData">CABIN WIDTH:<span>{chosenCategory.specification['CABIN WIDTH']}</span></li>

                                <li className="listData">CABIN LENGTH:<span>{chosenCategory.specification['CABIN LENGTH']}</span></li>

                            </ul>
                        </div>
                    </section>

                    <section className="img-cabin">
                        <img className="img-cabin" src={chosenCategory.images.cabin} alt={chosenCategory.title} />
                    </section>
                </>
            }
        </div>

    );
};

export default DataJets;