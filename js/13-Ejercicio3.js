"use strict";
/* 
Hacer un programa que muestre todos los números que hay entre dos números por el usuario, es decir
si el usuario mete 10 y 25 se tendrá que mostrar 11,12,13 hasta llegar al 25
*/

var numero1 = parseInt(prompt("Introduce un número", 0));
var numero2 = parseInt(prompt("Introduce un número mayor al anterior", 0));

document.write(
  "<h3>De " + numero1 + " hasta " + numero2 + " están estos números:" + "</h3>"
);
for (var i = numero1; i <= numero2; i++) {
  document.write(i + "<br/>");
}
