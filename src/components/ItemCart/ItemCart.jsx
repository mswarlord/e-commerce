import React from "react";
import './ItemCart.css';
import {useCartContext} from '../../context/CartContext'
import { FaTrash } from 'react-icons/fa';

export const ItemCart = ({product}) => {

    const {removeItem} = useCartContext();
    
    return(
        <div className="ItemCart">

            <div className="imgItemCart">
                <img src={product.img} alt={product.nombre} />
            </div>

            <div className="detailItemCart">
                <div className="firstColumnDetailItemCart">
                    <div className="detailText">{product.descripcion}</div>
                    <div className="commandCart">
                        <div>Qtty: {product.qty}</div>
                        <FaTrash onClick={() => removeItem(product.id)} className='deleteButton'/>
                    </div>
                </div>
                
                <div className="secondColumnDetailItemCart">
                    ${product.precio}
                </div>

            </div>
        </div>
    )
}