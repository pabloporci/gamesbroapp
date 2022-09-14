import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/favicon.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="container">
      <h1 className="letra_titulo">Games Bro</h1>
      <h3 className="letra_titulo">El sitio gamer hecho para vos</h3>
      <ul className="nav d-flex align-items-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/inicio"><img src={logo} width="48" alt="Games Bro" /></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link_header" to="/inicio">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link_header" to="/playstation">PlayStation</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link_header" to="/nintendo">Nintendo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link_header" to="/contacto">Contacto</Link>
        </li>
        <CartWidget />
      </ul>
    </div >
  )
}

export default NavBar;