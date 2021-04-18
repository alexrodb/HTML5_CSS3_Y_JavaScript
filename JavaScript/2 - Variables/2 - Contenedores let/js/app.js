"use strict";

var nombre = 'Alex';

console.log(nombre)

function saludo() {
  let nombre = 'Camilo';
    console.log(nombre)
    
  let edad = 30; 
  console.log(edad)
}
// Si se llama a edad fuera de la función marca error de que no encuentra una variable global con ese nombre. La variable edad solo está disponible dentro del contenedor que se llama saludo y es una función
// console.log(edad)

saludo();