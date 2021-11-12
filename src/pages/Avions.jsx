<<<<<<< HEAD
import React, { useEffect, useState } from "react";

=======
import React from "react";
>>>>>>> 1a512b66b05cb84745d71d68e518f0a2bca81a38
import CardPlane from "../component/Card.avion";


export default function Avions() {
<<<<<<< HEAD
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=10')
      .then(res => res.json())
      .then(json => setImages(json))
  }, [])
=======
  
>>>>>>> 1a512b66b05cb84745d71d68e518f0a2bca81a38




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
