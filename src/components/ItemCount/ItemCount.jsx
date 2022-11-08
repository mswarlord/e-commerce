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
    <div className="counterContainer">
        <div className="counterContainer--counter">
            <button className="btn__container" onClick={() => addProduct(-1)} disabled={qty === initial}> - </button>
            <span className="qtyCount">{qty}</span>
            <button className="btn__container" onClick={() => addProduct(+1)} disabled={qty === stock}> + </button>
        </div>
        <button className="btn__agregar" onClick={() => {onAdd(qty);}} disabled={stock === 0 ? true : null}> Agregar </button>
    </div>
    );
};

export default ItemCount;