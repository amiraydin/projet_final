import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.jsx";
import Avions from "./pages/Avions.jsx";
import Register from "./pages/Register";
import Reserch from "./pages/Reserch";
import Navbar from "./component/Navbar.jsx";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Avions" element={<Avions />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Reserch" element={<Reserch />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
