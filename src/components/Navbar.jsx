import React from "react";
import logo from "./images/favicon.png";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div className="container">
      <h1 className="letra_titulo">Games Bro</h1>
      <h3 className="letra_titulo">El sitio gamer hecho para vos</h3>
      <ul className="nav d-flex align-items-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="48" alt="Games Bro" /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Tienda</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Consolas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Preventa</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="#">Contacto</a>
        </li>
        <CartWidget />
      </ul>
    </div >
  )
}

export default Navbar;