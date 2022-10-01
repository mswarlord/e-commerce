import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'



const Item = ({nombreProducto, stockDisponible, imgURL}) => {

    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
    };
    

    return (
        <div className='Item'>
            <div  className='nombreProducto'>
                <h3>{nombreProducto}</h3>
            </div>
            <img src={imgURL} alt="" className='imagenProducto' />
            <div className='detalleProducto'>
                <ItemCount onAdd={onAdd} initial={1} stock={stockDisponible} />
            </div>
        </div>
)
}

export default Item