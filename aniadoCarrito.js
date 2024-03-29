// import {productosFutbol} from "./stockProductos.js";
import { carritoCompras } from "./carritoCompras.js";

// let acumuladorPrecios=0;


const verProductos = async() =>{
    const containerProductos = document.getElementById("seccionCamisetas");

    try{
        const respuesta = await fetch("/stock.json");
        const productos = await respuesta.json();

        productos.forEach(producto => {
            const divCamisetas = document.createElement("div");
            divCamisetas.classList.add("cardContainer");

            divCamisetas.innerHTML+= `
            <div id="tarjetaProducto" class="card" style="width: 18rem;">
                <img class="card-img-top" src="${producto.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${producto.item}</h5>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button  href="#" class="btn btn-dark" id=botonCarrito${producto.id} >Añadir al carrito</button>`

            containerProductos.appendChild(divCamisetas);

            const botonAniadirCarrito = document.getElementById(`botonCarrito${producto.id}`);


            botonAniadirCarrito.addEventListener("click", async() =>{
                carritoCompras(producto.id);
                
                // if(localStorage.getItem(producto !== null)){
                //     producto= JSON.parse(localStorage.getItem(producto));
                // }
                
                Swal.fire(
                    `${producto.item}`,
                    'Agregado al carrito',
                    'success'
                )
                // localStorage.setItem('Productos', JSON.stringify(producto));
                // localStorage.setItem("Productos", JSON.stringify(producto))
                // const guardarProductos = (clave,valor) => {localStorage.setItem(clave,valor)};
                // for(const cadaProducto of carritoCompras){
                //     guardarProductos(cadaProducto.id, JSON.stringify(cadaProducto))
                // }
                // let productosStorage = [];
                // productosStorage = JSON.parse(localStorage.getItem('Productos')) || [];
                // productosStorage.push(producto);
                // localStorage.setItem("Productos", JSON.stringify(producto));
                // localStorage.setItem('productosCarrito', JSON.stringify(producto));
                // console.log(localStorage);
            })

        })
        

    }
    catch(error){
        console.log("Hubo un error");
    }
}
verProductos();

