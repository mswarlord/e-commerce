import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useCartContext } from "../../context/CartContext";
import './Form.css'

const Form = () => {

    const { cart, totalPrice, clearCart } = useCartContext();
    const total = totalPrice();

    const [inputValues, setInputValues] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        adress: "",
        flat: "",
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const finalSale = (e) => {
        e.preventDefault();
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
        usuario: inputValues,
        items: cart,
        date: serverTimestamp(),
        total,
        }).then(() => {
            clearCart()
        });
    };

    return (
        <div className='formContainer'>
            <h2>Total a abonar: $ {totalPrice()}</h2>
            <form onSubmit={finalSale}>
            <input
                name="name"
                type="name"
                placeholder="Nombre"
                onChange={handleOnChange}
                required
            />

            <input
                name="surname"
                type="family-name"
                placeholder="Apellido"
                onChange={handleOnChange}
            />
            <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleOnChange}
                required
            />
            <input
                name="phone"
                type="tel"
                placeholder="Telefono"
                onChange={handleOnChange}
                required
            />
            <input
                name="adress"
                type="street-address"
                placeholder="Direccion"
                onChange={handleOnChange}
                required
            />
            <input
                name="flat"
                type="text"
                placeholder="Departamento"
                onChange={handleOnChange}
                required
            />
            <button type="submit">Finalizar Compra</button>
            </form>
        </div>
    )
}

export default Form;