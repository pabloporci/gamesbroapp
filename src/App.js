import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import './estilos.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Inicio from './pages/Inicio'
import Contacto from './pages/Contacto'
import Playstation from './pages/Playstation'
import Nintendo from "./pages/Nintendo";
import Details from "./pages/Details";


function App() {

  // const saludo = "Bienvenido a nuestro sitio donde encontraras tu videojuego favorito"
  const [selectedItem, setSelectedItem] = useState(null)


  return (
    <BrowserRouter>
      <div className='container-fluid fondo_azul'>
        <NavBar />

        <hr />
        <h1 className="text-center">
          Aprovecha nuestras ofertas
        </h1>
        <hr />
        <Routes>
          {/* <div> */}
          {/* <ItemListContainer onDetailClick={setSelectedItem} />
          <ItemDetailContainer itemId={selectedItem} /> */}

          {/* </div> */}


          <Route path="/inicio" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/playstation" element={<Playstation />} />
          <Route path="/nintendo" element={<Nintendo />} />
          <Route path="/details/:id" element={<Details />} />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>


  );
}

export default App;
