import React from 'react'
import './Cart.css'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import {ItemCart} from '../ItemCart/ItemCart'

export const Cart = () => {
    const {cart, totalPrice, clearCart} = useCartContext();

    if(cart.length === 0){
        return (
            <>
                <p>No se agregaron elementos al carrito.</p>
                <Link to='/'>Comenzar a comprar</Link>
            </>
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