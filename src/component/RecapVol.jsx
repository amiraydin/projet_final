import React from 'react'
import '../css/recapVol.css'
import Map from './Map';

export default function RecapVol(props) {
    const { from, to, departurDate, departurTime, passengers, returnDate, returnTime, setBooked } = props

    return (
        <>
            <button
                className="BtnReturnResearch"
                onClick={() => setBooked(false)}
            >Retour</button>
            <div className="container-recap">
                <div className="blockLeftRecap">
                    <p>Lorem ipsum <strong>{from}</strong> dolor sit amet <strong>{to}</strong>  consectetur adipisicing <strong>{departurDate}</strong> elit <strong>{departurTime}</strong>. Possimus facere dignissimos cupiditate ratione in, aut voluptas ducimus aspernatur nihil error necessitatibus qui aperiam nisi corporis optio earum repudiandae saepe? Totam laudantium modi quo nobis rem sequi doloremque mollitia magnam consequuntur?</p>
                    <button className='btn-payer'>Reserver</button>
                </div>
                <div className="blockRightMap">
                    <Map from={from}
                        to={to}
                        departurDate={departurDate}
                        departurTime={departurTime}
                        passengers={passengers}
                        returnDate={returnDate}
                        returnTime={returnTime} />
                </div>
            </div>

        </>
    )
}
