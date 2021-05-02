"use strict";

//********************************
//*** Plantillas y literales

var lenguaje = 'JavaScript';

var lenguaje2 = 'HTML';

var lenguaje3 = 'CSS';
//Para las plantillas se utilizan las comillas especiales o "backticks".
var mensaje = `Me gusta ${lenguaje} y su integración con ${lenguaje2} y ${lenguaje3}.`;

console.log(mensaje);


//---- Mensaje multilinea
var mensajeMultilinea = `
    Hola mundo,
	estoy aprendiendo
	${lenguaje} y me gusta
	como se integra con ${lenguaje2} y ${lenguaje3}.`;

//console.log(mensajeMultilinea);