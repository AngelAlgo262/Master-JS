"use strict";

/* Mostrar la tabla de multiplicar del numero que el usuario introduzca */

var mensaje = confirm("¿Quieres repasar las tablas de multiplicar?");

if (mensaje) {
  var numero = parseInt(prompt("Ok, Introduce un número", 0));
} else {
  alert("Entiendo, gracias!!!");
}

while (isNaN(numero)) {
  var numero = parseInt(prompt("Ok, Introduce un número", 0));
}

document.write("<h1>Tabla del " + numero + "</h1>");
for (var i = 1; i <= 10; i++) {
  document.write(i + " x " + numero + "= " + i * numero + "</br>");
}

mensaje = confirm("¿Quieres ver todas las tablas?");

if (mensaje) {
  for (var c = 1; c <= 10; c++) {
    document.write("<h1>Tabla del " + c + "</h1>");
    for (var i = 1; i <= 10; i++) {
      document.write(i + " x " + c + "= " + i * c + "</br>");
    }
  }
}else(OK)
