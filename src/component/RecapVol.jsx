import React, { useEffect, useState  } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/recapVol.css'
import Map from './Map';

export default function RecapVol(props) {
    const { from, to, departurDate, departurTime, passengers, returnDate, returnTime, setBooked } = props
    const [email, setEmail] = useState('')

    const navigate = useNavigate()
    const handleDevis = () => {
        navigate('/demande-devis', {state:email})
    }

    useEffect(() => {
       console.log('email :>> ', email);
        window.scroll(4.8, 204.8)
    }, [email])


    return (
        <>
         
                    <button
                        className="BtnReturnResearch"
                        onClick={() => setBooked(false)}
                    >Retour</button>
                    <div className="container-recap">
                        <div className="blockLeftRecap">
                            <p>Lorem ipsum <strong>{from}</strong> dolor sit amet <strong>{to}</strong>  consectetur adipisicing <strong>{departurDate}</strong> elit <strong>{departurTime}</strong>. Possimus facere dignissimos cupiditate ratione in, aut voluptas ducimus aspernatur nihil error necessitatibus qui aperiam nisi corporis optio earum repudiandae saepe? Totam laudantium modi quo nobis rem sequi doloremque mollitia magnam consequuntur?</p>
                            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="entrez votre email" />
                           
                           
                            <button onClick={handleDevis} className='btn-payer'>Demandez un devis</button>
                            
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
