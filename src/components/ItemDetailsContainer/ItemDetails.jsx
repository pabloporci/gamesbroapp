
import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const ItemDetails = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [counter, setCounter] = useState(0);
  const [addedProduct, setAddedProduct] = useState(false)
  /* const [prod, setProd] = useState(item);
  console.log(prod); */
  const onAdd = (item, counter) => {
    setCounter(counter);
    addItem(item, counter);
    alert("Item agregado")
    setAddedProduct(true)
  }


  return (


    <div className="detail card item col-md-4 py-3 justify-content ">
      <img src={item.imagen} className="card-img-top" alt={item.nombre} />
      <div className="infodetail card-body">
        <h2>{item.nombre}</h2>
        <p className="card-text text-center titulo-parrafo">${item.precio}
        </p>
        <h3 className="card-title text center titulo-parrafo" >${item.precio}</h3>



        {
          addedProduct ?

            (<button className="btn btn-primary">Terminar compra</button>) && <Link to="/cart">Ir al carrito</Link> :



            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} counter={counter} setCounter={setCounter} item={item} />



        }
      </div>

    </div>

  )
};



export default ItemDetails;