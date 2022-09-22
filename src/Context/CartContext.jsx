import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      let producto = cart.find(x => x.id === item.id);
      cart[cart.indexOf(producto)].cantidad += cantidad;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, cantidad: cantidad }]);
    }
  }

  const clear = () => {
    setCart([]);
  }

  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  }

  const cartTotal = () => {
    return cart.reduce((total, item) => total += item.cantidad * item.precio, 0);
  }





  const sumarCantidad = (item) => {
    const cartUpdated = cart.map((productoEnElCarrito) => {
      if (item.id === productoEnElCarrito.id) {
        const productUpdated = {
          ...productoEnElCarrito,
          cantidad: item.cantidad,
        };
        return productUpdated;
      } else {
        return productoEnElCarrito;
      }
    });
    setCart(cartUpdated);
  };


  const deleteAll = () => {
    setCart([]);
  };

  const totalUnidades = () => {
    const copia = [...cart];
    let count = 0;
    copia.forEach((item) => {
      count = count + item.cantidad;
    });
    return count;
  };

  const deleteOne = (id) => {
    const productosFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(productosFiltrados);
  };





  return (
    <CartContext.Provider value={{ cart, addItem, clear, isInCart, sumarCantidad, deleteAll, totalUnidades, deleteOne, cartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;



