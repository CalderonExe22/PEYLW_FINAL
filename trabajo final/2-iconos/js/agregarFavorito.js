

function agregarFavoritos(){

    var resultado = false

    var i = 0

    var datosProducto = 
    {
        id : document.getElementById("id_producto").value,
        img : document.getElementById("imagen").src,
        nombre : document.getElementById("nombre").textContent,
        url : document.location.href
    }
   
    favoritos = localStorage.getItem("productos_favoritos") || "[]"

    favoritos = JSON.parse(favoritos)

    while ( i < favoritos.length && !resultado){

        if ( favoritos[i].id == datosProducto.id){

            resultado = true

        }

        i = i + 1

    }

    if(resultado == false){
        favoritos.push(datosProducto)
    }


    localStorage.setItem("productos_favoritos", JSON.stringify(favoritos))
}


document.getElementById("agregar_favoritos").addEventListener('click',agregarFavoritos)

