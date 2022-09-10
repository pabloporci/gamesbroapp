import React from "react";
import ItemCount from "./ItemCount";

const Item = ({ item, onDetailClick }) => {
  const detailClick = () => {
    onDetailClick(item.id)

  }
  return (
    <div className="card item">
      <img src={item.thumbnail} className="card-img-top" alt={item.title} />
      <div className="card-body">
        <h5 className="card-title text-center titulo-parrafo"><b>{item.title}</b></h5>

        <p className="card-text text-center titulo-parrafo">${item.price}</p>

        <ItemCount stock={5} initial={1} onAdd={0} />
        <a href={item.permalink} className="btn btn-primary">comprar</a>
        <button className="btn btn-primary" onClick={detailClick} >detalle </button>
      </div>

    </div>

  );
};

export default Item;