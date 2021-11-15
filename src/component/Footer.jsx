import React from 'react'
import "../css/home.css"
import { Link } from "react-router-dom";
import logo from '../images/logo1.png'

export default function Footer() {
    return (
        <div>
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
                                    <li><Link to="/Destination">
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
                                    <li><Link className="#" to="/Destination">
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
        </div>
    )
}
