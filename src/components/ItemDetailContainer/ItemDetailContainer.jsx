import React from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import {getProductoById} from '../../asyncMock';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductoById(5).then((resolve)=>{
            setProducto(resolve)
        }).finally(()=>{
            setLoading(false)
        })
    }, [])

    if(loading){
        return <Loader />
    };

  return (
    <div className='itemDetailContainer'>
        <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer;