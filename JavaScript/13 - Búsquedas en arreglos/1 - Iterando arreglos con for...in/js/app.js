"use strict";

//********************************
//*** Iterando arreglos con for...in

var paises = ["Argentina", "Bolivia", "Brasil","Chile","Colombia","Costa Rica","Cuba","Ecuador","El Salvador","Guatemala","Honduras","México","Nicaragua","Panamá","Paraguay","Perú","Puerto Rico","República Dominicana","Uruguay","Venezuela"];

//for ( let pais in paises) {
//    console.log(paises[pais])
//}

for ( let i in paises) {
    console.log(paises[i])
}

var dias = Array.of("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");

for (let dia in dias) {
    console.log(dias[dia]);
}