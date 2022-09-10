import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState(null)


  useEffect(() => {
    const url = "https://api.mercadolibre.com/items/" + itemId
    fetch(url)
      .then(res => res.json())
      .then(res => setItem(res))
  }, [itemId])





  return (
    <div style={{ minHeight: '70vh' }}>
      {item ?
        <ItemDetail item={item} />
        : <h3>No hay item seleccionado</h3>
      }
    </div>
  )
}

export default ItemDetailContainer;