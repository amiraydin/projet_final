import React, { useEffect, useState } from "react";
import Typical from 'react-typical'
import CardPlane from "../component/Card.avion";
// import neon from '../video/neonRedBlue.mp4'

export default function Avions() {
  const [categories, setCategories] = useState('')

  // useEffect(() => {
  //   fetch('https://picsum.photos/v2/list?page=2&limit=10')
  //     .then(res => res.json())
  //     .then(json => setImages(json))
  // }, [])


  useEffect(() => {
    setCategories('')
  }, [])




  return (

    <>
      {categories ?
        <div className='containerJetCategory'>
          <h1 style={{ position: "absolute", top: "20%", left: "17%", color: "white", zIndex: "0", width: "auto" }}>
            <Typical loop={1} wrapper='b' steps={[
              'Model', 1000, categories, 1000
            ]} />
          </h1>



        </div>

        :
        <>
          <div className="header">
            <h1 style={{ position: "absolute", top: "20%", left: "17%", color: "white", zIndex: "0", width: "auto" }}><strong>Check</strong>  {' '}
              <Typical loop={1} wrapper='b' steps={[
                'Our Light Jets', 1000, 'Our Medium Jets', 1000, 'Our Heavy Jets', 1000, 'that shit !', 100
              ]} />
            </h1>
          </div>
          <div className='container-card-avion'>
          
            <CardPlane categories={setCategories} />
          </div>
        </>
      }
    </>

  );
}
