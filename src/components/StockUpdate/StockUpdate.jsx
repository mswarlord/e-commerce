//Prueba para actualizar documentos
import React from 'react'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const StockUpdate = () => {
    const docRef = doc(db, 'productos', 'ONm5fMiWVPYDHvQgohpI')
    const update = () =>{
        updateDoc(docRef, {stock: 3})
    }

  return (
    <button onClick={update}>actualizar stock</button>
  )
}

export default StockUpdate