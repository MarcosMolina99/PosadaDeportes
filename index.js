//creo el objeto con, hago un array donde guardo 4 objetos hardcodeados
/*
class Producto{
    constructor(id,item,precio){
        this.id= id;
        this. item=item;
        this.precio=precio;
        this.vendido=false;
    }
    vender(){
        this.vendido=true;
    }
}
const listaProductos= [];
const primerProducto= new Producto(500,"Camiseta de Argentina",15000, false);
const segundoProducto= new Producto(501,"Camiseta de Brasil",13000, false);
const tercerProducto= new Producto(502, "Camiseta de Bélgica", 17000, false);
const cuartoProducto= new Producto(503,"Camiseta de Francia", 18000, false);

listaProductos.push(primerProducto);
listaProductos.push(segundoProducto);
listaProductos.push(tercerProducto);
listaProductos.push(cuartoProducto);




// Se piden los datos de entrada para guardar el objeto en la lista de arrays
// let idProducto= parseInt(prompt("Ingrese el Id del producto a guardar."));
// let tipoProducto= prompt("Ingrese el tipo de item o producto.");
// let precioProducto=prompt("Ingrese el precio del producto");
// let descuentoCamisetaColombia;
// let descuentoCamisetaInglaterra;

listaProductos.push(new Producto(idProducto,tipoProducto,precioProducto,));

//Si el producto es ingresado = camiseta de colombia se muestra el precio final
//con un 15% descuento

if(tipoProducto=== "Camiseta de Colombia"){
    descuentoCamisetaColombia=calcularDescuento(0.85,precioProducto);
    console.log(`El precio de la camiseta de Colombia es de ${descuentoCamisetaColombia}`);
}
else{
    if(tipoProducto==="Camiseta de Inglaterra"){
        descuentoCamisetaInglaterra=calcularDescuento(0.80,precioProducto);
        console.log(`El precio de la camiseta de Inglaterra es de ${descuentoCamisetaInglaterra}`);
    }
}
//Si el producto ingresado es camiseta de inglaterra se muestra el precio final
//con un 20% descuento


function calcularDescuento(porcentajeDescuento, precio){
    let resultadoFinal= precio * porcentajeDescuento;

    return resultadoFinal;
}

function calcularIva(precio){
    let impuestoIva= precio * 0.21;

    return impuestoIva;
}


//Se pasan todas los productos a vendido=true con su respectivo método y se muestra el iva
for(const cadaProducto of listaProductos){
    cadaProducto.vender();
    let resultadoIva=calcularIva(cadaProducto.precio);
    console.log(`El iva del producto es de ${resultadoIva}`);
}

//Se muestra el array con los productos por consola
console.log(listaProductos);*/
