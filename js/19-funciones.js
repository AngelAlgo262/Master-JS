"use strict"

/* Una función es un bloque de código que se puede reutilizar tantas veces necesite, pueden recibir parámetros o no *
Para devolver algo en una función se tiene que hacer con return */

//se define la función
function calculadora(num1,num2){
    //Conjunto de instrucciones
    console.log("SUMA:" +(num1+num2));
    console.log("RESTA:" +(num1-num2));
    console.log("MULTIPLICATION:" +(num1*num2));
    console.log("DIVISION:" +(num1+num2));
}


//llamar a la función

for(var i=1; i<=10; i++){
    console.log(i);
    calculadora(i,8);
}

/* Funciones dentro de funciones (función anidada) tiene como objetivo simplificar el código 
ejemplo*/

function enConsola(num1,num2){
    console.log("SUMA:" +(num1+num2));
    console.log("RESTA:" +(num1-num2));
    console.log("MULTIPLICATION:" +(num1*num2));
    console.log("DIVISION:" +(num1+num2));
}

function enPantalla(num1,num2){
    document.write("Las operaciones básicas con "+ num1 + " y " + num2 + " son: </br>")
    document.write("SUMA:" +(num1+num2) + "</br>");
    document.write("RESTA:" +(num1-num2) + "</br>");
    document.write("MULTIPLICATION:" +(num1*num2) + "</br>");
    document.write("DIVISION:" +(num1+num2) + "</br>");
}

/* función anidada, num1 y 2 son obligatorio, mostrar es opcional*/
function mostrar(num1,num2, mostrar=true){
    if(mostrar == false){
        enConsola(num1,num2)
    }else{
        enPantalla(num1,num2)
    }

    return true;
}

//invocar a la función

mostrar(12,12)