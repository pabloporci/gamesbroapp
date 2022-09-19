import React from "react";
import { Link } from "react-router-dom";


const Item = ({ item }) => {
  return (
    <div className="card item">
      <Link to={"/item/" + item.id} className="text-decoration-none">
        <img src={item.imagen} className="card-img-top" alt={item.nombre} />
        <div className="card-body">
          <h5 className="card-title text-center titulo-parrafo"><b>{item.nombre}</b></h5>

          <p className="card-text text-center titulo-parrafo">${item.precio}</p>


        </div>
      </Link>

    </div>

  );


};

export default Item;