function openNav() {

    document.getElementById("bloque").style.display = 'block';
    document.getElementById('bloque').style.transition = '3s'
    //document.getElementById('boton').style.paddingLeft = '20px'
}

function closeNav() {
    document.getElementById("bloque").style.display = 'none';
    document.getElementById('bloque').style.transition = '3s'
}
/*function quitarBotom(mediaQ) {
    if (mediaQ.matches) {
        let botonColapsado = document.getElementById('boton-menu-colapsado')
        botonColapsado.remove()
    }
}

let mediaQ = window.matchMedia('(min-width:1000px)')
quitarBotom(mediaQ)
mediaQ.addListener(quitarBotom)*/