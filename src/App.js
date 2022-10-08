import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
/* import { llamadaAPI } from './ApiFetch'; */

const App = () => {
  return (
    <div className="App">
      <BrowserRouter> 
        <Header />
        <NavBar />
      <Routes>
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/' element={<ItemListContainer greeting="Mas Vendidos"/>} /> 
        <Route path='/detail/:IdProducto' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>ERROR 404 NOT FOUND</h1> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;