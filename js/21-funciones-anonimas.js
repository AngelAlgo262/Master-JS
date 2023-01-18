'use strict'
/* 
Funciones anónimas son funciones que no tiene nombre
callback: es una función que se ejecuta dentro de otra
arrow function ó función de flecha es para abreviar una función anónima sintaxis:
parámetro => {} en lugar de function(parámetro){} es decir sustituir la palabra function por =>
si la función lleva mas de un parámetro si debe de ir entre paréntesis (parámetro1, parámetro1) =>{}
*/

function sumando(num1, num2, sumaYmuestra, sumaPorDos){
    var sumar = num1 + num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumando(12,56, dato =>{
    console.log("La suma es: ", dato);  
},
dato => {
    console.log("La suma por dos es: ", (dato*2));
});