


const productos = document.getElementsByClassName("productos")


function menorPrecio(){

    var precio = document.getElementsByClassName("elPrecio")
    
    var i = 1

    var menorPrecio = parseInt(precio[0].innerHTML)

    while( i < precio.length ){
        if(parseInt(precio[i].innerHTML) <= menorPrecio ){

            menorPrecio = precio[i].innerHTML
        }
        i++
    }
    return menorPrecio

}


function limpiarFiltro(){
    var productos = document.getElementsByClassName("productos")
    for(var i = 0; i < productos.length; i++){
        productos[i].style.display = "flex"
    }
    document.getElementById("precio_desde").value = ""
    document.getElementById("precio_hasta").value = ""
}

function filtroPrecio(){

    var precios = document.getElementsByClassName("elPrecio")
    var desde = parseInt(document.getElementById("precio_desde").value)
    var hasta = parseInt(document.getElementById("precio_hasta").value)

    if ( desde >= parseInt(menorPrecio()) && hasta > desde   ){

        for (var i = 0; i < precios.length; i++){
            if(parseInt(precios[i].innerHTML) <= hasta &&  parseInt(precios[i].innerHTML) >= desde ){
                productos[i].style.display = "flex"
            }else{
                productos[i].style.display = "none"
            }
        }
        document.getElementById("precio_desde").style.borderBottom = "1px solid #259c25"
        document.getElementById("precio_hasta").style.borderBottom = "1px solid #259c25"
        
    }else{
        document.getElementById("precio_desde").style.borderBottom = "1px solid red"
        document.getElementById("precio_hasta").style.borderBottom = "1px solid red"
    }

}


document.getElementById("aplicar").addEventListener('click',filtroPrecio)
document.getElementById("limpiar").onclick = limpiarFiltro 