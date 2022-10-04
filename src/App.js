import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/* import { llamadaAPI } from './ApiFetch'; */

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ItemListContainer greeting="Mas Vendidos"/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;