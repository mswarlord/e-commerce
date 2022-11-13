import React from 'react'
import './Cart.css'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { ItemCart } from '../ItemCart/ItemCart'
import { MdClear } from 'react-icons/md';
import { IoBagCheckOutline } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';

export const Cart = () => {
    const {cart, totalPrice, clearCart} = useCartContext();

    if(cart.length === 0){
        return (
            <div className='EmptyCart'>
                <br />
                <h2>Tu carrito está vacío</h2>
                <br />
                <h3>¿No sabés qué comprar? <Link to='/'>haz click aquí</Link></h3>
            </div>
        )
    }else{
        return (
            <div className='cart'>
                <div className='descriptions'>
                    <h1>Shopping Cart</h1>
                    <h4>Price</h4>
                </div>
                {cart.map(product => <ItemCart key={product.id} product={product} />)} 
                <div>
                    <div>
                        <h3 className='subtotal'> Subtotal: $ {totalPrice()}.</h3>
                    </div>
                    <div className='keypad'>
                            <div className='iconCartContainer containerClear'>
                                <MdClear onClick={clearCart} className='iconCart'/>
                            </div>
                        <Link to="/">
                            <div className='iconCartContainer containerHome'>
                                <FaHome className='iconCart'/>
                            </div>
                        </Link>
                    
                        <Link to="/checkout">
                            <div className='iconCartContainer containerPayment'>
                                <IoBagCheckOutline className='iconCart' />
                            </div>
                        </Link>
                    
                    </div>
                </div>
            </div>
        )
    }
}