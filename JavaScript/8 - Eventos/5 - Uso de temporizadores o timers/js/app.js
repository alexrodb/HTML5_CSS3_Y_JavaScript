"use strict";

//*** Temporizadores o timers
//********************************

// setInterval - Infinitas veces en un determinado tiempo hasta que lo detenemos.
// setTimeout  - Una vez 

var temporizador = setInterval(function () {
    setColor();
}, 1500);

//setTimeout(function () {
//    setColor();
//}, 1500);

function setColor() {
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "red" : "blue";
}

function stopChangeColor() {
    //Sirve para detener un temporizador.
    clearInterval(temporizador)
}