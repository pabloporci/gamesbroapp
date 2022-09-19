

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Products from "../Products/Products";
import ItemDetails from "./ItemDetails";

const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const getProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Products.find(producto => producto.id === parseInt(id)) || []);
      }, 2000);
    });

    getProductos.then((respuesta) => {
      setItem(respuesta);
    });
  }, [id]);

  return (
    <div className="container-fluid fondo_azul">
      <Header />
      <ItemDetails item={item} />
      <Footer />
    </div>
  )
}

export default ItemDetailsContainer;