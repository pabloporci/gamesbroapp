import './estilos.css';

function App() {
  let imagen = "godwarragnarok.jpg";
  let titulo = "god war ragnarock";
  let consola = "playstation";
  let descripcion = "juego de accion";
  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-4 offset-md-2'>
          <img src={imagen} alt={titulo} className="img-fluid" />
        </div>
        <div className='col-md-4'>
          <h1>{titulo}</h1>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
