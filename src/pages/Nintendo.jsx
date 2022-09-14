import React, { useState, useEffect } from 'react'
import ItemListContainer from '../components/ItemListContainer';


const Nintendo = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=nintendo&limit=12")
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data.results);
        setItems(data.results);
      })


  }, []);

  return (
    <div>
      <ItemListContainer items={items} onDetailClick={() => null} />
    </div>
  )
}

export default Nintendo