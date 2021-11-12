import React, { useEffect, useState } from "react";

import CardPlane from "../component/Card.avion";


export default function Avions() {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=10')
      .then(res => res.json())
      .then(json => setImages(json))
  }, [])




  return (

    <>
      <div className="header">
      </div>
      <div className='container-card-avion'>

        {images.map(image => (
          <CardPlane images={image} />
        ))}
      </div>

    </>

  );
}
