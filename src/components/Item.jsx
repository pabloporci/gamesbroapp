import React from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {

  const naviate = useNavigate()

  const detailClick = () => {
    naviate('/category/' + item.id)
  }


  const getUrlImg = (url) => {
    return url.slice(0, -5).concat('O.jpg')
  }

  // Para mejorar la calidad de las Fotos. Utilize el metodo concat para eliminar la ultima parte de la url
  // Investigando visualize que la api de mercado libre tiene dos url de imagenes(que son casi identicas)

  return (
    <div className="card item">
      <img src={getUrlImg(item.thumbnail)} className="card-img-top" alt={item.title} />
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