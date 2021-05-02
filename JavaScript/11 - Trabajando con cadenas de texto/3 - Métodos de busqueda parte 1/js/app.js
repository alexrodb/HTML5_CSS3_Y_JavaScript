"use strict";

//********************************
//*** Métodos búsqueda | Parte 1

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado;

// indexOf busca la primera posición de lo buscado
//resultado = mensaje.indexOf("aprendiendo");


// lastIndexOf busca la posición de la ultima aparición de lo buscado.
//resultado = mensaje.lastIndexOf("aprendiendo");


// search:
//resultado = mensaje.search("aprendiendo");


// search | Expresión regular
resultado = mensaje.search(/ja/i);// la i permite buscar coincidencias en mayusculas y minusculas.


console.log(resultado);