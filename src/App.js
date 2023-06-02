import './App.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


function App() {
  return (
    <div className="App">
      <h1>
      <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}

export default App;
