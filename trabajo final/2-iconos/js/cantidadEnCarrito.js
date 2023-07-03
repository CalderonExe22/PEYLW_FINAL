
function cantCarrito(){

    var productosEnCarrito = localStorage.getItem("productos_carrito") || "[]"

    productosEnCarrito = JSON.parse(productosEnCarrito)

    var cantidad = 0

    for ( var i = 0; i < productosEnCarrito.length; i++){
        cantidad = cantidad + parseInt(productosEnCarrito[i].cantidad)
    }

    document.getElementById("cantidad_carrito").innerHTML = cantidad

}

cantCarrito()