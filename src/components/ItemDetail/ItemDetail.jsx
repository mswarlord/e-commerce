import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, img, nombre, descripcion, precio, material, stock, categoria}) => {
    
    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
    };

    return (
    <article className='detalleItem'>
            <picture className='imagenDetailProducto'>
                <img src={img} alt={nombre} />
            </picture>
            <div className='contadorDetalle'>
                <ItemCount onAdd={onAdd} initial={1} stock={stock} />
            </div>
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
    </article>
  )
}

export default ItemDetail;