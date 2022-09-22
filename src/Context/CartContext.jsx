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



// import { createContext, useState } from 'react';

// //1. Crear contexto
// export const CartContext = createContext();
// //con el CartContext.Provider deberia envolver a todos los componentes que tengan que acceder a la informacion/logica de mi contexto

// //2. crear el Provider
// const Provider = (props) => {
//   //console.log(props);
//   //estados
//   const [cart, setCart] = useState([]);

//   const addToCart = (item, cantidad) => {
//     const producto = { ...item, cantidad };
//     if (isInCart(producto.id)) {
//       //busco el producto y le sumo la cantidad
//       sumarCantidad(producto);
//     } else {
//       setCart([...cart, producto]);
//     }
//     //spread operator -> ...
//     // const persona = {id: 1, nombre: 'eric'}
//     // ...persona --> id: 1, nombre: 'eric'
//     // const edad = {...persona, edad: 27}
//     //--> img: ';, price: 20
//   };

//   //crear funcion para chequear si el item está en el carrito
//   //método some devuelve true o false
//   const isInCart = (id) => {
//     return cart.some((prod) => prod.id === id);
//   };

//   const sumarCantidad = (producto) => {
//     const cartUpdated = cart.map((productoEnElCarrito) => {
//       if (producto.id === productoEnElCarrito.id) {
//         const productUpdated = {
//           ...productoEnElCarrito,
//           cantidad: producto.cantidad,
//         };
//         return productUpdated;
//       } else {
//         return productoEnElCarrito;
//       }
//     });
//     setCart(cartUpdated);
//   };

//   //crear funcion para bborrar todo el carrito
//   const deleteAll = () => {
//     setCart([]);
//   };

//   const totalUnidades = () => {
//     const copia = [...cart];
//     let count = 0;
//     copia.forEach((producto) => {
//       count = count + producto.cantidad;
//     });
//     return count;
//   };

//   console.log(cart);

//   //crear funcion para bborrar un solo producto
//   const deleteOne = (id) => {
//     const productosFiltrados = cart.filter((prod) => prod.id !== id);
//     setCart(productosFiltrados);
//   };

//   const nombre = 'Eric';

//   const saludo = () => {
//     console.log('Hola!');
//   };

//   //console.log(props);
//   //funciones que manejen mi estado
//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         nombre,
//         saludo,
//         addToCart,
//         deleteAll,
//         totalUnidades,
//         deleteOne,
//       }}
//     >
//       {props.children}
//     </CartContext.Provider>
//   );
// };

// export default Provider;