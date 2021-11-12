import React from 'react'
import bookingFlight from '../images/mini-photo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import imageOne from '../images/destination_photo/paris.jpg'
import imageTwo from '../images/destination_photo/ny.jpg'
import imageThird from '../images/destination_photo/rome.jpg'
import { Link } from "react-router-dom";
import homeimg from '../images/destination_photo/planeh.jpg'
import Typical from 'react-typical'
import flight from '../images/aire.jpg'
import flight2 from '../images/confort.jpg'
import logo from '../images/logo1.png'
import '../css/home.css'

export default function HomeMain() {
    return (
        <>

            {/* Le premier block */}
            <div>
                <img src={homeimg} alt="" className="img-plane" />
                <h1 style={{ position: "absolute", top: "55%", left: "37%", color: "black", zIndex: "0" }}><strong>Welcome</strong>  {' '}
                    <Typical loop={Infinity} wrapper="b" steps={[
                        ' to travel', 1000, ' in SKYJET', 1000
                    ]} />
                </h1>
            </div>


            {/* 2em Carousel les photos des destinations */}
            <div className="home-class">
                <h1 className='home-title'>Trouver votre destination</h1>
                <div className="line-title"></div>
            </div>
            <div className="carousel">
                <Link className="nav-link" to="/Register">

                    <Carousel>
                        <Carousel.Item interval={2500}>
                            <img
                                className="d-block"
                                src={imageOne}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 className="paris">PARIS</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2500}>
                            <img
                                className="d-block"
                                src={imageTwo}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3 className="newyork">NEW-YORK</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2500} >
                            <img
                                className="d-block"
                                src={imageThird}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3 className="rome" >ROME</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Link>
            </div>

            {/* 3em Reserver un vol */}
            <div className="home-class">
                <h1 className='home-title'>Réserver un vol</h1>
                <div className="line-title"></div>
            </div>

            <div className="all-block">
                <img
                    className="booking-flight"
                    src={bookingFlight}
                    alt="Third slide"
                />

                <div className="grey-container"></div>
                <div className="text-descri">
                    <h2> PARTOUT DANS LE MONDE</h2>
                    <p> Luxury Plane propose des options d’affrètement de jet privé entre tous les aéroports mondiaux</p>
                    <br />
                    <h2> SÛRETÉ ET SÉCURITÉ</h2>
                    <p> Un engagement sans compromis pour la sécurité est ce qui distingue véritablement Luxury Plane. La sérénité de nos clients imprègne chaque décision au sein de notre organisation..</p>
                    <br />
                    <h2>AVIONS MODERNES</h2>
                    <p>Notre affrètement de jet privé est équipé pour satisfaire toutes vos demande – que vous ayez besoin d’une suite d’affaires entièrement équipée ou d’un lieu reposant loin de la maison.</p>
                    <br />
                    <h2> RAPIDE ET ABORDABLE</h2>
                    <p>Les prix de l’aviation privée dépendent d’un certain nombre de facteurs, notamment la disponibilité des avions et les frais d’atterrissage à l’aéroport. Vous seriez surpris d’apprendre qu’un vol privé pourrait vous coûter moins cher que prévu.</p>

                </div>
            </div>
            <Link className="nav-link" to="/Reserch">
                <button className="btn-booking">Réserver un vol</button>
            </Link>

            {/* fin 3em reserver un vol */}




            {/* 4 em block Nos avions  */}

            <div className="home-class">
                <h1 className='home-title'>Nos avions</h1>
                <div className="line-title"></div>
            </div>

            <div className="img-cont">
                <div className="first-block">
                    <h3><strong>Securite</strong></h3>
                    <p className="text-first" style={{ color: "black" }} >Tous les avions sont entretenus pour respecter et dépasser les normes de sécurité européennes fixées par l’Agence Européenne de la Sécurité Aérienne (EASA).</p>
                    <Link className="link" to="/Avions">
                        En savoir +
                    </Link>

                </div>

                <div className="second-block">
                    <img className="flight-one" src={flight} alt=" tof d'un avion" />
                    <div className="text-snd">
                        <h3><strong>Confort</strong></h3>
                        <p style={{ position: "relative", top: "12rem", color: "black" }} className="text-second"> Voler devrait être un plaisir et nous rendrons votre expérience de vol aussi luxueuse et confortable que possibles</p>
                        <Link className="link" to="/Avions">
                            En savoir +
                        </Link>
                    </div>
                    <img className="flight-two" src={flight2} alt="tof d'un avion" />
                </div>
            </div>

            {/* fin 4em block Nos avions */}



            {/* dernier block de footer  */}
            <div class="footer-dark">
                <footer>
                    <div class="container">
                        <img src={logo} className="logo" alt="" srcset="" />
                        <div class="row">
                            <div class="col-sm-6 col-md-3 item">

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
                            <div class="col-sm-6 col-md-3 item">
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
                            <div class="col-md-6 item text">
                                <h3>Company Name</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                            </div>
                            <div><p class="copyright">Company Name © 2018</p></div>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}
