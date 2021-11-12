
import React from "react";
// import airplan from '../images/airplan.jpg'
import '../css/avion.css'


export default function CardPlane(props) {
  const {images} = props

console.log(images)


  return (
    <>
        <div className="card">
          <div className="card-container-img">
            <img className="img-card" key={images.id} src={images.download_url} alt={images.id} />
          </div>
          <div className="card-container-infos">
            <p>{images.author}</p>
          </div>
        </div>
    </>


  )

}




