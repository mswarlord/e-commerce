const productos = [
    {
        id: '1',
        nombre: 'Riel Picatinny Beretta FS92',
        precio: 800,
        oferta: false,
        descuento: undefined,
        categoria: 'accesorios',
        material: 'PLA+',
        img: '../assets/img/riel-picatinny.jpg',
        stock: 5,
        descripcion: 'Riel Picatinny para Pietro Beretta FS92 impreso en PLA+. Altura de capa 0.12mm y relleno 100% para mayor resistencia'
    },
    {
        id: '2',
        nombre: 'Tapa de resorte de martillo Beretta FS92',
        precio: 250,
        oferta: false,
        descuento: undefined,
        categoria: 'accesorios',
        material: 'PLA+',
        img: '../assets/img/tapa-beretta.jpg',
        stock: 10,
        descripcion: 'Tapa de Resorte de martillo para Pietro Beretta FS92 impreso en PLA+. Altura de capa 0.12mm y relleno 100% para mayor resistencia'
    },
    {
        id: '3',
        nombre: 'Busto San Martín - Pintado',
        precio: 3500,
        oferta: false,
        descuento: undefined,
        categoria: 'esculturas',
        material: 'PLA+',
        img: '../assets/img/busto-san-martin.jpg',
        stock: 1,
        descripcion: 'Busto Gral. Don José de San Martín, Pintado a Mano con gran detalle, Altura de Capa 0.12mm, Máxima Definición'
    }/* ,
    {
        id: '4',
        nombre: 'Busto San Martín',
        precio: 2000,
        oferta: false,
        descuento: undefined,
        categoria: 'esculturas',
        material: 'PLA+',
        img: '../assets/img/busto-san-martin.jpg',
        stock: 2,
        descripcion: 'Busto Gral. Don José de San Martín, Altura de Capa 0.12mm, Máxima Definición'
    } */,
    {
        id: '5',
        nombre: 'Maceta Baby Groot',
        precio: 3500,
        oferta: false,
        descuento: undefined,
        categoria: 'hogar',
        material: 'PLA+',
        img: '../assets/img/maceta-baby-groot.jpg',
        stock: 2,
        descripcion: 'Maceta Baby Groot, altura 20cm, Pintado a Mano con gran detalle, Altura de Capa 0.12mm, Máxima Definición'
    },
    {
        id: '6',
        nombre: 'Chasis Auto Arduino',
        precio: 750,
        oferta: false,
        descuento: undefined,
        categoria: 'hobbie',
        material: 'PLA+',
        img: '../assets/img/chasis-auto-arduino.jpg',
        stock: 10,
        descripcion: 'Chasis para auto arduino, Altura de Capa 0.12mm'
    },
    {
        id: '7',
        nombre: 'Pokebola',
        precio: 1000,
        oferta: true,
        descuento: 20,
        categoria: 'hobbie',
        material: 'PLA+',
        img: '../assets/img/pokebola.jpg',
        stock: '3',
        descripcion: 'Pokebola, dimensiones 100x100mm, Altura de Capa 0.12mm, Máxima Definición'
    },
    {
        id: '8',
        nombre: 'Maceta Busto de Mujer',
        precio: 1500,
        oferta: false,
        descuento: undefined,
        categoria: 'hogar',
        material: 'PLA+',
        img: '../assets/img/maceta-busto-mujer.jpg',
        stock: 2,
        descripcion: 'Maceta busto de mujer, altura 15cm, Altura de Capa 0.18mm'
    },
    {
        id: '9',
        nombre: 'Maceta Cabeza de Gato',
        precio: 250,
        oferta: false,
        descuento: undefined,
        categoria: 'hogar',
        material: 'PLA+',
        img: '../assets/img/maceta-cabeza-gato.jpg',
        stock: 5,
        descripcion: 'Maceta cabeza de gato, altura 6cm, Pintado, Altura de Capa 0.12mm, Máxima Definición'
    },
    {
        id: '10',
        nombre: 'La Colmena',
        precio: 4000,
        oferta: false,
        descuento: undefined,
        categoria: 'hobbie',
        material: 'PLA+',
        img: '../assets/img/la-colmena.jpg',
        stock: 2,
        descripcion: 'Juego de Mesa La colmena. Altura de Capa 0.2mm. Incluye las reglas para jugar este fantastico juego de mesa de estrategia para dos jugadores'
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos)
        }, 500)
    })
}

export const getProductoById = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod => prod.id === id))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.filter(prod => prod.categoria === categoryId))
        },500)
    })
} 