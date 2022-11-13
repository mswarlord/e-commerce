import React, { useState } from "react";
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useCartContext } from "../../context/CartContext";
import './Form.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"
import { MdOutlinePayment } from 'react-icons/md';

const Form = () => {
    const navigate = useNavigate();
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

    const finishSale = (e) => {
        e.preventDefault();
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
        usuario: inputValues,
        items: cart,
        date: serverTimestamp(),
        total,
        }).then( res => {
            clearCart();
            toast.info(`El id de su compra es: ${res.id}`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            cart.forEach(prod => {
                stocksUpdate(prod)
            })
            setTimeout(()=>{
                navigate('/');
            },4000)
        });
    };

    const stocksUpdate = (producto) => {
        const stockUpdate = doc(db, 'productos', producto.id);
        updateDoc(stockUpdate,{stock:(producto.stock - producto.qty)})
    }

    return (
        <div className='formContainer'>
            <h2 className="totalPrice">Total a abonar: $ {totalPrice()}</h2>
            <form onSubmit={finishSale}>
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
            <button type="submit" className="finishSaleBtn"><MdOutlinePayment /> Finish Purchase</button>
            
            <ToastContainer position="top-right" autoClose={4000} newestOnTop={false} hideProgressBar={false} closeOnClick pauseOnFocusLoss rtl={false} draggable pauseOnHover theme="light" />
            </form>
        </div>
    )
}

export default Form;