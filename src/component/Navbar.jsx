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

      
      // <nav className="navbar navbar-expand">
      //   <div className="container-fluid">
      //     <Link className="navbar-brand" to="/">
      //       Jet Sky
      //     </Link>
      //     <button
      //       className="navbar-toggler"
      //       type="button"
      //       data-bs-toggle="collapse"
      //       data-bs-target="#navbarNav"
      //       aria-controls="navbarNav"
      //       aria-expanded="false"
      //       aria-label="Toggle navigation"
      //     >
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarNav">
      //       <ul className="navbar-nav">
      //         <li className="nav-item">
      //           <Link className="nav-link" to="/Avions">
      //             Avions
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link className="nav-link" to="/Register">
      //             Register
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link className="nav-link" to="/Reserch">
      //             Reserch
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link className="nav-link" to="/Login">
      //             Login
      //           </Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      



    );
  }
}





