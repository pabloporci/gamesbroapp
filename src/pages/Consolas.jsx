import React from 'react'

const Consolas = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=consolas&limit=12")
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

export default Consolas