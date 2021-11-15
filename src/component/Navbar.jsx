import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/newlogo.png'
import '../css/navbar.css'

export default function Navbar() {
  return (

    <nav className="nav">
      <div className="cantiner">
        <div className="logo">

          <li className="nav-item">

            <Link className="navbar-brand" to="/">
              <img src={logo} className="logo-img" alt="" srcset="" />
            </Link>
          </li>
        </div>

        <div className="main_list">
          <ul className="navlinks">

            <li className="nav-item">
              <Link className="nav-link" to="/Avions">
                Avions
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Destination">
                Destination
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Reserch">
                Réserver un vol
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Aproposdenous">
                A propos de nous
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}






