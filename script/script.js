function openNav() {

    document.getElementById("menu").style.height = "57%";
}

function closeNav() {
    document.getElementById("menu").style.height = "0%";
}
function quitarBotom(mediaQ) {
    if (mediaQ.matches) {
        let borrarBoton = document.getElementById('borrarBoton')
        borrarBoton.remove()
    }
}
let mediaQ = window.matchMedia('(min-width:1000px)')
quitarBotom(mediaQ)
mediaQ.addEventListener('quitarBotom')