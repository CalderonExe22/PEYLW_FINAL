
var boton_mas = document.getElementById("cantidad_art_mas")
var boton_menos = document.getElementById("cantidad_art_menos")

const precio = document.getElementsByClassName("precio_producto")[0].innerHTML

function masArticulos(){

    var stock = document.getElementById("stock").innerHTML

    var cantidad = document.getElementById("cantidad").innerHTML

    var numero = parseInt(cantidad);

    if( numero < stock ){

        numero = numero + 1

        document.getElementById("cantidad").innerHTML = numero

        var cantidad = document.getElementById("cantidad").innerHTML
        
        var valorModificado = parseInt(precio) * parseInt(cantidad) 
        
        document.getElementsByClassName("precio_producto")[0].innerHTML = valorModificado

    }
    
}

function menosArticulos(){

    var cantidad = document.getElementById("cantidad").innerHTML

    var numero = parseInt(cantidad);

    if( numero > 1){

        numero = numero - 1

        document.getElementById("cantidad").innerHTML = numero

        var cantidad = document.getElementById("cantidad").innerHTML
    
        var valorModificado = parseInt(document.getElementsByClassName("precio_producto")[0].innerHTML)  - parseInt(precio) 
        
        document.getElementsByClassName("precio_producto")[0].innerHTML = valorModificado

    }

}

function agregarAlCarrito(){


}

boton_mas.addEventListener('click',masArticulos)

boton_menos.addEventListener('click',menosArticulos)
