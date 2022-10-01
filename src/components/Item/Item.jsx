import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'



const Item = ({nombreProducto, stockDisponible}) => {

    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
    };

    return (
        <div className='Item'>
            <h3>{nombreProducto}</h3>
            <ItemCount onAdd={onAdd} initial={1} stock={stockDisponible} />
        </div>
)

}

export default Item