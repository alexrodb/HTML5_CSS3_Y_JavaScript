"use strict";

//********************************
//*** Métodos númericos

var numero = "99.78"; //Este número es una cadena de texto

console.log('Number: ', typeof numero, typeof Number(numero));
console.log('parseInt: ',  parseInt(numero));
console.log('parseFloat: ', Number.parseFloat(numero));
console.log('isNaN: ', isNaN(numero)); //Pregunta si un número es un número
console.log('isInteger: ', Number.isInteger(numero)); //Pregunta si es un número entero