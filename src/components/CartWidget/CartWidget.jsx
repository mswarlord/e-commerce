import React from 'react';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext) 
    
    const quantity = getQuantity();
    
    /* console.log("cantidad " + quantity) */
    
    return (
        <div to='/cart' className='cartContainer'>
            <i className="bi bi-cart3"></i>
            {quantity}
        </div>
    )
}

export default CartWidget;