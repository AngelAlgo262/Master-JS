'use strict'
//var
/* La diferencia entre let y var es que  var cambia su valor de forma global, let crea la variable 
pero solo en un entorno local ejemplo*/

var number = 50;
console.log(number); //esto mostrara en 50 

if(true){
    var number = 50;
    console.log(number); //esto seguirá siendo 50
}

console.log(number);
/* En todo momento number es 50 */

//let

var text = "Curso JS";
console.log(text); //esto mostrara Curso JS

if(true){
    let text = "Laravel 9";
    console.log(text) //esto sera Laravel 9
}

console.log(text); //esto sera Curso JS, pro que el valor Laravel 9 es solo para el if 

console.log("var es global let es local")

