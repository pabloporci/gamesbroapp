import React from "react";
import Header from "../Header";
import Logo from "../Logo";

const Success = ({ id }) => {
  return (
    <div className="row">
      <Header />
      <div className="col-md-12 text-center p-5">
        <h1>Felicitaciones!</h1>
        <Logo />
        <p>La Orden de Compra de Compra se generó con el ID: <b>{id}</b></p>
      </div>
    </div>
  )
}

export default Success;