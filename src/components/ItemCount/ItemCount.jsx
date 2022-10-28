import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ onAdd, initial, stock }) => {
  initial = Number(initial);
  stock = Number(stock);
  const [qty, setQty] = useState(initial);
  
/*   const increment = () => { 
    if( qty < stock ){
      setQty( qty+1 )
    }
  }
  
  const Decrement = () => { 
    if( qty > 1 ){
      setQty( qty - 1 )
    }
  } */

  const addProduct = (num) => {
    setQty(qty + num);
  };
  
    return (
    <div className="contenedor__contador">
        <div className="contenedor__contador--contador">
            <button className="btn__contenedor" onClick={() => addProduct(-1)} disabled={qty === initial}> - </button>
            <span className="cantidad__contador">{qty}</span>
            <button className="btn__contenedor" onClick={() => addProduct(+1)} disabled={qty === stock}> + </button>
        </div>
        <button className="btn__agregar" onClick={() => {onAdd(qty);}} disabled={stock === 0 ? true : null}> Agregar </button>
    </div>
    );
};

export default ItemCount;