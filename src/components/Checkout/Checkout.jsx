import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/firebase'

const Checkout = () => {
    const { cart, totalPrice } = useContext(CartContext)
    const total = totalPrice();
    const createOrder = () =>{
    const objOrder = {
        buyer: {
            name: 'Facundo',
            phone: '1155667799',
            mail: 'canterofacundo@hotmail.com'
        },
        items: cart,
        total
    }

    const collectionRef = collection(db, 'orders')
    addDoc(collectionRef, objOrder).then(response => {
      console.log(response.id)
    }).catch(error =>{
      console.log(error)
    })
}

  return (
    <div>
        <h1>CheckOut</h1>
        <h2>Formulario</h2>
        <button onClick={createOrder}> Generar Orden </button>
    </div>
  )
}

export default Checkout