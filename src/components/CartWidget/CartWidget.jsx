import React from 'react';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { getQuantity } = useCartContext() 
    
    const quantity = getQuantity();
    
    return (
        <div to='/cart' className='cartContainer'>
            <i className="bi bi-cart3"></i>
            {quantity}
        </div>
    )
}

export default CartWidget;