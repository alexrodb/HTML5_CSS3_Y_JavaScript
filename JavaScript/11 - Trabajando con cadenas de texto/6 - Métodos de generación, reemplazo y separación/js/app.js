"use strict";

//********************************
//*** Métodos de generación, reemplazo y separación

var mensaje = "Estoy aprendiendo JavaScript";

var resultado;

// repeat - Repite
//resultado = mensaje.repeat(200);

// replace - reemplaza, pero no cambia el contenido de la variable, el valor original lo deja intacto.
//resultado = mensaje.replace("JavaScript", "a programar");


// slice - Segmenta, corta una sección, coloca el cursor de inicio en la posición indicada
resultado = mensaje.slice(6);
//resultado = mensaje.slice(6, 11) //Indica la posición de inicio y final


// split - separa una cadena de texto en un arreglo
//resultado = mensaje.split(" ");

// trim - elimina los espacios antes y despues de un texto.
//resultado = mensaje.trim();

console.log(resultado);
