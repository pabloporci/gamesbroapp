import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);
  const [ItemStock, setItemStock] = useState(stock);
  const [ItemAdd, setItemAdd] = useState(onAdd);

  const decrementarCantidad = (valor) => {
    if (valor > 0) {
      setCantidad(valor);
    }
  }

  const incrementarCantidad = (valor) => {
    if (valor <= ItemStock) {
      setCantidad(valor);
    }
  }

  const agregarProductos = (valor) => {
    if (cantidad <= ItemStock) {
      setItemStock(ItemStock - cantidad);
      setItemAdd(ItemAdd + cantidad);
    }
  }

  return (
    <div className="Container py-5">
      <div className="row">
        <div className="col-md-2">
          <p className="text-center">Nombre del Producto</p>
          <div className="input-group">
            <input type="button" className="btn btn-secondary" value="-" onClick={() => { decrementarCantidad(cantidad - 1) }} />
            <input type="text" className="form-control" value={cantidad} />
            <input type="button" className="btn btn-secondary" value="+" onClick={() => { incrementarCantidad(cantidad + 1) }} />

          </div >
          <div className="d-grid gap-2 py-3">
            <input type="button" className="btn bt-secondary" value="Agregar" onClick={() => { agregarProductos() }} />
          </div >
          <p className="productos-parrafo">Productos Seleccionados {ItemAdd} </p>
        </div >
      </div>

    </div>

  )
};

export default ItemCount;