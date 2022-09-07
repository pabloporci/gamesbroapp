import React from "react";

const Item = ({ nombre, imagen, descripcion, precio }) => {
  return (
    <div className="card item">
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title text-center titulo-parrafo"><b>{nombre}</b></h5>
        <p>{descripcion}</p>
        <p className="card-text text-center titulo-parrafo">${precio}</p>
      </div>
    </div>
  )
}

export default Item;