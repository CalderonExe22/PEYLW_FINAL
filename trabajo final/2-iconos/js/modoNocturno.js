document.getElementById("modoNocturno").addEventListener("mouseover",function(){
    document.getElementById("luna").style.display = "block"
    document.getElementById("luna").style.transition = "all 300ms"
})

document.getElementById("modoNocturno").addEventListener("mouseout",function(){
    document.getElementById("luna").style.display = "none"
    document.getElementById("luna").style.transition = "all 300ms"
})

document.getElementById("modoNocturno").addEventListener("click",function(){

    document.body.style.filter = "invert(100%)"
    document.getElementsByClassName("imagen-encabezado")[0].style.filter = "invert(100%)"
    document.getElementsByClassName("imagen-encabezado")[0].style.zIndex = "-1"
    document.body.style.backgroundColor = "black"
    document.body.style.border = "4px solid black"
    
    for(var i = 0; i < document.getElementsByTagName("img").length; i++){
        document.getElementsByTagName("img")[i].style.filter = "invert(100%)"
    }

    for(var i = 0; i < document.getElementsByTagName("a").length; i++){
        document.getElementsByTagName("a")[i].style.color = "black"
    }

    for(var i = 0; i < document.getElementsByTagName("h1").length; i++){
        document.getElementsByTagName("h1")[i].style.color = "black"
    }

    for(var i = 0; i < document.getElementsByTagName("p").length; i++){
        document.getElementsByTagName("p")[i].style.color = "black"
    }

    for(var i = 0; i < document.getElementsByTagName("span").length; i++){
        document.getElementsByTagName("span")[i].style.color = "black"
    }

    for(var i = 0; i < document.getElementsByTagName("li").length; i++){
        document.getElementsByTagName("li")[i].style.color = "black"
    }

    for(var i = 0; i < document.getElementsByTagName("ul").length; i++){
        document.getElementsByTagName("ul")[i].style.color = "black"
    }

    document.getElementById("pie").style.borderTop = "4px solid black"
    document.getElementById("pie").style.borderBottom = "4px solid black"
})


