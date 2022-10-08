import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const Item = ({id, nombreProducto, stockDisponible, imgURL, ofertaProducto, descuentoProducto, precio}) => {

    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
    };

    const descuentoOferta = ofertaProducto ? 'nombreProducto oferta': 'nombreProducto'

    return (
        <article className='Item'>
            <Link to={`/detail/${id}`}>
                <picture>
                    <img src={imgURL} alt={nombreProducto} className='imagenProducto' />
                </picture>
            </Link>
            <section className={`ItemInformacion ${descuentoOferta}`}>
                <p className='ItemDescripcion'>
                    {nombreProducto}
                </p>
                <p className='ItemPrecio'>
                    ${precio}
                </p>
            </section>
            <footer className='detalleProducto'>
                <ItemCount onAdd={onAdd} initial={1} stock={stockDisponible} />
            </footer>
        </article>
)
}

export default Item