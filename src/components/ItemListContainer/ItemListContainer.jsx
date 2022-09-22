import React from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='ItemListContainer'>
            <h1 className='ILCTitle'>{greeting}</h1>
            <ItemCount />
        </div>
    )
}

export default ItemListContainer;