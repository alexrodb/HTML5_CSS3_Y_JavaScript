"use strict";

//********************************
//*** Operadores de concatenación

var datoA = 25;
var datoB = 50;

var nombre = "Alex";
var apellido = "Rodríguez";

// CONCATENACIÓN DE NÚMEROS
var concatNumeros = datoA + datoB;
console.log("Los números "+ datoA +" y "+ datoB +" usados como números concatenados hacen una suma igual a: ", concatNumeros);

// CONCATENACIÓN DE CADENAS DE TEXTO
var concatTexto = nombre + " " + apellido ;
console.log("Los textos "+ nombre +" y "+ apellido +" se unen para formar: ", concatTexto);

// CONCATENACIÓN DE NÚMEROS COMO TEXTO
var concatNumComoTxt  = "9"+"10" ;
console.log("Los números 9 y 10 usados como texto se unen para formar: ", concatNumComoTxt);

// CONCATENACIÓN DE TEXTO Y NUMERO
var concatTxtNum = datoA + "5" ;
console.log("El número "+ datoA +" usado como número y 5 como texto se unen para formar: ", concatTxtNum);