"use strict";

/* Construir una calculadora que:
- Pida dos números
- Si el usuario mete un número mal que pida de nuevo los números
- Que el resultado de sumar, multiplicar y dividir las dos cifras 
  se muestre en pantalla, en la consola y en un alert*/

var numero1 = parseInt(prompt("Introduce un número", 0));
var numero2 = parseInt(prompt("ok, dame otro número", 0));

while (numero1 <0 || numero2 <0 || isNaN(numero1) || isNaN(numero2)) {
  numero1 = parseInt(prompt("Introduce un número", 0));
  numero2 = parseInt(prompt("ok, dame otro número", 0));
}

document.write("<h1>Operaciones básicas con "+numero1+ " y " +numero2+ "</h1>")
//Pantalla
document.write("<h4>SUMA: " +(numero1 + numero2)+ "</h4>")
document.write("<h4>RESTA: " +(numero1 - numero2)+ "</h4>")
document.write("<h4>MULTIPLICACIÓN: " +(numero1 + numero2)+ "</h4>")
document.write("<h4>DIVISIÓN: " +(numero1 + numero2)+ "</h4>")

//consola
var resultado = 
                "SUMA: " +(numero1 + numero2)+"\n"+
                "RESTA: " +(numero1 - numero2)+"\n"+
                "MULTIPLICACIÓN: " +(numero1 + numero2)+"\n"+
                "DIVISIÓN: " +(numero1 + numero2)+"\n";
console.log(resultado);

//Alerta
alert(resultado);
