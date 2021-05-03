"use strict";

//**********************************
//*** Iterando arreglos con forEach

var platillos = ["ceviche", "tacos", "pasta"];

//platillos.forEach( platillo => console.log(platillo) )

platillos.forEach( (platillo, index) => console.log(index, platillo) )

//El ciclo forEach es un método de Array, el cual podemos usar con una función arrow para iterar sobre los elementos del arreglo.

//var mascotas = ["perro", "gato", "tortuga", "pez"];
//mascotas.forEach(mascota => console.log(mascota));