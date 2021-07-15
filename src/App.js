import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(5);
  //const [h1width, setH1width] = useState('10px');
  //component did update = executa toda vez que o comp. atualiza

    // com dependencia - executa em toda mudança da dependência
    useEffect(() => {
      setCounter2(counter2 + 1);
    }, [counter]);


  const increment = () => {
    setCounter(counter + 1);
  }
  return (
    <div className="App">
      <h1>Oi</h1>
      <h3>C1: {counter}</h3>
      <h3>C2: {counter2}</h3>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
