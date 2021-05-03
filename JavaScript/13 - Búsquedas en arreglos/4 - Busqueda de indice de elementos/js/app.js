"use strict";

//*************************************
//*** Busqueda de índice de elementos

var platillos = ["ceviche", "tacos", "pasta"];

var menu = [{
        nombre: 'Ceviche',
        precio: 20,
        pais: 'Perú'
    },
    {
        nombre: 'Tacos',
        precio: 10,
        pais: 'México'
    },
    {
        nombre: 'Pasta',
        precio: 50,
        pais: 'Italia'
    }
]


// var numPlatillo = platillos.findIndex( platillo => platillo == 'tacos' ); //busqueda en arreglo simple

var numPlatillo = menu.findIndex( platillo => platillo.nombre == 'Pasta' ); // Busqueda en un arreglo de objetos

console.log("Platillo número: ", numPlatillo);