import './App.css';
import NavBar from './Components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer';
const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="????????"/>
    </div>
  );
}

export default App;