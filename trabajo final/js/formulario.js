

function validarNombre(){
    
    var cadena = document.getElementById("nombre").value
    esString  = new RegExp('^[A-Z]+$', 'i');

    if ( esString.test(cadena) && cadena !== "" && cadena.length >= 4){
        document.getElementById("nombre").style.borderBottom = "3px solid green"
        document.getElementById("nombreNoValido").innerHTML = ""
        return true
    }
    if(!esString.test(cadena) || cadena == "" || cadena.length < 4 ){
        document.getElementById("nombre").style.borderBottom = "3px solid red"
        document.getElementById("nombreNoValido").style.fontSize = "small"
        document.getElementById("nombreNoValido").style.color = "red"
        document.getElementById("nombreNoValido").innerHTML = "Ingrese un nombre valido"
        return false
    }
}

function validarApellido(){
    
    var cadena = document.getElementById("apellido").value
    esString  = new RegExp('^[A-Z]+$', 'i');

    if ( esString.test(cadena) && cadena !== "" && cadena.length >= 4){
        document.getElementById("apellido").style.borderBottom = "3px solid green"
        document.getElementById("apellidoNoValido").innerHTML = ""
        return true
    }
    if(!esString.test(cadena) || cadena == "" || cadena.length < 4 ){
        document.getElementById("apellido").style.borderBottom = "3px solid red"
        document.getElementById("apellidoNoValido").style.fontSize ="small"
        document.getElementById("apellidoNoValido").style.color ="red"
        document.getElementById("apellidoNoValido").innerHTML = "Ingrese un apellido valido"
        return false
    }
}


function validarEmail(){

    var email = document.getElementById("email").value
    var validar =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    if ( validar.test(email) && email !== ""){
        document.getElementById("email").style.borderBottom = "3px solid green"
        document.getElementById("emailNoValido").innerHTML = ""
        return true
    }
    if ( !validar.test(email) || email == ""){
        document.getElementById("email").style.borderBottom = "3px solid red"
        document.getElementById("emailNoValido").style.fontSize ="small"
        document.getElementById("emailNoValido").style.color ="red"
        document.getElementById("emailNoValido").innerHTML = "Ingrese un mail valido"
        return false
    }

}

function validarTelefono(){
    
    var numero = document.getElementById("telefono").value
    var soloNumeros = /^[0-9]+$/ 
    if(soloNumeros.test(numero) && numero !== "" && numero.length >= 8){
        document.getElementById("telefono").style.borderBottom = "3px solid green"
        document.getElementById("telefonoNoValido").innerHTML = ""
        return true
    }
    if(!soloNumeros.test(numero) || numero == "" || numero.length < 8 ){
        document.getElementById("telefono").style.borderBottom = "3px solid red"
        document.getElementById("telefonoNoValido").style.fontSize ="small"
        document.getElementById("telefonoNoValido").style.color = "red"
        document.getElementById("telefonoNoValido").innerHTML = "Ingrese un telefono valido"
        return false
    }
}

function validarConsulta(){

    var consulta = document.getElementById("consultaAenviar").value
    if (consulta !== "" && consulta.length > 50){
        document.getElementById("consultaAenviar").style.borderBottom = "3px solid green"
        document.getElementById("consultaNoValida").innerHTML = ""
        return true
    }
    if(consulta == "" || consulta.length < 50){
        document.getElementById("consultaAenviar").style.borderBottom = "3px solid yellow"
        document.getElementById("consultaNoValida").style.fontSize ="small"
        document.getElementById("consultaNoValida").style.color = "red"
        document.getElementById("consultaNoValida").innerHTML = "Campo obligatorio"
        return false
    }

}



var formulario = document.getElementById("formulario_de_contacto")

document.getElementById("nombre").addEventListener("keyup",validarNombre)
document.getElementById("apellido").addEventListener("keyup",validarApellido)
document.getElementById("email").addEventListener("keyup",validarEmail)
document.getElementById("telefono").addEventListener("keyup",validarTelefono)
document.getElementById("consultaAenviar").addEventListener("keyup",validarConsulta)

formulario.addEventListener("submit", e=>{

    e.preventDefault()
    
    if(validarNombre() ){
        estadoValidacionNombre = true
    }else{
        estadoValidacionNombre  = false
    }

    if(validarApellido()){
        estadoValidacionApellido = true
    }else{
        estadoValidacionApellido = false
    }

    if(validarEmail()){
        estadoValidacionEmail = true
    }else{
        estadoValidacionEmail = false
    }

    if(validarTelefono()){
        estadoValidacionTelefono = true
    }else{
        estadoValidacionTelefono = false
    }

    if(validarConsulta()){
        estadoValidacionConsulta = true
    }else{
        estadoValidacionConsulta = false
    }

       
    if(estadoValidacionNombre && estadoValidacionApellido && estadoValidacionEmail && estadoValidacionTelefono && estadoValidacionConsulta){

        var datosContacto = {
            nombre : document.getElementById("nombre").value,
            apellido : document.getElementById("apellido").value,
            email : document.getElementById("email").value,
            telefono : document.getElementById("telefono").value,
            consulta : document.getElementById("consultaAenviar").value
        }
        
        var contactos = localStorage.getItem("contactenos") || "[]"
        contactos = JSON.parse(contactos)
        
        contactos.push(datosContacto)
        
        localStorage.setItem("contactenos",JSON.stringify(contactos))
        
        document.getElementById("formulario_contactenos").style.display = "none"
        var envioExitoso = document.createElement("h1")
        envioExitoso.style.color ="rgb(37, 156, 37)"
        envioExitoso.style.marginTop = "150px"
        envioExitoso.style.marginBottom = "150px"
        envioExitoso.textContent = "GRACIAS POR COMPARTIR SU OPINION CON NOSOTROS!!"
        document.getElementById("cuerpo").style.backgroundImage = "url(file:///C:/Users/usuario/Downloads/graciasporcontactanos.webp) no-repeat"
        document.getElementById("cuerpo").appendChild(envioExitoso)

    }else{

        document.getElementById("verificarDatos").innerHTML = "Verifique los datos antes de enviar"
        document.getElementById("verificarDatos").style.color = "red"
        document.getElementById("verificarDatos").style.fontSize ="small"
    }

})


