import React from 'react'
import './ItemDetail.css'

const ItemDetail = (prod) => {
  return (
    <div className='detalleItem'>
        <div className='tituloProducto'>
            <h2>{prod.nombre} TITULO</h2>
        </div>
        <div className='contenedorDetalle'>
            <div className='imagenProducto'>
                IMAGEN
                <img src={prod.imgURL} alt="" />
            </div>
            <div className='detalle'>
                detalle
            </div>
        </div>
    </div>
  )
}

export default ItemDetail;