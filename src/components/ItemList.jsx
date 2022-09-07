import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.map(item => (
        <div key={item.id} className="col-md-4 py-3">
          <Item nombre={item.nombre} imagen={item.imagen} descripcion={item.descripcion} precio={item.precio} />
        </div>)
      )}
    </div>
  )
}

export default ItemList;