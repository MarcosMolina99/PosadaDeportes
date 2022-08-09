// import {productosFutbol} from "./stockProductos.js";
import { carritoCompras } from "./carritoCompras.js";

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
                    <button  href="#" class="btn btn-dark" id=botonCarrito${producto.id} >Añadir al carrito</button>
                </div>
            </div>`

            containerProductos.appendChild(divCamisetas);

            const botonAniadirCarrito = document.getElementById(`botonCarrito${producto.id}`);

            botonAniadirCarrito.addEventListener("click", () =>{
                carritoCompras(producto.id);
                Swal.fire(
                    `${producto.item}`,
                    'Agregado al carrito',
                    'success'
                )
            })
        })

    }
    catch(error){
        console.log(error);
    }

}
verProductos();

