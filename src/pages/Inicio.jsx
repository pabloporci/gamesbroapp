import React, { useState, useEffect } from 'react'
import ItemListContainer from '../components/ItemListContainer';

const Inicio = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=gamer&limit=12")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setItems(data.results);
      })


  }, []);

  return (
    <div>
      <ItemListContainer items={items} onDetailClick={() => null} />
    </div>
  )
}

export default Inicio