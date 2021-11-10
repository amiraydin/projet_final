
import React, { useState } from "react";
import airplan from '../images/airplan.jpg'

export default function CardPlane(props) {
    const [plane, setPlane] = useState(false)
    const { country } = props



    return (


      

        < div className='card-avion' >
            <div className="container-img">
                <img className='img-avion' src={airplan} alt='jet' />
            </div>
            <div className="divider"></div>
            <div className="data-container">
                <li><span>constructeur: </span>General Motors </li>
                <li><span>model: </span> Citation</li>
                <li><span>Nb de passagers: </span>5 </li>
                <li><span>vitesse max: </span> 800km/h</li>
            </div>          
        </div >



    )
}




