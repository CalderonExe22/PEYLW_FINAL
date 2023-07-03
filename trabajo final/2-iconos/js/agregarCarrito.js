

function agregarCarrito(){

    var resultado = false
    var stock = true
    var i = 0

    var stock = parseInt(document.getElementById("stock").innerHTML)

    var datosProducto = 
    {
        id : document.getElementById("id_producto").value,
        img : document.getElementById("imagen").src,
        nombre : document.getElementById("nombre").textContent,
        precio : document.getElementsByClassName("precio_producto")[0].innerHTML,
        precioFijo : document.getElementById("precioFijo").value,
        maxCantidad : stock,
        cantidad : document.getElementById("cantidad").innerHTML,
        url : document.location.href
    }

    const precio = parseInt(datosProducto.precio)

    carrito = localStorage.getItem("productos_carrito") || "[]"

    carrito = JSON.parse(carrito)

    while ( i < carrito.length && !resultado){
        if ( carrito[i].id == datosProducto.id ){
            resultado = true
            if (parseInt(carrito[i].cantidad) + parseInt(datosProducto.cantidad) <= stock ){
                carrito[i].cantidad = parseInt(carrito[i].cantidad) + parseInt(datosProducto.cantidad)
                carrito[i].precio = parseInt(parseInt(carrito[i].precio) + precio)
                localStorage.setItem("productos_favoritos", JSON.stringify(carrito))
            }else{
                document.getElementById("mensajeLimite").innerHTML = " stock no disponible"
                document.getElementById("mensajeLimite").style.color = "red"
                stock = false
            }
        }
        i++
    }

    if(resultado == false){
        carrito.push(datosProducto)
    }

    localStorage.setItem("productos_carrito", JSON.stringify(carrito))
    if ( stock){
       window.location.href = "../../carrito/carrito.html" 
    }
    
}


document.getElementById("agregar_carrito").addEventListener("click",agregarCarrito)
