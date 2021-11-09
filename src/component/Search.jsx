import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/input.css'
import image from '../images/video.mp4'
// import img from '../images/airplan.jpg'
// import { Form, Button, Col, Row } from 'react-bootstrap';


export default function Search() {
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
            console.log('success !', aller, to, date, time, dateretour, timeretour, simpleGo, goAndReturn, passengers);
        } else {
            console.error('saisir From ... et To ...');
        }
    }

    function Affiche() {
        setRetour(!retour)
    }

    return (
        <div className="body col-12">
            <video className="vid" loop muted autoPlay>
                <source src={image} />
            </video>
            <div className="container row col-6 justify-content-start ms-5 rounded mt-4 p-3">

                <form className="p-3 col-10">
                    <div>
                        <div className="form-check">
                            <input onChange={(e) => setSimpleGo(e.target.value)} className="form-check-input" value="SIMPLE GO" type="checkbox" id="check1" />
                            <label htmlFor="check1"><p>SIMPLE GO</p></label>
                        </div>
                    </div>
                    <div>
                        <div className="form-check">
                            <input type="checkbox" onChange={(e) => setGoAndReturn(e.target.value)} className="form-check-input" value="GO AND RETURN" id="check2" onClick={() => Affiche()} />
                            <label htmlFor="check2"><p>GO-RETURN</p></label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <input type="text" onChange={(e) => setAller(e.target.value)} className="form-control" placeholder="From ..." />
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setTo(e.target.value)} className="form-control" placeholder="To..." />
                    </div>
                    <div className="mb-3">
                        <input type="date" onChange={(e) => setDate(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input type="time" onChange={(e) => setTime(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <input type="number" onChange={(e) => setpassengers(e.target.value)} className="form-control" placeholder="passengers" />
                    </div>
                    {!retour &&
                        <>
                            <div>
                                <p>Return :</p>
                            </div>
                            <div className="mb-3">
                                <input type="date" onChange={(e) => setDateretour(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input type="time" onChange={(e) => setTimeretour(e.target.value)} className="form-control" />
                            </div>
                        </>
                    }

                    <button type="submit" onClick={handleSubmit} className="btn">Submit</button>
                </form>

            </div>
        </div>
    )
}

