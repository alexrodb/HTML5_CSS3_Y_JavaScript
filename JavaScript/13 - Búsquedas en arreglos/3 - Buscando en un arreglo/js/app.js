"use strict";

//********************************
//*** Buscando en un arreglo
var platillos = ["ceviche", "tacos", "pasta"];

//var pElegido = platillos.find( platillo => platillo == "tostadas");


var menu = [
	{nombre: 'Ceviche', precio: 20, pais: 'Perú'},
	{nombre: 'Tacos', precio: 10 , pais: 'México'},
	{nombre: 'Pasta', precio: 50, pais: 'Italia'}
];

var platilloElegido = menu.find( platillo => platillo.nombre == 'Tacos');
var precioElegido = menu.find( platillo => platillo.precio == '50');


console.log(platilloElegido)
console.log(precioElegido)