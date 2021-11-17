import React from 'react'
import "../css/aboutUs.css"
import Footer from '../component/Footer'

import airline1 from "../images/about-image/Air-france.png"
import airline2 from "../images/about-image/american.jpg"
import airline3 from "../images/about-image/British.jpg"
import airline4 from "../images/about-image/emirates.png"
import airline5 from "../images/about-image/Lufthansa-Logo.png"
import airline6 from "../images/about-image/qatar-airlines.png"
import airline7 from "../images/about-image/flydubai.png"
import airline8 from "../images/about-image/malaysia.png"
import airline9 from "../images/about-image/suise.jpg"
import airline10 from "../images/about-image/maurice.png"
import plane_about from "../images/about-image/planeabout.jpg"


export default function About() {
    return (
        <div className="about-full-block">

            <div className="about-section">
                <img className="plane-about" src={plane_about} alt="" srcset="" />
                <h1>A propos de nous</h1>
                <p className="team-title" >Notre équipe</p>
            </div>
            
            <div className="row">
                <div className="column">
                    <div className="card">
                        <div className="container-about">
                            <h2>Theesan</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="container-about">
                            <h2>Sofiane</h2>
                            <p className="title">Chef de projet CTO</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <div className="container-about">
                            <h2>Amir</h2>
                            <p className="title">Lead Développeur Fullstack</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>


                <div className="last-block">
                    <div className="column">
                        <div className="card">
                            <div className="container-about">
                                <h2>Amir</h2>
                                <p className="title">Développeur Front-end</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="container-about">
                                <h2>Ishran</h2>
                                <p className="title">Développeur Front-end </p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

<div className="block-airlines">
    <img className="airlines" src={airline1} alt="" srcset="" />
    <img className="airlines" src={airline2} alt="" srcset="" />
    <img className="airlines" src={airline3} alt="" srcset="" />
    <img className="airlines" src={airline4} alt="" srcset="" />
    <img className="airlines" src={airline5} alt="" srcset="" />
    <img className="airlines" src={airline6} alt="" srcset="" />
    <img className="airlines" src={airline7} alt="" srcset="" />
    <img className="airlines" src={airline8} alt="" srcset="" />
    <img className="airlines" src={airline9} alt="" srcset="" />
    <img className="airlines" src={airline10} alt="" srcset="" />
    
</div>


{/* footer */}
            <Footer/>
        </div>
        
    )
}
