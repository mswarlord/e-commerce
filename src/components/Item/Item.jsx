import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'



const Item = ({nombreProducto, stockDisponible, imgURL, ofertaProducto, descuentoProducto}) => {

    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
    };

    const descuentoOferta = ofertaProducto ? 'nombreProducto oferta': 'nombreProducto'

    return (
        <div className='Item'>
            <div  className={descuentoOferta}>
                <h3><span className=''>{nombreProducto}</span></h3>
            </div>
            <img src={imgURL} alt="" className='imagenProducto' />
            <div className='detalleProducto'>
                <ItemCount onAdd={onAdd} initial={1} stock={stockDisponible} />
            </div>
        </div>
)
}

export default Item