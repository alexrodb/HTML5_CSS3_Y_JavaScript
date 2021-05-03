"use strict";

//********************************
//*** Ordenando un arreglo

var platillos = ["Ceviche", "Tacos", "Pasta"];

console.log('Antes: ', platillos);

platillos.sort(); //Ordena de manera alfabetica

console.log('Ordenado: ', platillos);

platillos.reverse();  // El método reverse() invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.

console.log('Después: ', platillos);


platillos.reverse(); 

console.log('Reversa de nuevo: ', platillos);