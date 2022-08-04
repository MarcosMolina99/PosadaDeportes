import { productosFutbol } from "./stockProductos.js";

let carrito = [];

export const carritoCompras = (productoId) =>{

    const containerCarrito = document.getElementById("divCarrito");


    const renderizarProductosCarrito = () =>{

    

        let producto = productosFutbol.find(producto => producto.id ===  productoId);
        carrito.push(producto);

        producto.cantidad=1;

        let div = document.createElement("div");

        div.classList.add("productosCarrito");

        div.innerHTML = `<h3>${producto.item}</h3>
                        <h4>Precio:${producto.precio}</h4>
                        <h4>Cantidad:${producto.cantidad}</h4>`

        containerCarrito.appendChild(div);
        console.log(`<h3>${producto.item}</h3>
        <h4>Precio:${producto.precio}</h4>
        <h4>Cantidad:${producto.cantidad}</h4>`);
    }
    renderizarProductosCarrito();
}