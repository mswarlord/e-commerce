import React from 'react';
import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ onAdd, initial, stock }) => {
  initial = Number(initial);
  stock = Number(stock);
  const [qty, setQty] = useState(initial);
  
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