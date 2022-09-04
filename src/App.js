import './estilos.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {

  const saludo = "Bienvenido a nuestro sitio donde encontraras tu videojuego favorito"

  return (
    <div className='container-fluid fondo_azul'>
      <Navbar />

      <hr />
      <div>
        <ItemListContainer greeting={saludo} />
      </div>
    </div>

  );
}

export default App;
