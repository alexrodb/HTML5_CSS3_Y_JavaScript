"use strict";

//********************************
//*** Métodos de transformación

var mensaje = "Estoy aprendiendo JavaScript";
var mensaje2 = " y programación";
var total = 123456;

var resultado;

//resultado = total.toString();// convierte un número a una cadena de texto. Desde consola se puede verificar con typeof resultado
//resultado = mensaje.toLowerCase(); // muestra el texto en Minúsculas. 
//resultado = mensaje.toUpperCase(); // muestra el texto en Mayúsculas.


resultado = mensaje.concat(mensaje2, ',tengo muchas ideas', ' 123', ' 123', ' 123', ' 123', ' 123', ' 123', ' 123');


console.log(resultado);