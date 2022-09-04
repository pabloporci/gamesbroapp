import React from "react";
import carrito from "./images/carrito.png";

const CartWidget = () => {
  return (
    <li className="nav-item">
      <a className="nav-link link_header"><img src={carrito} width="70" alt="carrito" /></a>
    </li>
  )
}


export default CartWidget;