"use strict";

/* 
Usando un bucle, mostrar la suma y la media de los números introducidos 
hasta introducir un negativo y ahi mostrar en pantalla
*/

var suma = 0;
var contador = 0;

do {
  var numero = parseInt(
    prompt("Introduce un numero, hasta que metas un negativo", 0)
  );

  if (isNaN(numero)) {
    numero = 0;
  } else if (numero >= 0) {
    suma = suma + numero;
    contador++;
  }
  console.log(suma);
  console.log(contador);
} while (numero >= 0);

alert("La suma de todos los números es: " + suma);
alert("La media de todos los números es: " + suma / contador);
