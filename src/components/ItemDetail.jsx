import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

  const getUrlImg = (url) => {
    return url.slice(0, -5).concat('O.jpg')
  }

  return (
    <div className="detail card item col-md-4 py-3 justify-content ">
      <img src={getUrlImg(item.thumbnail)} className="card-img-top" alt={item.title} />
      <div className="infodetail card-body">
        <h2>{item.title}</h2>
        <p className="card-text text-center titulo-parrafo">${item.price}
        </p>
        <h3 className="card-title text center titulo-parrafo" >${item.title}</h3>

        <ItemCount stock={5} initial={1} onAdd={0} />
      </div>

    </div>

  )
};



export default ItemDetail;