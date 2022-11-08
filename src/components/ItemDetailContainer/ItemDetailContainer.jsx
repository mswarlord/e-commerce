import './ItemDetailContainer.css'
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore'; 
import { db } from '../../services/firebase';
import Loader from '../Loader/Loader';

const ItemDetailContainer = ({ setCart }) => {
  const [producto, setProducto] = useState()
  const [loading, setLoading] = useState(true)
  const { IdProducto } = useParams()

  useEffect(() => {
    const docRef = doc(db, 'productos', IdProducto)

    getDoc(docRef).then( resolve => {
      const data = resolve.data()
      const productAdapted = { id: resolve.id, ...data}
      setProducto(productAdapted)
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