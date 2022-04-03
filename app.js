// const numeros = [1, 2, 3, 4, 5];

// for (let index = 0; index < 5; index++){
//     alert(numeros[index])
// }

// if (indice > -1){
//     productos.splice(indice, 1)
// }

const productos = ['camiseta', 'pantalon', 'carro', 'manzana', 'pizza'];

let productoNuevo = () => {
    productos.push(prompt('Ingresa un nuevo valor').toLowerCase())
    console.log(productos)
}

let productoEliminar = () => {
    let indice = productos.indexOf(prompt('Escribe el nombre del producto a eliminar'))
    if (indice > -1){
        productos.splice(indice, 1)
    }

    console.log(productos)
}