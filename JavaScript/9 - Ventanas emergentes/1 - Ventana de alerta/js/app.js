"use strict";

//********************************
//*** Ventana de alerta

const video = document.querySelector('.loroVideo');

video.addEventListener("ended", function () {
   alert("Alerta: \nEl video del loro ha terminado");
});