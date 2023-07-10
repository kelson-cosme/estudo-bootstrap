import './App.css';
// import style from "./bootstrap-5.3.0-dist/css/bootstrap.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.css"

function App() {
  return (

    // Propiedade de margin = M = Margin, P = Padding
    // Para utilizar ex: ClassName="container p-5"  onde "p" é o padding e o "5" o tamanho pré definido 
    <div className="App bg-info">
      <div className="w-25 container bg-dark"> {/* Container para centralizar */}
        <h1 className='text-primary'>Ola mundo</h1>
        <h1 className='text-secondary'>Ola mundo</h1>
        <h1 className='text-success'>Ola mundo</h1>
        <h1 className='text-danger'>Ola mundo</h1>cdc
        <h1 className='text-warnig'>Ola mundo</h1>
        <h1 className='text-info bg-success'>Ola mundo</h1>
        <h1 className='text-light bg-black'>Ola mundo</h1>
        <h1 className='text-dark'>Ola mundo</h1>
        <h1 className='text-body'>Ola mundo</h1>
        <h1 className='text-muted '>Ola mundo</h1>
      </div>
{/* ---------------------------------------------------------- */}


{/*Tipos de Botôes  */}
      <button type='button' className='btn btn-danger'>Cancelar</button>
      <button type='button' className='btn btn-success'>Aplicar</button>
      <a href="https://google.com" className='btn btn-success'>Submit</a>
{/* ------------------------------------------------------------------ */}

{/* TAMANHOS */}
{/* Width é o "W" e o "25" o valor pré definido
    valores pre definido:
    0, 25, 50, 75, 100
*/}
      <div className="teste2 w-25 bg-success text-light">
          <h1>Div Pdadadadadadaddaai</h1>
      </div>
{/*-------------------------------------------------------------------  */}




    </div>
  );
}


export default App;
