


import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ items, onDetailClick }) => {

  return (
    <div className="container">
      <ItemList items={items} onDetailClick={onDetailClick} />
    </div>

  )
}

export default ItemListContainer;






