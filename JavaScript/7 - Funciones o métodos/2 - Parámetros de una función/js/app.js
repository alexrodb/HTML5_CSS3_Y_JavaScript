"use strict";

//********************************
//*** Parámetros de una función

function saludar(nombre, edad) {
	console.log('Nombre: ', nombre);
	console.log('Edad: ', edad);
	var resultado = nombre + " tiene " + edad + " años";
	return resultado;
}

var mensaje = saludar("Alexander", 30);

console.log(mensaje)