import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';
import { getDocs, collection } from 'firebase/firestore'; 
import { query, where } from 'firebase/firestore'; //where establece la condicion (filtro), y query realiza la consulta a la coleccion de la DB dada con el filtro indicado
import { db } from '../../services/firebase';

const ItemListContainer = ({greeting}) => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {category} = useParams();

    useEffect(() => {
        setLoading(true)


        const collectionRef = category 

        ?  query(collection(db, 'productos'), where('categoria', '==', category))

        : collection(db, 'productos') 

        getDocs(collectionRef).then((resolve)=>{
            const productsAdapted = resolve.docs.map(doc => { 
                const data = doc.data() 
                return{ id: doc.id, ...data} 
            })
            
            setProductos(productsAdapted)
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