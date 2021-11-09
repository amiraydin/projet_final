import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.jsx";
import Avions from "./pages/Avions.jsx";
import Destination from "./pages/Destination";
import Research from "./pages/Research";
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
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Reserch" element={<Research />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
