import { useState, useEffect, createContext } from "react"
import { act } from "react-dom/test-utils"

export const CartContext = createContext({ cart: [], totalQuantity: 0 })

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    
    console.log(cart)
    
    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart])

    const addItem = (productToAdd) => {
        console.log(addItem)
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        }else{
            console.log('ya se encuentra en el carrito')
        }
    }  

    /* const addItem = (productToAdd, qty) => {
        if(!isInCart(productToAdd.id)) {
            setCart(cart.map(product => {
                return product.id === productToAdd.id ? { ...product, qty: product.qty + qty} : product
            }))
        }else{
            setCart([...cart, {productToAdd, qty}])
        }
    } */

    const totalPrice = () => {
        return cart.reduce((prev, actual) => prev + actual.qty * act.precio, 0)
    };

    const totalProducts = () => {
        return cart.reduce((prev, actual) => prev + actual.qty, 0)
    };


    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => setCart(cart.filter(producto => producto.id !== id))

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.qty
        })

        return accu
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, getQuantity, totalPrice, totalProducts}}>
            {children}
        </CartContext.Provider>
    )
}