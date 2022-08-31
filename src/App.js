import './estilos.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {



  return (
    <div className='container-fluid fondo_azul'>
      <Navbar />
      <ItemListContainer />
      <hr />
    </div>

  );
}

export default App;
