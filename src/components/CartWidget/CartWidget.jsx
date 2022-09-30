import React, { useContext } from "react";
import { Link } from "react-router-dom";
import carrito from "../images/carrito.png";
import { CartContext } from "../../Context/CartContext";
import { useState } from "react";
import { useEffect } from "react";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const { cartTotal } = useContext(CartContext);

  useEffect(() => {
    let total_items = cart.reduce((total, item) => total += item.cantidad, 0);
    setTotal(total_items);
  }, [cart]);



  return (
    <div>
      {(cartTotal() > 0) ?
        <Link to={"/cart"}>
          <button type="button" className="btn fondo_naranja position-relative">
            <img src={carrito} width="48" alt="Carrito" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{total}</span>
          </button>
        </Link> : ""}
    </div>
  )
}

export default CartWidget;