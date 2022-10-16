import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";
import Logo from "./Logo";

const NavBar = () => {

  const navItemList = [
    {
      route: '/',
      name: 'Home'
    },
    {
      route: "/category/playstation",
      name: "Playstation"
    },
    {
      route: "/category/nintendo",
      name: "Nintendo"
    },
    {
      route: "/pages/proximamente",
      name: "Proximamente"
    },
  ]

  return (
    <div className="container fondo_azul">
      <h1 className="letra_titulo">Games Bro</h1>
      <h3 className="letra_titulo">El sitio gamer hecho para vos</h3>
      <ul className="nav d-flex align-items-center">
        <Logo />
        {
          navItemList.map(navItem => (
            <li key={navItem.name} className="nav-item">
              <Link className="nav-link link_header" to={navItem.route}>{navItem.name}</Link>
            </li>
          ))
        }

      </ul>
      <CartWidget />
    </div >
  )
}

export default NavBar;