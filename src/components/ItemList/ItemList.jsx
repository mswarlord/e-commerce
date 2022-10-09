import React from 'react';
import './Itemlist.css';
import Item from '../Item/Item';

const ItemList = ({productos}) => {
        
    const productosListados = productos.map(prod => <Item key={prod.id} id={prod.id} ofertaProducto={prod.oferta} descuentoProducto={prod.descuento} nombreProducto={prod.nombre} stockDisponible={prod.stock} imgURL={prod.img} descripcion={prod.descripcion} precio={prod.precio} />)

    return (
    <div className='itemList'>
        {productosListados} 
    </div>
    )
}

export default ItemList;