const productos = [
    {
        id: 1,
        nombre: 'Riel Picatinny Beretta FS92',
        precio: 800,
        categoria: 'Accesorios',
        material: 'PLA+',
        img: './assets/img/riel-picatinny.jpg',
        stock: 5,
        descripcion: 'Riel Picatinny para Pietro Beretta FS92 impreso en PLA+. Altura de capa 0.12mm y relleno 100% para mayor resistencia'
    },
    {
        id: 2,
        nombre: 'Tapa de resorte de martillo Beretta FS92',
        precio: 250,
        categoria: 'Accesorios',
        material: 'PLA+',
        img: './assets/img/tapa-beretta.jpg',
        stock: 10,
        descripcion: 'Tapa de Resorte de martillo para Pietro Beretta FS92 impreso en PLA+. Altura de capa 0.12mm y relleno 100% para mayor resistencia'
    },
    {
        id: 3,
        nombre: 'Busto San Martín - Pintado',
        precio: 3500,
        categoria: 'Escultura',
        material: 'PLA+',
        img: './assets/img/busto-san-martin.jpg',
        stock: 1,
        descripcion: 'Busto Gral. Don José de San Martín, Pintado a Mano con gran detalle, Altura de Capa 0.12mm, Máxima Definición'
    },
    {
        id: 4,
        nombre: 'Busto San Martín',
        precio: 2000,
        categoria: 'Escultura',
        material: 'PLA+',
        img: './assets/img/busto-san-martin.jpg',
        stock: 2,
        descripcion: 'Busto Gral. Don José de San Martín, Altura de Capa 0.12mm, Máxima Definición'
    },
    {
        id: 5,
        nombre: 'Maceta Baby Groot',
        precio: 3500,
        categoria: 'Hogar',
        material: 'PLA+',
        img: './assets/img/maceta-baby-groot.jpg',
        stock: 2,
        descripcion: 'Maceta Baby Groot, altura 20cm, Pintado a Mano con gran detalle, Altura de Capa 0.12mm, Máxima Definición'
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos)
        }, 2500)
    })
}