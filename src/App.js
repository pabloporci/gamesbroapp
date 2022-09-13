import { BrowserRouter, Routes, Route } from "react-router-dom";

import './estilos.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { useState } from "react";
import NavBar from "./components/NavBar";


function App() {

  // const saludo = "Bienvenido a nuestro sitio donde encontraras tu videojuego favorito"
  const [selectedItem, setSelectedItem] = useState(null)


  return (
    <div className='container-fluid fondo_azul'>
      <NavBar />

      <hr />
      <h1 className="text-center">
        Aprovecha nuestras ofertas
      </h1>
      <hr />

      <div>
        {/* <ItemListContainer greeting={saludo} /> */}
        <ItemListContainer onDetailClick={setSelectedItem} />
        <ItemDetailContainer itemId={selectedItem} />

      </div>
      <Footer />
    </div>

  );
}

export default App;
