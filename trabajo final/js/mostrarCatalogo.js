

var valueRotate = 90

function catalogo(){

    var flechaCatalogo = document.getElementById("menu-vertical")
    var imagen = document.getElementById("flecha")

    switch(valueRotate){
        case 90:
            flechaCatalogo.style.display = "block"
            imagen.style.transition = "all 300ms"
            imagen.style.transform = "rotate("+valueRotate+"deg)"
            valueRotate = 0
            break
        case 0:
            flechaCatalogo.style.display = "none"
            imagen.style.transform = "rotate("+valueRotate+"deg)"
            valueRotate = 90
            imagen.style.transition = "all 300ms"
            break
    }

}

document.getElementById('boton_catalogo').addEventListener('click',catalogo)


