import React from "react";
import './ItemCart.css';
import {useCartContext} from '../../context/CartContext'

export const ItemCart = ({product}) => {
    console.log(product)
    const {removeItem} = useCartContext();
    
    return(
        <div className="ItemCart">

            <div className="imgItemCart">
                <img src={product.img} alt={product.nombre} />
            </div>

            <div className="detailItemCart">
                <div className="firstColumnDetailItemCart">
                    <div>{product.descripcion}</div>
                    <div className="commandCart">
                        <div>Qtty: {product.qty}</div>
                        <button onClick={() => removeItem(product.id)} className='deleteButton'>Delete</button>
                    </div>
                </div>
                
                <div className="SecondColumnDetailItemCart">
                    Price: {product.precio}
                </div>
                {/* <div>Subtotal: ${product.qty * product.precio}</div> */}
            </div>

        </div>
    )
}