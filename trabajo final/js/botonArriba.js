


document.getElementById("irarriba").addEventListener("mouseover",function(){
    document.getElementById("casita").style.display = "block"
    document.getElementById("casita").style.transition = "all 300ms"
})
document.getElementById("irarriba").addEventListener("mouseout",function(){
    document.getElementById("casita").style.display = "none"
    document.getElementById("casita").style.transition = "all 300ms"
})
document.getElementById("irarriba").addEventListener("click",function(){
    window.scroll(0,0)
})