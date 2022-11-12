import React from 'react'
import './Cart.css'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import {ItemCart} from '../ItemCart/ItemCart'

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
                    <button onClick={clearCart} className='cartButton'>Clear cart</button>
                    <Link to="/"><button className='cartButton'>keep buying</button></Link>
                    <Link to="/checkout"><button className='cartButton'>Proceed to Checkout</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}