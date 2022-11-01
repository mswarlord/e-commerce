import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'

const Checkout = () => {
  const { cart, totalPrice } = useContext(CartContext)
  const total = totalPrice();
  
  const createOrder = async () => { //es necesaria una funcion asincrona para realizar una accion cuando la consulta se termine de resolver
      try { // es necesario un try & catch para poder devolver un error en caso que exista
      const objOrder = {
        buyer: {
              name: 'Facundo',
              phone: '1155667799',
              mail: 'canterofacundo@hotmail.com'},
              items: cart,
              total
      }

      const batch = writeBatch(db) 
      const outOfStock = [];
      const ids = cart.map(prod => prod.id) //mapeo los ids de los productos que estan en el carrito del usuario

      const productsRef = collection(db, 'productos') //creo la referencia a los productos para buscar los ids de los productos en la colleccion correspondiente
      
      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
      
      const { docs } = productsAddedFromFirestore //desestructuro los docs del array
      
      docs.forEach(doc => { //necesito recorrer los datos del array para consultar los ids
        const dataDoc = doc.data() //guardo los datos de los doc

        const stockDb = dataDoc.stock //guardo el stock de la DB en la referencia

        const productAddedToCart = cart.find(prod => prod.id === doc.id) //guardo los productos agregados al carrito

        const prodQuantity = productAddedToCart?.qty //guardo la cantidad de los productos que fueron agregados al carrito
        //console.log(`Cantidad de productos adquiridos ${prodQuantity}`)
        if(stockDb >= prodQuantity) { //los doc que tengan stock se guardan en batch y el resto en outOfStock
          batch.update(doc.ref, { stock: stockDb - prodQuantity}) //actualiza el stock de la DB restando al stock actual de la DB la cantidad ene l carrito
        } else {//doc.ref tiene una referencia directa al documento de la coleccion sin necesidad de especificárselo
          outOfStock.push({ id: doc.id, ...dataDoc})
        }
      })

      if(outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')

        const orderAdded = await addDoc(orderRef, objOrder)
        console.log("el id de su orden es: " + orderAdded.id)
      }else {
        console.log("Hay productos fuera de stock")
      }

    } catch (error) {
      console.log(error)
    }}

  return (
    <div>
        <h1>CheckOut</h1>
        {/* <Form /> */}
        <button onClick={createOrder}> Generar Orden </button>
    </div>
  )
}

export default Checkout