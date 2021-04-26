"use strict";

//********************************
//*** Calllbacks

function calcular(datoA, datoB, sumarCB, restarCB) {
    var suma = datoA + datoB
    var restar = datoA - datoB;

    sumarCB(suma);
    restarCB(restar);
}

// calcular(d1, d2, func, func)
calcular(3, 4, function (resultado) {
    console.log('Suma', resultado)
},function (resultado) {
    console.log('Resta', resultado)
})