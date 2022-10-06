import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({producto}) => {
  return (
    <div className='detalleItem'>
        <div className='contenedorDetalle'>
            <div className='imagenProducto'>
                <img src={producto.img} alt="" />
            </div>
            <div className='detalle'>
                <div className='tituloProducto'>
                    <h2>{producto.nombre}</h2>
                </div>
                <h3><span className='detalleDescripcion'>{producto.descripcion}</span></h3>
                <h3><span className='detalleAtributo'>Precio:</span> ${producto.precio}</h3>
                <h4><span className='detalleAtributo'>Material:</span> {producto.material}</h4>
                <h4><span className='detalleAtributo'>Stock:</span> {producto.stock}</h4>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail;