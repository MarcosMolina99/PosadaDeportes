const productosFutbol = [
    {id: 100, item: "Camiseta de Argentina", precio: 16999, cantidad: 1, img: "/img/seleccion4.jpg"},
    {id: 101, item: "Camiseta de Francia", precio: 13999, cantidad: 1, img: "/img/Camiseta-Francia.jpg"},
    {id: 102, item: "Short de Boca", precio: 7999, cantidad: 1, img: "/img/Short-Boca.jpg"},
    {id: 103, item: "Camiseta de River Mujer", precio: 14999, cantidad: 1, img: "/img/RiverMujer.jpg"},
    {id: 104, item: "Camiseta de Bélgica", precio: 13999, cantidad: 1, img: "/img/Camiseta-Belgica.jpg"},
    {id: 105, item: "Camiseta de Holanda", precio: 14999, cantidad: 1, img: "/img/holanda.jpg"},
    {id: 106, item: "Short de Argentina", precio: 8999, cantidad: 1, img: "/img/shortArgentina.jpg"},
    {id: 107, item: "Camiseta de Boca Mujer", precio: 13999, cantidad: 1, img: "/img/Short-River.jpg"},
    {id: 108, item: "Camiseta de Argentina ", precio: 17999, cantidad: 1, img: "/img/ArgentinaSuplente.jpg"},
    {id: 109, item: "Camiseta de arquero Arg", precio: 14999, cantidad: 1, img: "/img/arqueroSeleccion.jpg"}
]

const guardarProductos = (clave, valor) => {localStorage.setItem(clave,valor)};

// for(const producto of productosFutbol){
//     guardarProductos(producto.id, JSON.stringify(producto));
// }

guardarProductos("lista Productos", JSON.stringify(productosFutbol));

let verProductos = localStorage.getItem("productosFutbol");

console.log(JSON.parse(verProductos));

export {productosFutbol};
