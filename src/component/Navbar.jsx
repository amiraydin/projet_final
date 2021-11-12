import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo1.png'
import '../css/navbar.css'

export default class Navbar extends Component {
  render() {
    return (

      <nav className="nav">
        <div className="container">
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
                <Link className="nav-link" to="/Register">
                  Destination
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Reserch">
                  Réserver un vol
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  A propos de nous
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>





    );
  }
}





