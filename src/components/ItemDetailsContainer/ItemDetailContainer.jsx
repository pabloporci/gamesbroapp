

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Products from "../Products/Products";
import ItemDetails from "./ItemDetails";
import { getFirestore, collection, doc, getDoc, query, where } from "firebase/firestore";

const ItemDetailsContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    // const getProductos = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(Products.find(producto => producto.id === parseInt(id)) || []);
    //   }, 2000);
    // });

    // getProductos.then((respuesta) => {
    //   setItem(respuesta);
    // });
    const db = getFirestore();
    const response = doc(db, "products", id);

    // const productsCollection = collection(db, "products");
    // const queryItems = id ? query(productsCollection, where("id", "==", id)) : productsCollection
    // getDoc(queryItems).then(snapshot => {
    //   if (snapshot.exists()) {
    //     setItem({ id: snapshot.id, ...snapshot.data() });
    //   }
    // }

    getDoc(response).then(snapshot => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    })

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