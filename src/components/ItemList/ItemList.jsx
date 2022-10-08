import React from 'react';
import './Itemlist.css';
import Item from '../Item/Item';
import {getProductos, getProductsByCategory} from '../../asyncMock';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

const ItemList = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {category} = useParams();

    useEffect(() => {
        setLoading(true)

        const asyncFunction = category ? getProductsByCategory : getProductos;

        asyncFunction(category).then((resolve)=>{
            setProductos(resolve)
        }).finally(()=>{
            setLoading(false)
        })
    }, [category])

    if(loading){
        return <Loader />
    };


    const productosListados = productos.map(prod => <Item key={prod.id} id={prod.id} ofertaProducto={prod.oferta} descuentoProducto={prod.descuento} nombreProducto={prod.nombre} stockDisponible={prod.stock} imgURL={prod.img} descripcion={prod.descripcion} precio={prod.precio} />)

    return (
    <div className='itemList'>
        <h1>{category}</h1>
        {productosListados}
    </div>
    )
}

export default ItemList;