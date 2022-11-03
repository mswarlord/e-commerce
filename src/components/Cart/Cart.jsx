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
                {cart.map(product => <ItemCart key={product.id} product={product} />)} 
                <div>
                    <button onClick={clearCart}>Limpiar Carrito</button>
                    <Link to="/"><button>Agregar mas productos</button></Link>
                    <Link to="/checkout"><button>Pagar</button></Link>
                    <div>Total a abonar: $ {totalPrice()}.</div>
                </div>
            </div>
        )
    }
}