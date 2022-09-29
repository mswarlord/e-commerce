import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({nombreProducto, stockDisponible}) => {

    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
    };

    return (
        <div className='ItemDetail'>
            <h3>{nombreProducto}</h3>
            <ItemCount onAdd={onAdd} initial={1} stock={stockDisponible} />
        </div>
)

}

export default ItemDetail