

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

    const db = getFirestore();
    const response = doc(db, "products", id);



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