import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  return (
    <div className='itemDetailContainer'>
        <h1>Item Detail Container</h1>
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer;