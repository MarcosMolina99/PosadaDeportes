import { productosFutbol } from "./stockFutbol.js";

let carrito = [];

export const carritoCompras = (productoId) =>{

    const containerCarrito = document.getElementById("containerCarrito");


    const renderizarProductosCarrito = () =>{

    

        let producto = productosFutbol.find(producto => producto.id ===  productoId);
        carritoCompras.push(producto);

        producto.cantidad=1;

        let div = document.createElement("div");

        div.classList.add("contenedorCamisetas");  //?

        div.innerHTML = `<h3>${producto.item}</h3>
                        <h4>Precio:${producto.precio}</h4>
                        <h4>Cantidad:${producto.cantidad}</h4>`

        containerCarrito.appendChild(div);
    }
    renderizarProductosCarrito();
}