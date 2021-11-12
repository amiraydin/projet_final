import React from 'react'
import "../css/aboutUs.css"
import { Link } from "react-router-dom";
import logo from '../images/logo1.png'


import airline1 from "../images/sponsor/Air-france.png"
import airline2 from "../images/sponsor/american.jpg"
import airline3 from "../images/sponsor/British.jpg"
import airline4 from "../images/sponsor/emirates.png"
import airline5 from "../images/sponsor/Lufthansa-Logo.png"
import airline6 from "../images/sponsor/qatar-airlines.png"
import airline7 from "../images/sponsor/flydubai.png"
import airline8 from "../images/sponsor/malaysia.png"
import airline9 from "../images/sponsor/suise.jpg"
import airline10 from "../images/sponsor/maurice.png"


export default function About() {
    return (
        <div className="about-full-block">

            <div className="about-section">
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
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <img src={logo} className="logo" alt="" srcset="" />
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">

                                <h3>Services</h3>
                                <ul>
                                    <li><Link to="/Avions">
                                        Avions
                                    </Link></li>
                                    <li><Link to="/Register">
                                        Destination
                                    </Link></li>
                                    <li><Link to="/Reserch">
                                        Réserver un vol
                                    </Link></li>
                                    <li> <Link to="/Aproposdenous">
                                        A propos de nous
                                    </Link></li>


                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li> <Link className="#" to="/Avions">
                                        Avions
                                    </Link></li>
                                    <li><Link className="#" to="/Register">
                                        Destination
                                    </Link></li>
                                    <li><Link className="#" to="/Reserch">
                                        Réserver un vol
                                    </Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Company Name</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                            </div>
                            <div><p className="copyright">Company Name © 2018</p></div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        
    )
}
