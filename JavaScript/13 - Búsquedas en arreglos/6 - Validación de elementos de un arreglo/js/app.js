"use strict";

//*****************************************
//*** Validación de elementos de un arreglo

var resultado = null;

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
    },
    {
        nombre: 'Quesadillas',
        precio: 15,
        pais: 'México'
    }
]


//resultado = menu.some( platillo => platillo.precio <= 10);  // Valida cada uno de los elementos si cumple con una condición.
//console.log('¿Hay platillos abajo de 20? ', resultado);

resultado = menu.every( platillo => platillo.precio <= 60);// Valida si todos los elementos cumplen una condición.
console.log('¿Todos los platillos cuestan menos de 10? ', resultado);