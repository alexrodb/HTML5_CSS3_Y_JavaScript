"use strict";

//********************************
//*** Métodos búsqueda | Parte 2

var mensaje = "Estoy aprendiendo JavaScript y estoy Aprendiendo mucho";

var resultado;

// match:
//resultado = mensaje.match(/aprendiendo/gi);
resultado = mensaje.match(/aprendiendo/g);


// substr:
//resultado = mensaje.substr(6,11);


// substring:
//resultado = mensaje.substring(6,17);


// charAt:
//resultado = mensaje.charAt(18);
//resultado = mensaje.charAt(0);


console.log(resultado);