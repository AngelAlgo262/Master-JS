"use strict";
/* switch es una estructura de control similar a if, pero se usa cuando se tiene que evaluar mas de
un escenario ejemplo*/

var edad = 12;
var imprime = "";
switch (edad) {
  case 18:
    imprime = "Acabas de cumplir la mayoría de edad";
    break;
  case 25:
    imprime = "Eres un adulto joven";
    break;
  case 40:
    imprime = "Estas en la crisis de los 40";
    break;
  case 70:
    imprime = "Ya eres un adulto mayor";
    break;
    default:
        imprime = "Tu edad es neutra";
}
console.log(imprime);
