import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import {getProductos, getProductsByCategory} from '../../asyncMock';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';

const ItemListContainer = ({greeting}) => {
    
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

    if(productos.length === 0) {
        return category ? <h1 className='NoProducts'>Por el momento no hay productos en la categoría "{category}"</h1> : <h1>No hay productos disponibles</h1>
    }
    const title = category ? category : greeting;
    return (
        <div className='ItemListContainer'>
            <h1 className='ILCTitle'>{greeting = title}</h1>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer;