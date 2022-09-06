// const cargaProductosStorage = async() =>{
//     try {
//         const respuesta = await fetch("/stock.json");
//         const data = await respuesta.json();

//         const guardarProductos = (clave,valor) => {localStorage.setItem(clave,valor)};

//         for(const productos of data){
//             guardarProductos(productos.id, JSON.stringify(productos));

//             let verProductos = localStorage.getItem(productos);

//             console.log(verProductos);
//         }
//     } catch (error) {
//         console.log("Error al cargar los datos en el storage");
//     }
// }
// cargaProductosStorage();
