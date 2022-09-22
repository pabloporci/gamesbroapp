import React from 'react'
import { Link } from "react-router-dom";
import logo from "./images/favicon.png";

const Logo = () => {
  return (
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/"><img src={logo} width="48" alt="Games Bro" /></Link>
    </li>
  )
}

export default Logo