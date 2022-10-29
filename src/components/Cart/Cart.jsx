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
            <>
                {
                    cart.map( product => <ItemCart key={product.id} product={product} /> )
                } 
                <p>{totalPrice}</p>
                <button onClick={clearCart}>Limpiar Carro</button> 
            </>
        )
    }
}