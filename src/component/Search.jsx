import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/input.css'
import image from '../video/hdtack.mp4'
import Typical from 'react-typical'
import Footer from './Footer'

// import img from '../images/airplan.jpg'
// import { Form, Button, Col, Row } from 'react-bootstrap';

export default function Search() {
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [simpleGo, setSimpleGo] = useState("")
    const [goAndReturn, setGoAndReturn] = useState("")
    const [passengers, setpassengers] = useState("")
    const [aller, setAller] = useState("")
    const [retour, setRetour] = useState(true)
    const [to, setTo] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [dateretour, setDateretour] = useState("")
    const [timeretour, setTimeretour] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (aller && to) {
            console.log('success !', aller, to, date, time, dateretour, timeretour, simpleGo, goAndReturn, passengers, nom, prenom);
        } else {
            console.error('saisir From ... et To ...');
        }
    }

    function Affiche() {
        setRetour(!retour)
    }

    return (
        <>
            <video className="vid" loop muted autoPlay>
                <source src={image} />
            </video>
            <div className="col-12">
                <div className="container rounded mt-4 p-3">
                    {/* form */}
                    <div>
                        <form className="p-4 col-5" >
                            <div>
                                <div className="form-check">
                                    <input onChange={(e) => setSimpleGo(e.target.value)} className="form-check-input" value="SIMPLE GO" type="checkbox" id="check1" />
                                    <label htmlFor="check1"><p>Aller Simple</p></label>
                                </div>
                            </div>
                            <div>
                                <div className="form-check">
                                    <input type="checkbox" onChange={(e) => setGoAndReturn(e.target.value)} className="form-check-input" value="GO AND RETURN" id="check2" onClick={() => Affiche()} />
                                    <label htmlFor="check2"><p>Aller-Retour</p></label>
                                </div>
                            </div>

                            {/* start of input  */}
                            <div className="mb-3">
                                <input type="text" onChange={(e) => setNom(e.target.value)} className="form-control" placeholder="Nom ..." />
                            </div>
                            <div className="mb-3">
                                <input type="text" onChange={(e) => setPrenom(e.target.value)} className="form-control" placeholder="Prénom ..." />
                            </div>
                            <div className="mb-3 fusterA">
                                <input type="text" onChange={(e) => setAller(e.target.value)} className="form-control" placeholder="Départ ..." />
                                <i class="fas fa-plane-departure"></i>
                            </div>
                            <div className="mb-3 fusterB">
                                <input type="text" onChange={(e) => setTo(e.target.value)} className="form-control" placeholder="Arrivée ..." />
                                <i className="fas fa-plane-arrival"></i>
                            </div>
                            <div className="mb-3">
                                <input type="date" onChange={(e) => setDate(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input type="time" onChange={(e) => setTime(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3 passenger">
                                <input type="number" onChange={(e) => setpassengers(e.target.value)} className="form-control" placeholder="Passagers" />
                                <i className="fa fa-user fa-lg"></i>
                            </div>
                            {!retour &&
                                <>
                                    <div>
                                        <p className="p-search">Retour :</p>
                                    </div>
                                    <div className="mb-3">
                                        <input type="date" onChange={(e) => setDateretour(e.target.value)} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="time" onChange={(e) => setTimeretour(e.target.value)} className="form-control" />
                                    </div>
                                </>
                            }

                            <button type="submit" onClick={handleSubmit} className="btn">Envoyez</button>
                        </form>
                    </div>

                    <div className="position-absolute top-50 start-50 text-center d-flex flex-row-reverse" >
                        <h1 style={{ color: "white" }}>
                            {/* <strong></strong>  {' '} */}
                            <Typical loop={Infinity} wrapper="b" steps={[
                                'PARIS', 1000, 'LONDON', 1000, 'NEW YORK', 1000, 'Partout dans le monde', 1000
                            ]} />
                        </h1>
                    </div>

                </div>
            </div>

            <Footer/>
        </>
    )
}

