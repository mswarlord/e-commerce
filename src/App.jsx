import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter> 
            <Header />
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Tres Bestiones, tu lugar de impresión 3D"/>} /> 
              <Route path='/category/:category' element={<ItemListContainer />} />
              <Route path='/detail/:IdProducto' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1 className='error404'>ERROR 404 NOT FOUND</h1> } />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;