import React from 'react'
import avion from '../images/airplan.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/deuxiem.jpg'


export default function Home() {
    return (
        <>
            <div className="container" >
                <div>
                    <img src={avion} alt="plan" style={{ width: "190vh", height: "50vw" }} />
                </div>
                <div className="d-flex p-3">
                    <div className="text-center">
                        <h2>fly fly</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nulla repellendus aut est tempora laborum provident facilis vero? Cupiditate facere doloribus commodi sunt repudiandae quia quos veniam dolores ab earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis molestiae, culpa ab natus quia nisi. Porro, voluptatum, repudiandae hic autem tenetur quis iure quia nobis quasi temporibus consequatur ipsam.</p>
                    </div>
                    <div className="text-center">
                        <h2>fly fly</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur numquam perferendis modi alias minus explicabo, eveniet aspernatur blanditiis similique at. Doloribus debitis perferendis rerum delectus explicabo esse, iure at accusamus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur qui necessitatibus fugiat explicabo totam minus, veniam id ipsam amet dicta deleniti fuga voluptate commodi repudiandae aut libero, quisquam a perspiciatis?</p>
                    </div>
                </div>
                <a href="/Avions">
                    <img src={image} alt="deuxiem" style={{ width: "190vh", height: "50vw", backgroundColor: "(0,0,0,0.50)" }} />
                </a>

            </div>
        </>
    )
}

