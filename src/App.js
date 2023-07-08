import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './router/MainRouter';
import { CartContext, CartProvider } from './Context/CartContext';
import { useContext } from 'react';
const App = () => {

  const state = useContext(CartContext)
  console.log(state)
  return (
    <div className="App">
      <CartProvider>
      <MainRouter/>
      </CartProvider>
    </div>
  );
}

export default App;