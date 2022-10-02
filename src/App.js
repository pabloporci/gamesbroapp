

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailContainer';
import CartProvider from './Context/CartContext';
import './estilos.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />

          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/tienda"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailsContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />



        </Routes>


      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
