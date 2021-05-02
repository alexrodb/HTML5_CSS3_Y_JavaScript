"use strict";

//********************************
//*** Métodos búsqueda | Parte 3

var mensaje = "Estoy aprendiendo JavaScript";
var resultado;


// startsWith si comienza con
//resultado = mensaje.startsWith("Es");

//var textoEn =  mensaje.indexOf("JavaScript")
//resultado = mensaje.startsWith("Ja", textoEn);


// endsWith si termina con 
//resultado = mensaje.endsWith("JavaScript");


// includes si esta o no esta incluido
//resultado = mensaje.includes("aprendiendo");
resultado = mensaje.includes("Estoy", 6);

console.log(resultado);