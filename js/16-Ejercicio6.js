'use strict'

/* Construir un programa que nos pida un numero y nos diga si es impar o par, si el usuario mete un valor que no es 
un numero indicar en pantalla */

var numero = parseInt(prompt("Introduce un número",0));

while(isNaN(numero)){
    var numero = parseInt(prompt("Introduce un número",0));
}
if(numero % 2 ==0){
    document.write("El número es par")
}else{
    document.write("El número es impar")
}