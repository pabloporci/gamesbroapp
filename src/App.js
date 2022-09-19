

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailContainer';
import Provider from './components/Context/Context';

import './estilos.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Provider>
      <BrowserRouter>

        <Routes>
          <Route path={"/"} element={<Home />} />

          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/tienda"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailsContainer />} />
          <Route path={"/cart"} element={<Cart />} />


        </Routes>


      </BrowserRouter>
    </Provider>
  );
}

export default App;
