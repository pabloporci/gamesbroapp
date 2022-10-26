import React, { useState } from "react";

const ItemCount = (props) => {
  const { item, onAdd } = props;
  const [counter, setCounter] = useState(props.initial);
  const [itemStock, setItemStock] = useState(5);

  const decrementarCantidad = (valor) => {
    if (valor > 0) {
      setCounter(valor);
    }
  }

  const incrementarCantidad = (valor) => {
    if (valor <= itemStock) {
      setCounter(valor);
    }
  }

  const agregarProductos = () => {
    if (counter <= itemStock) {
      setItemStock(itemStock - counter);

      if (onAdd) {
        onAdd(item, counter)
      }
    }
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <p>
          <input
            type="button"
            className="btn fondo_negro "
            value="-"
            onClick={() => { decrementarCantidad(counter - 1) }}
          />
          {counter}
          <input
            type="button"
            className="btn fondo_negro"
            value="+"
            onClick={() => { incrementarCantidad(counter + 1) }}
          />
        </p>
        <p><input type="button" className="btn btn-secondary" value="Agregar" onClick={() => { agregarProductos() }} /></p>
      </div>
    </div>
  )
};

export default ItemCount;