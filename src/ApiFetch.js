
export const llamadaAPI = fetch('https://jsonplaceholder.typicode.com/users')
.then((respuesta) => respuesta.json())
.then((datos)=>console.log(datos))
