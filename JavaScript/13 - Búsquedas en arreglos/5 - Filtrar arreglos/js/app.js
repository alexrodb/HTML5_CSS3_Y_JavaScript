"use strict";

//********************************
//*** Filtrar arreglos

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
];

var resultado = null;


//resultado =  menu.find(platillo => platillo.pais == 'México');  // Solo busca la primera coincidencia.

resultado =  menu.filter(platillo => platillo.pais == 'México'); // Busca todas las coincidencias

console.log(resultado);




var mascotas = [
    {nombre: 'Snoopy', raza: 'basset-hound', edad: 2},
    {nombre: 'Molly', raza: 'chihuahua', edad: 8},
    {nombre: 'Megan', raza: 'cocker-spaniel', edad: 15},
    {nombre: 'Canela', raza: 'chihuahua', edad: 6}
]

//var resultado = mascotas.filter(mascota => mascota.raza == 'chihuahua');//Utilizamos el método filter para encontrar todos los elementos que coincidan con el criterio de búsqueda, no solo el primero.
//var resultado  = mascotas.some(mascota => mascota.edad <= 7); //El método some devuelve true si se cumple la condición en alguno de los elementos y false si no hay al menos un elemento que cumpla la condición.