// import { productosFutbol } from "./stockProductos.js";

let carrito = [];

export const carritoCompras = (productoId) =>{

    const containerCarrito = document.getElementById("divCarrito");
    let acumuladorPrecios=0;

    const renderizarProductosCarrito = async() =>{

        fetch("/stock.json")
        .then(data => data.json())
        .then(productos =>{
            let productoStock = productos.find(productos => productos.id ===  productoId);
            carrito.push(productoStock);
    
            let div = document.createElement("div");

            div.classList.add("productosCarrito");
    
            div.innerHTML = `<h3>${productoStock.item}</h3>
                            <h4>Precio:${productoStock.precio}</h4>
                            `
            
            containerCarrito.appendChild(div);

                acumuladorPrecios= acumuladorPrecios + productoStock.precio;
                console.log(acumuladorPrecios); 


            const botonBorrarItem= document.createElement("button");

            botonBorrarItem.classList.add("btn","btn-light");
            botonBorrarItem.innerHTML = "X";
            div.appendChild(botonBorrarItem);

            botonBorrarItem.addEventListener("click",()=>{
                div.innerText = "";
                Swal.fire(
                    'Producto eliminado del carrito',
                    'Continúe con su búsqueda',
                    'warning'
                )
            })

            console.log(`<h3>${productoStock.item}</h3>
            <h4>Precio:${productoStock.precio}</h4>
            `);

            const botonVaciarCarrito = document.getElementById("eliminarTodo")
            botonVaciarCarrito.addEventListener("click", ()=>{
                const vacioCarrito= document.getElementById("divCarrito");
                vacioCarrito.innerHTML="";
                carrito=[];
                if(carrito.length>=1){
                    localStorage.clear;
                }
                div.innerHTML="";
                console.log(carrito);
                Swal.fire(
                    'Carrito vaciado',
                    '¡Añada más productos!',
                    'success'
                )
                
            })
            

        })
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        console.log(localStorage);
    }

    renderizarProductosCarrito();

}