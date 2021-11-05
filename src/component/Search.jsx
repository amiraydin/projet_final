import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import image from '../images/vid.mp4'
import img from '../images/airplan.jpg'
// import { Form, Button, Col, Row } from 'react-bootstrap';


export default function Search() {
    const [aller, setAller] = useState("")
    const [to, setTo] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [dateretour, setDateretour] = useState("")
    const [timeretour, setTimeretour] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (aller && to) {
            console.log('success !', aller, to, date, time, dateretour, timeretour);
        } else {
            console.error('saisir De ... et A ...');
        }
    }

    return (
        <>
            <div className="container col-12 bg-warning rounded" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", height: "100vh" }} >
                <form className="p-3 col-6" >
                    <div className="mb-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check1" />
                            <label htmlFor="check1">ALLER SIMPLE</label>
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check1" />
                            <label htmlFor="check1">ALLER-RETOUR</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <input type="text" onChange={(e) => setAller(e.target.value)} id="disabledTextInput" className="form-control" placeholder="DE ..." />
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setTo(e.target.value)} id="disabledTextInput" className="form-control" placeholder="A ..." />
                    </div>
                    <div className="mb-3">
                        <input type="date" onChange={(e) => setDate(e.target.value)} id="disabledTextInput" className="form-control" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <input type="time" onChange={(e) => setTime(e.target.value)} id="disabledTextInput" className="form-control" placeholder="" />
                    </div>

                    <div>
                        <p>Retour :</p>
                    </div>
                    <div className="mb-3">
                        <input type="date" onChange={(e) => setDateretour(e.target.value)} id="disabledTextInput" className="form-control" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <input type="time" onChange={(e) => setTimeretour(e.target.value)} id="disabledTextInput" className="form-control" placeholder="" />
                    </div>

                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
