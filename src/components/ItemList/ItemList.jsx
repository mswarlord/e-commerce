import React from 'react';
import './Itemlist.css';
import ItemDetail from '../Item/Item';
import {getProductos} from '../../asyncMock';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
const ItemList = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductos().then((resolve)=>{
            setProductos(resolve)
        }).finally(()=>{
            setLoading(false)
        })
    }, [])

    if(loading){
        return <Loader />
    }else{

    };


    const productosListados = productos.map(prod => <ItemDetail nombreProducto={prod.nombre} stockDisponible={prod.stock} />)
    return (
    <div className='itemList'>
        {productosListados}
    </div>
  )
}

export default ItemList;