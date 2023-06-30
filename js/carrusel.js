
var i = 0
var f = 0

function carrusel_derecha_articulos(){

    var producto =  document.getElementsByClassName("producto")
    var productos_carrusel = document.getElementsByClassName("otros_producto")

    if ( i < productos_carrusel.length && i >= 0 ){
        productos_carrusel[i].style.display = "flex"
        producto[i].style.display = "none"
        i = i + 1

    }
    

}

function carrusel_izquierda_articulos(){

    var producto =  document.getElementsByClassName("producto")
    var productos_carrusel = document.getElementsByClassName("otros_producto")
    
    if ( i > 0 && i <= productos_carrusel.length){
        i = i - 1 
        productos_carrusel[i].style.display = "none"
        producto[i].style.display = "flex"
       
    }

}

function carrusel_derecha_interes(){

    var producto_interes =  document.getElementsByClassName("producto_interes")
    var productos_carrusel_interes = document.getElementsByClassName("otros_producto_interes")

    if ( f < productos_carrusel_interes.length && f >= 0 ){
        productos_carrusel_interes[f].style.display = "flex"
        producto_interes[f].style.display = "none"
        f = f + 1
    }

}

function carrusel_izquierda_interes(){
    
    var producto_interes =  document.getElementsByClassName("producto_interes")
    var productos_carrusel_interes = document.getElementsByClassName("otros_producto_interes")

    if ( f > 0 && f <= productos_carrusel_interes.length ){
        f = f - 1
        productos_carrusel_interes[f].style.display = "none"
        producto_interes[f].style.display = "flex"

    }

}


var boton_der_ofertas = document.getElementById("boton_der_articulos")
var boton_izq_ofertas = document.getElementById("boton_izq_articulos")

var boton_der_interes = document.getElementById("boton_der_interesar")
var boton_izq_interes = document.getElementById("boton_izq_interesar")

boton_der_ofertas.addEventListener('click',carrusel_derecha_articulos)
boton_izq_ofertas.addEventListener('click',carrusel_izquierda_articulos)

boton_der_interes.addEventListener('click',carrusel_derecha_interes)
boton_izq_interes.addEventListener('click',carrusel_izquierda_interes)
