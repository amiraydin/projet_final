import React from 'react'
import bookingFlight from '../images/mini-photo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import imageOne from '../images/destination_photo/paris.jpg'
import imageTwo from '../images/destination_photo/ny.jpg'
import imageThird from '../images/destination_photo/rome.jpg'
import video from '../images/video.mp4'
import { Link } from "react-router-dom";
import homeimg from '../images/destination_photo/planeh.jpg'
import Typical from 'react-typical'
import flight from '../images/aire.jpg'
import flight2 from '../images/airplan.jpg'
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

            <div className="first-flex">
                <div className="img-cont">
                    <h3>Confort</h3>
                    <p style={{ color: "black" }}  >Nous fournissons des affrètements d’avions aux professionnels, afin de maximiser leur efficacité en temp
                        <Link className="nav-link" to="/Avions">
                        </Link>
                    </p>
                </div>

                <div className="second-flex">
                <img className="flight-one" src={flight} alt="Photo d'un avion" />
                <h3>Securite</h3>
                <p style={{ color: "black" }}  >Nous fournissons des affrètements d’avions aux professionnels, afin de maximiser leur efficacité en temp</p>
                <img className="flight-two
            " src={flight2} alt="Photo d'un avion" />
            </div>
            </div>







        </>
    )
}
