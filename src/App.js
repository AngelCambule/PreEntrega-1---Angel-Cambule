import './App.css';
import NavBar from './Components/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer';
import CartWidget from './Components/CartWidget';
import { useState } from 'react';
const App = () => {

  const [count, setCount] = useState(0);
  
  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleR = () => {
    setCount(count - 1);
  }

  return (
    <div className="App" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh"}}>
      <button onClick={handleR}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

export default App;
