import './App.css';
// import style from "./bootstrap-5.3.0-dist/css/bootstrap.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.css"

function App() {
  return (
    <div className="App p-5 bg-dark">
      <div className="container ">
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
      


      <button type='button' className='btn btn-danger'>Cancelar</button>
      <button type='button' className='btn btn-success'>Aplicar</button>
      <a href="https://google.com" className='btn btn-success'>Submit</a>

    </div>
  );
}


export default App;
