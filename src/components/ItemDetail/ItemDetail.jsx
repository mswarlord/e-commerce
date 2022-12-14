import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { NavLink, Link } from 'react-router-dom'
import { NotificationContext } from '../../notification/NotificationService'
import { FaHome } from "react-icons/fa";
const ItemDetail = ({ id, img, nombre, descripcion, precio, material, stock, categoria}) => {

    const { addItem } = useCartContext();
    const { setNotification } = useContext(NotificationContext);

    const [endPurchase, setEndPurchase] = useState(false);

    const onAdd = (qty) => {
        setEndPurchase(true);

        const productToAdd ={
            id, nombre, precio, qty, img, descripcion, stock
        }

        addItem( productToAdd )
        setNotification('success', `Se Agregó correctamente ${qty} ${nombre}`)
    };

    return (
    <article className='detalleItem'>
            
            <picture className='imagenDetailContainer'>
                <img src={img} alt={nombre} />
            </picture>
            
            <div className='detalle'>
                <div className='tituloProducto'>
                    <h2>{nombre}</h2>
                </div>
                <div className='datailContainer'>
                    <div className='attributes'>
                        <h3><span className='detalleDescripcion'>{descripcion}</span></h3>
                        <h4><span className='attribDetail'>Precio:</span> ${precio}</h4>
                        <h4><span className='attribDetail'>Material:</span> {material}</h4>
                        <h4><span className='attribDetail'>Stock:</span> {stock}</h4>
                        <h4><span className='attribDetail'>Categoría:</span> {categoria}</h4>
                    </div>
                    <div className='commandContainer'>
                        {
                            endPurchase 
                            ?
                            <div className='buttonsDetail'>
                                <NavLink to="/"><button className='cartButton buttonDetail'> Keep Buying </button></NavLink>
                                <NavLink to="/cart"><button className='cartButton buttonDetail'>Finish Purchase</button></NavLink>
                            </div>
                            :
                            stock
                            ? 
                            <div className='counterDetail'> 
                                <ItemCount onAdd={onAdd} initial={1} stock={stock} />
                            </div>
                            :
                            <div className='outOfStockContainer'>
                                <h1 className='ouOfStock'>Out of Stock</h1>
                                <Link to="/">
                                    <div className='iconCartContainer containerHome'>
                                        <FaHome className='iconCart'/>
                                    </div>
                                </Link>
                            </div>
} 
                    </div>
                </div>
        </div>
    </article>
    )
}

export default ItemDetail;