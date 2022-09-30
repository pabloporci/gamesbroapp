import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import Header from '../Header';
import { Link } from "react-router-dom";
import carrito from "../images/carrito.png";

const Cart = () => {
  const { cart, deleteOne, deleteAll, cartTotal } = useContext(CartContext);



  return (
    <div className="container-fluid fondo_azul">
      <Header />
      <section>

        <h2 className="letra_titulo" >Carrito de compras</h2>

        {cart.map((item) => (
          <div key={item.id}>
            <h2 className='letra_titulo'>{item.nombre}</h2>

            <img src={item.imagen} width="150" alt={item.nombre} />
            <h3 className='letra_titulo'>{item.cantidad}</h3>
            <h3 className='letra_titulo'>{item.precio}</h3>
            <button onClick={() => deleteOne(item.id)}>
              Delete
            </button>
          </div>
        ))}







      </section>
      {cart.length ? (
        <section className='letra_titulo'>

          <header>
            <h3>Detalle total</h3>
          </header>
          <main>
            <button onClick={deleteAll}>Delete all</button>
            {
              cart.map(item => (
                <div className='d-flex flex-column mt-2'>
                  <span>{item.nombre}</span>
                  <span className='ml-2'>cantidad: {item.cantidad} precio {item.precio}</span>
                  <span className='ml-2'>subtotal {item.cantidad * item.precio}</span>
                </div>
              ))
            }
            <div>
              <h1>TOTAL: ${cartTotal()}</h1>
            </div>
            <div>
              <Link to={"/checkout"} title="Finalizar Compra">
                <button className="btn fondo_naranja">Finalizar Compra <img src={carrito} alt="Finalizar Compra" width="16" /></button>
              </Link>

            </div>
          </main>
        </section>) : (
        <h2 className='productos-parrafo'>
          No hay productos seleccionados
        </h2>
      )
      }

    </div>
  );
};
export default Cart;
