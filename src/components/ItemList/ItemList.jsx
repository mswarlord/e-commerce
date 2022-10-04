import React from 'react';
import './Itemlist.css';
import Item from '../Item/Item';
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
    };


    const productosListados = productos.map(prod => <Item key={prod.id} ofertaProducto={prod.oferta} descuentoProducto={prod.descuento} nombreProducto={prod.nombre} stockDisponible={prod.stock} imgURL={prod.img} />)

    return (
    <div className='itemList'>
        {productosListados}
    </div>
    )
}

export default ItemList;