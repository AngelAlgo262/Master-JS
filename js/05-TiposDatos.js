'use strict'
//operadores
var number1 = 7;
var number2 = 12;
var operation = number1 / number2;

alert("El resultado es "+ operation);

//tipos de dato

var numero_entero = 44;
var cadena_texto = "Hola, que tal 'chalan'" /* las comillas con las que se defina la cadena, tiene prioridad es decir, al definir
una cadena con comillas dobles escapara las sencillas y viceversa */

var verdadero_falso = true;

//se pueden convertir tipos de datos ejemplo
var numero_falso = "33"

Number(numero_falso);
console.log(parseInt(numero_falso) + 12);

//se puede obtener el tipo de dato de una variable con typeof

console.log(typeof numero_falso);
console.log(typeof verdadero_falso);
console.log(typeof cadena_texto);