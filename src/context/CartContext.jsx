import { useState, useEffect, createContext, useContext } from "react"

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    const [cart, setCart] = useState(cartStorage);

    console.log(cart)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            setCart(
            cart.map((product) => {
                return product.id === item.id
                ? { ...product, cantidad: product.cantidad + cantidad }
                : product;
            })
            );
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    /* const addItem = (productToAdd) => {
        console.log(addItem)
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        }else{
            console.log('ya se encuentra en el carrito')
        }
    } */

    const totalPrice = () => cart.reduce((prev, actual) => prev + actual.qty * actual.precio, 0)

    const totalProducts = () => cart.reduce((prev, actual) => prev + actual.qty, 0)

    const clearCart = () => setCart([])

    const isInCart = (id) => cart.some(prod => prod.id === id)

    const removeItem = (id) => setCart(cart.filter(producto => producto.id !== id))

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.qty
        })

        return accu
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getQuantity, totalPrice, totalProducts}}>
            {children}
        </CartContext.Provider>
    )
}