import React from "react";
import whatsapps from "./images/whatsapps.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.jfif";

const Footer = () => {
  return (
    <div className="container">

      <h3 className="letra_titulo">Comunicate con nuestras redes sociales</h3>
      <ul className="nav d-flex align-items-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.whatsapp.com/?lang=es"><img src={whatsapps} width="48" alt="Games Bro" />Whatsapps</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://es-la.facebook.com/"><img src={facebook} width="48" alt="Games Bro" />Facebook</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.instagram.com/"><img src={instagram} width="48" alt="Games Bro" />Instagram</a>
        </li>




      </ul>
    </div>
  )
}

export default Footer;