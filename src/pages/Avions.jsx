import React, { useState } from "react";
import { Navbar } from "react-bootstrap";

import CardPlane from "../component/Card.avion";
import '../css/avion.css'

export default function Avions() {
  const [dataCountries, setDataCountries] = useState([])




  return (

    <>

      <div className='container-avion'>
        <div className="cloud-avion-1"></div>
        <div className="cloud-avion-2"></div>
        <div className="cloud-avion-3"></div>
        <CardPlane />
      </div>

    </>

  );
}
