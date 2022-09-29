import React from 'react'
import './Itemlist.css'
import ItemDetail from '../ItemDetail/ItemDetail'
const ItemList = () => {
  return (
    <div className='itemList'>
        <ItemDetail stockDisponible={5} />
        <ItemDetail stockDisponible={2}  />
        <ItemDetail stockDisponible={1}  />
    </div>
  )
}

export default ItemList;