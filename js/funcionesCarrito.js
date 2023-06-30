


var carrito = localStorage.getItem("productos_carrito") || "[]"
carrito = JSON.parse(carrito)
const ids = idsProductosCarrito()

function mostrarCarrito(){
    
    for( var i = 0; i < carrito.length; i++){

        var a = document.createElement("a")
        var img = document.createElement("img")
        var flechaAbajo = document.createElement("button")
        var flechaArriba = document.createElement("button")
        var pcantidad = document.createElement("p")
        var pprecio = document.createElement("h1")
        var div = document.createElement("div")
        var divCantidad = document.createElement("div")
        var botonEliminar = document.createElement("button")

        botonEliminar.textContent = "Eliminar"

        botonEliminar.id = ids[i]
        botonEliminar.className = "eliminar"
        div.style.display = "flex"
        div.style.justifyContent = "space-between"
        div.style.alignItems = "center"
        div.style.marginTop = "100px"
        div.style.borderBottom ="3px solid #259c25"
        divCantidad.style.display ="flex"
        divCantidad.style.alignItems = "center"
        divCantidad.style.gap = "15px"

        a.href = carrito[i].url
        a.textContent = carrito[i].nombre
        a.className = "style-link"
        a.style.fontSize = "x-large"

        img.className = "img-favoritos"
        img.src = carrito[i].img
        flechaAbajo.className = ids[i]
        flechaArriba.className = ids[i]
        flechaAbajo.textContent = "-"
        flechaArriba.textContent = "+"

        pprecio.textContent = "precio: $"+carrito[i].precio
        pcantidad.textContent = "Cantidad: "+carrito[i].cantidad
        pcantidad.id = "cantidadProductos"
        
        div.appendChild(img)
        div.appendChild(a)
        div.appendChild(pprecio)
        divCantidad.appendChild(pcantidad)
        divCantidad.appendChild(flechaArriba)
        divCantidad.appendChild(flechaAbajo)
        div.appendChild(divCantidad)
        div.appendChild(botonEliminar)
        document.getElementById("carrito").appendChild(div)
    }

}

function idsProductosCarrito(){
    var coleccionids = []
    for(var i = 0; i < carrito.length; i++){
        coleccionids.push(carrito[i].id)
    }
    return coleccionids
}


function eliminarCarrito(){

    var botonSeleccionado = document.getElementsByClassName("eliminar")
    var elBoton
    for (var i = 0; i < botonSeleccionado.length; i++ ){
        botonSeleccionado[i].addEventListener('click',function(){
            elBoton = this.id
            carritoAeliminar = carrito.filter((item) => item.id !== elBoton)
            localStorage.setItem("productos_carrito",JSON.stringify(carritoAeliminar))
            location.reload()
        })
    }

}

function masArticulos(elBoton){
    
    /*var botonSeleccionado = document.getElementsByTagName("button")
    var elBoton
    for (var i = 0; i < botonSeleccionado.length; i++ ){
        botonSeleccionado[i].addEventListener('click',function(){
            elBoton = this.className*/
            carritoNuevaCantidad = carrito.filter((item) => item.id == elBoton)
            var producto = carritoNuevaCantidad[0]
            var cantidad = parseInt(carritoNuevaCantidad[0].cantidad)
            var precio = parseInt(carritoNuevaCantidad[0].precioFijo)

            if( cantidad < parseInt(producto.maxCantidad) ){

                cantidad = cantidad + 1
                producto.precio = precio * cantidad
                producto.cantidad = cantidad
                carritoNuevaCantidad = carrito.filter((item) => item.id !== elBoton)
                carritoNuevaCantidad.push(producto) 
                
                localStorage.setItem("productos_carrito",JSON.stringify(carritoNuevaCantidad))
                location.reload()
        
            }
                
            
        /*})
    }*/
}

function menosArticulos(elBoton){
    
    /*var botonSeleccionado = document.getElementsByTagName("button")
    var elBoton
    for (var i = 0; i < botonSeleccionado.length; i++ ){
        botonSeleccionado[i].addEventListener('click',function(){
            elBoton = this.className*/
            carritoNuevaCantidad = carrito.filter((item) => item.id == elBoton)
            var producto = carritoNuevaCantidad[0]
            var cantidad = parseInt(carritoNuevaCantidad[0].cantidad)
            var precio = parseInt(carritoNuevaCantidad[0].precioFijo)

            if( cantidad > 1 ){

                producto.precio = (precio * cantidad) - precio
                cantidad = cantidad - 1
                producto.cantidad = cantidad
                carritoNuevaCantidad = carrito.filter((item) => item.id !== elBoton)
                carritoNuevaCantidad.push(producto) 
                
                localStorage.setItem("productos_carrito",JSON.stringify(carritoNuevaCantidad))
                location.reload()
            }
            
        /*})
    }*/

    
}

if(carrito.length == 0){
    var texto = document.getElementById("vacio")
    var contenido = "No tienes ningun articulo en el carrito"
    texto.textContent = contenido
    texto.style.textAlign = "center"
}else{
    document.getElementById("vacio").style.display = "none"
    mostrarCarrito()
}

var botonSeleccionado = document.getElementsByTagName("button")
var elBoton
for (var i = 0; i < botonSeleccionado.length; i++ ){
    botonSeleccionado[i].addEventListener('click',function(){
        var valorBoton = this.innerHTML
        elBoton = this.className
        if (valorBoton == "+"){
            masArticulos(elBoton)
        }
        if ( valorBoton == "-"){
            menosArticulos(elBoton)
        }
        
    })
}

eliminarCarrito()