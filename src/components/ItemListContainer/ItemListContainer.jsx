import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='ItemListContainer'>
           <h1 className='ILCTitle'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;