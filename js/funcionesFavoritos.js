


var favoritos = localStorage.getItem("productos_favoritos") || "[]"
favoritos = JSON.parse(favoritos)

function mostrarFavoritos(){
    for( var i = 0; i < favoritos.length; i++){

        var a = document.createElement("a")
        var img = document.createElement("img")
        var div = document.createElement("div")
        var botonEliminar = document.createElement("button")
        botonEliminar.textContent = "Eliminar"
        var idsEliminar = idsProductos()
        botonEliminar.id = idsEliminar[i]
        botonEliminar.className = "botonEliminar"
        div.style.display = "flex"
        div.style.justifyContent = "space-between"
        div.style.alignItems = "center"
        div.style.alignItems = "center"
        div.style.marginTop = "100px"
        div.style.borderBottom ="3px solid #259c25"
        a.style.fontSize = "x-large"
        a.className = "style-link"
        a.href = favoritos[i].url
        a.textContent = favoritos[i].nombre
        img.className = "img-favoritos"
        img.src = favoritos[i].img
        div.appendChild(img)
        div.appendChild(a)
        div.appendChild(botonEliminar)
        document.getElementById("productoFavorito").appendChild(div)
    }

}

function idsProductos(){
    var favoritos = localStorage.getItem("productos_favoritos") || "[]"
    favoritos = JSON.parse(favoritos)
    var coleccionids = []
    for(var i = 0; i < favoritos.length; i++){
        coleccionids.push(favoritos[i].id)
    }
    return coleccionids
}

function eliminarFavoritos(){

    var botonSeleccionado = document.getElementsByClassName("botonEliminar")
    var elBoton
    for (var i = 0; i < botonSeleccionado.length; i++ ){
        botonSeleccionado[i].addEventListener('click',function(){
            elBoton = this.id
            favoritosAeliminar = favoritos.filter((item) => item.id !== elBoton)
            localStorage.setItem("productos_favoritos",JSON.stringify(favoritosAeliminar))
            location.reload()
        })
    }

}

if(favoritos.length == 0){
    var texto = document.getElementById("vacio")
    var contenido = "No tienes ningun articulo como favorito"
    texto.textContent = contenido
    texto.style.textAlign = "center"
}else{
    document.getElementById("vacio").style.display = "none"
    mostrarFavoritos()
}

eliminarFavoritos()

