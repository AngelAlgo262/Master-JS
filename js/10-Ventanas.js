'use strict'

//Alerta muestra una ventana en el navegador
// alert("Esta es una alerta");
// alert("Esta es otra alerta");

//Alertas de confirmación
confirm("Estas seguro que deseas continuar?");
//Se puede capturar lo que el usuario responde si metes el confirm en una variable

var resultado = confirm("Estas completamente seguro?");
console.log(resultado)

/* 
Ingreso de datos, se hace con prompt, recibe dos valores primero un texto y segundo un valor por defecto
se puede capturar el valor si se mete en una variable
*/
var edad = prompt("Que edad tienes?", 18)
console.log(edad)