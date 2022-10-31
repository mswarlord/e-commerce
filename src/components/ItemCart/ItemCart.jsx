import React from "react";
import './ItemCart.css';
import {useCartContext} from '../../context/CartContext'

export const ItemCart = ({product}) => {
    const {removeItem} = useCartContext();
    
    return(
        <div className="ItemCart">
            <div className="imgItemCart">
            <img src={product.img} alt={product.nombre} />
            </div>
            <div className="detailItemCart">
                <div>Producto: {product.nombre}</div>
                <div>Cantidad: {product.qty}</div>
                <div>Precio: {product.precio}</div>
                <div>Subtotal: ${product.qty * product.precio}</div>
                <button onClick={() => removeItem(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}