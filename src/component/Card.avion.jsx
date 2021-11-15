
import React from "react";
import '../css/card.avion.css'




export default function CardPlane(props) {
  const { categories } = props


  // const handleAircraftCategory = (category) => {

  //   switch(category) {
  //     case 'TurboProps':
  //       console.log('show TurboProps')
  //       setCategories(category)
  //     break;
  //     case 'LigthJets':
  //       console.log('show LigthJets')
  //       setCategories(category)
  //     break;
  //     case 'MidSizeJets':
  //       console.log('show MidSizeJets')
  //       setCategories(category)
  //     break;
  //     case 'SuperMidJets':
  //       console.log('show SuperMidJets')
  //       setCategories(category)
  //     break;
  //     case 'HeavyJets':
  //       console.log('show HeavyJets')
  //       setCategories(category)
  //     break;

  //     default:
  //       console.log('default trigged')

  //   }
  // }


  return (
    <>

      <div className="header-avion-models">
        <h1 style={{ position: "absolute", top: "15%", left: "10%", color: "white", zIndex: "0", width: "90vw" }}>Aircrafts</h1>
      </div>
      <div className='container-card-avion'>
        <p style={{ position: "absolute", top: "5%", left: "5%", color: "white", zIndex: "0", width: "90vw", fontSize: "1.5rem" }}>

          All private aircraft offer their passenger the same comfort and service level on the ground – private terminals (FBO), VIP facilities, shortened or no security lines, private Immigration and Customs facilities and ability to drive up to the aircraft (at select airports). However, once you pass the private terminal doors and walkout to the jet awaiting you, no two aircraft types are the same.

        </p>


        <div className="card" >
          <div className="card-container-infos">
            <h3>Turbo props</h3>
            <ul className='list'>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-plane'></i>
                </span>
                <span className='title'>Max pax:9</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-group'></i>
                </span>
                <span className='title'>max range:1702 nm</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-up-arrow-alt'></i>
                </span>
                <span className='title'>cabin heigth: 4'5</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-credit-card'></i>
                </span>
                <span className='title'>hourly rate:$1,200 - $1800</span>
              </li>
            </ul>
          </div>
          <button onClick={() => categories('turboprops')}>show</button>
        </div>

        <div className="card" >        
          <div className="card-container-infos">
            <h3>Light jets</h3>
            <ul className='list'>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-plane'></i>
                </span>
                <span className='title'>Max pax:7</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-group'></i>
                </span>
                <span className='title'>max range:1900 nm</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-up-arrow-alt'></i>
                </span>
                <span className='title'>cabin heigth: 4'8</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-credit-card'></i>
                </span>
                <span className='title'>hourly rate:$2,200 - $2800</span>
              </li>
            </ul>
          </div>
          <button onClick={() => categories('lightJet')}>show</button>
        </div>


        <div className="card" >         
          <div className="card-container-infos">
            <h3>mid-size jets</h3>
            <ul className='list'>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-plane'></i>
                </span>
                <span className='title'>Max pax:8</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-group'></i>
                </span>
                <span className='title'>max range:2850 nm</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-up-arrow-alt'></i>
                </span>
                <span className='title'>cabin heigth: 5'8</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-credit-card'></i>
                </span>
                <span className='title'>hourly rate:$2,700 - $3,800</span>
              </li>
            </ul>
          </div>
          <button onClick={() => categories('midSizeJet')}>show</button>
        </div>




        <div className="card" >         
          <div className="card-container-infos">
            <h3>heavy jets</h3>
            <ul className='list'>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-plane'></i>
                </span>
                <span className='title'>Max pax:16</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bxs-group'></i>
                </span>
                <span className='title'>max range:4690 nm</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-up-arrow-alt'></i>
                </span>
                <span className='title'>cabin heigth: 6'5</span>
              </li>
              <li className="list-item list-item-icon">
                <span className='icon'>
                  <i class='bx bx-credit-card'></i>
                </span>
                <span className='title'>hourly rate:$5,000 - $7,200</span>
              </li>
            </ul>
          </div>
          <button onClick={() => categories('heavyJet')}>show</button>
        </div>

      </div>

    </>


  )

}




