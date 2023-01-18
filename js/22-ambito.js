'use strict'

/* El ámbito de una variable es el lugar donde se puede acceder a una variable */

function ambito(texto){
    var local = "Solo estoy disponible en la función ámbito";

    console.log(texto);
    //Se muestra por que la variable es global
    console.log(global)
}

var texto = "Parámetro de ámbito";
var global = "Estoy disponible en todo el programa";

/* Muestra error porque local solo esta disponible dentro de la función ámbito
ambito(local); */
ambito(texto);