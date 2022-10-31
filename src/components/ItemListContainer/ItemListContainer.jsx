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
        : collection(db, 'productos') //llamo a la colleccion productos en la base de datos db de firebase
        getDocs(collectionRef).then((resolve)=>{ //paso como atributo a la funcion getDocs la colleccion que quiero consultar
            //console.log(resolve) --> no muestra los campos solo el ID
            const productsAdapted = resolve.docs.map(doc => { //mapeo los productos para tomar los datos que estan dentro del array. es necesario ya que al llamar los datos de firebase,
                //vienen "enmascarados". Es necesario ejecutar la funcion data para tener los datos en limpio. Ademas el campo ID no existe, ya que no lo añadimos como un campo mas, sino 
                //como una propiedad extra de firebase
                const data = doc.data() //con esta funcion se guarda en la constante data los campos del array docs. puede probarse haciendo console.log(data) para visualizar los campos
                //console.log(data) --> muestra los campos menos el ID
                //por ultimo es necesario agrupar los datos con el id que esta a un nivel superior.
                return{ id: doc.id, ...data} //con esto retorno un objeto con el ID y los campos de data.
            })
            //console.log(productsAdapted) --> me devuelve un objeto con todos los datos del producto incluyendo el id como un campo mas
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