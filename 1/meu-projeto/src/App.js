import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';


function App() {
  return (
    <div className="App">  
      <HelloWorld/>
      <SayMyName nome="Jasmin"/>
      <SayMyName nome="Maria"/>
      <SayMyName nome="Lucas"/>
      <Pessoa 
        nome="Jasmin" 
        idade="20" 
        Profissão="Dev Junior" 
        foto="https://via.placeholder.com/150"/>
        <Frase/>


    </div>
  );
}

export default App;
