"use strict";
//Este código declara una función arrow con 4 parámetros (las calificaciones) y la asigna a una variable llamada "promedio".
//Esta función calcula el promedio de las cuatro calificaciones y las devuelve como resultado.
//Luego se usa console.log para invocar la función arrow por medio de la variable `promedio` y se imprime el resultado

var promedio = (cal1, cal2, cal3, cal4) => {
    return (cal1+cal2+cal3+cal4)/4
}

console.log(promedio(10,10,11,12));