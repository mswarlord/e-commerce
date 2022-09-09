import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ItemListContainer greeting="Mas Vendidos"/>
      <ItemListContainer greeting="En Proceso"/>
    </div>
  );
}

export default App;