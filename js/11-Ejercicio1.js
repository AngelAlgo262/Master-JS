"use strict";
/* 
Hacer un programa que pida dos números y que diga si los números son iguales
PLUS: Si el usuario NO proporciona un número indicarle que esta equivocado y solicitar solo números.
      Si el usuario proporciona números iguales o menores a cero
*/

var jugar = confirm("Quieres jugar?");

if (jugar) {
  var numero1 = parseInt(prompt("Dime un numero"));
  var numero2 = parseInt(prompt("OK, dime otro"));

 /*  while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2));
  {
    numero1 = parseInt(prompt("Dime un numero"));
    numero2 = parseInt(prompt("OK, dime otro"));
  } */

  var igual = confirm("Quieres que te diga si son iguales?");
  if (igual) {
    if (numero1 == numero2) {
      alert("Los números son iguales");
    } else alert("Los números son diferentes");
  } else alert("ok, tú te lo pierdes");
} else alert("Entiendo, nos vemos luego.");
