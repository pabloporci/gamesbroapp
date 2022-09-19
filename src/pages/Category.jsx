import React from 'react'
import { useParams, Outlet } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailsContainer/ItemDetailContainer';




const Category = () => {

  const { id } = useParams()


  return (
    <div>
      <ItemDetailContainer itemId={id} />
    </div>
  )
}

export default Category