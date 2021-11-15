import React, { useEffect, useState } from "react";
import Typical from 'react-typical'
import CardPlane from "../component/Card.avion";
import '../'
import DataJets from "../component/Data.avion";

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
        <>
          
          <div className='container-avion-detail'>
            <DataJets category={categories}/>
          </div>
        </>
        :
        <>
          <div className="header">
            <h1 style={{ position: "absolute", top: "20%", left: "17%", color: "white", zIndex: "0", width: "auto" }}><strong>Check</strong>  {' '}
              <Typical loop={1} wrapper='d' steps={[
                'Our Light Jets', 2000, 'Our Medium Jets', 2000, 'Our Heavy Jets', 2000, 'That 💩!', 100
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
