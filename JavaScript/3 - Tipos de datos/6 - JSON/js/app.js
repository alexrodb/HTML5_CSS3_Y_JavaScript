"use strict";

// JSON => JavaScript Object Notation

var persona = {nombre: 'Alexander', numero: '1234567890'};
//En consola puedo acceder a cada dato como persona.numero o persona.nombre

//Una variable llamada personas que tiene un arreglo con varios datos.
var personas = [
    {nombre: 'Manuel', numero: '1'},
    {nombre: 'Luisa', numero: '2'},
    {nombre: 'Camilo', numero: '3'},
    persona
]

var personaJSON = JSON.stringify(persona);

var nuevaPersona = JSON.parse(personaJSON)
