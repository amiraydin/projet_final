// import { Button } from 'bootstrap'
// import React from 'react'


// export default function Card() {
//     return (
//         <div>
//             <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
//                     <Card.Title>Card Title</Card.Title>
//                     <Card.Text>
//                         Jet 1
//                     </Card.Text>
//                     <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//             </Card>
//         </div>
//     )
// }
import React, { useState } from "react";
// import styled from "styled-components";

export default function Card() {
    const [privateJet, setPrivateJet] = useState(
        [{
            name: "Jet 1",
            price: 15000
        },
        {
            name: "Jet 2",
            price: 20000
        },
        {
            name: "Jet 3",
            price: 30000
        }]
    )


    return (
        <>
            {privateJet.map((e) => <div> <p>name : {e.name}</p>  <p>prix: {e.price}</p> </div>)}
        </>
    );
}