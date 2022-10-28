import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NotificationContext } from '../../notification/NotificationService'

const ItemDetail = ({ id, img, nombre, descripcion, precio, material, stock, categoria}) => {

    const { addItem } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);

    const [endPurchase, setEndPurchase] = useState(false);

    const onAdd = (qty) => {
        setEndPurchase(true);

        const productToAdd ={
            id, nombre, precio, qty
        }
        console.log(productToAdd);

        //alert(`Agregaste ${qty} productos`);

        addItem( productToAdd )
        setNotification('success', `Se Agregó correctamente ${qty} ${nombre}`)
    };

    return (
    <article className='detalleItem'>
            
            <picture className='imagenDetailProducto'>
                <img src={img} alt={nombre} />
            </picture>
            
            
            <div className='detalle'>
                <div className='tituloProducto'>
                    <h2>{nombre}</h2>
                </div>
                <h3><span className='detalleDescripcion'>{descripcion}</span></h3>
                <h4><span className='detalleAtributo'>Precio:</span> ${precio}</h4>
                <h4><span className='detalleAtributo'>Material:</span> {material}</h4>
                <h4><span className='detalleAtributo'>Stock:</span> {stock}</h4>
                <h4><span className='detalleAtributo'>Categoría:</span> {categoria}</h4>
            </div>
        {
            endPurchase ?
            <div className='detalleBotonera'>
                <NavLink to="/">
                    <button>Seguir comprando</button>
                </NavLink>
                <NavLink to="/cart">
                    <button>Finalizar compra</button>
                </NavLink>
            </div>
            :
            <div className='contadorDetalle'> <ItemCount onAdd={onAdd} initial={1} stock={stock} /> </div>
        } 
    </article>
    )
}

export default ItemDetail;