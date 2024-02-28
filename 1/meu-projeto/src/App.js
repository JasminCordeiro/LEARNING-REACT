import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Jasmin'

  function sum(a,b){
    return a + b
  }
  const url = 'https://via.placeholder.com/150'


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>Olá {name}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt = 'Imagem' />

      
      
    </div>
    
  );
}

export default App;
