import './ItemDetailContainer.css'
import { useState, useEffect } from 'react';
import {getProductoById} from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState()
  const [loading, setLoading] = useState(true)  

  const { IdProducto } = useParams()

  useEffect(() => {
        getProductoById(IdProducto).then((resolve)=>{
            setProducto(resolve)
        }).finally(()=>{
            setLoading(false)
        })
    }, [IdProducto])

    if(loading){
        return <Loader />
    };

  return (
    <div className='itemDetailContainer'>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer;