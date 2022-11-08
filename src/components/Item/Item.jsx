import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombreProducto, imgURL, ofertaProducto, precio}) => {

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
        </article>
)
}

export default Item