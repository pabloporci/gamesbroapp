import './estilos.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {

  const saludo = "Bienvenido a nuestro sitio donde encontraras tu videojuego favorito"

  return (
    <div className='container-fluid fondo_azul'>
      <Navbar />

      <hr />
      <ItemCount stock={5} initial={1} onAdd={0} />
      <div>
        {/* <ItemListContainer greeting={saludo} /> */}
        <ItemListContainer />

      </div>
    </div>

  );
}

export default App;
