


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Products from "../Products/Products";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // const getProductos = new Promise((resolve) => {
    //   setTimeout(() => {
    //     let productos = (id) ? Products.filter(producto => producto.categoria === id) : Products;
    //     resolve((productos.length > 0) ? productos : Products);
    //   }, 2000);
    // });

    // getProductos.then((respuesta) => {
    //   setItems(respuesta);



    const db = getFirestore();

    const productsCollection = collection(db, "products");

    const queryItems = id ? query(productsCollection, where("category", "==", id)) : productsCollection;
    getDocs(queryItems).then((snapShot) => {
      if (snapShot.size > 0) {
        setItems(snapShot.docs.map(item => ({ id: item.id, ...item.data() })));

      }



      // const queryItems = id ? query(productsCollection, where("category", "==", id)) : productsCollection

      // const productsCollection = collection(db, "products");

      // getDocs(productsCollection).then(data => {
      //   setItems(data.docs.map(item => ({ id: item.id, ...item.data() })));
    });
  }, [id]);

  return (
    <div className="container-fluid fondo_azul">
      <Header />
      <div className="container">
        <ItemList items={items} />
      </div>
      <Footer />
    </div>
  )
}

export default ItemListContainer;





