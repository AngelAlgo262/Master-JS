'use strict'

/*Condición if 
Si "a" es igual a "b" entonces haz algo, (siempre evalúa en verdadero)
if (si paso esto){
    ejecuta esto
}else sino haz esto;
ejemplo*/

/* Operadores 
= igual
== exactamente igual
< menor que
> mayor que
=! distinto
>= mayor igual
<= menor igual */


var edad1 = 70;
var nombre = "David Suarez";

if(edad1 >=18){
    console.log(nombre + ' ' + "tienes" + ' ' + edad1 + ' ' + "Eres mayor de edad");

    if(edad1 <= 33){
        console.log("Eres joven");
    }else if(edad1 >=70){
        console.log("Eres Anciano");
    }
}else console.log(nombre + ' ' + "Eres menor de edad");



/* Operadores lógicos
and (y)----> &&
or (o) ----> ||
negación --> !
*/

var year = 2038;
//negación

if(year != 2016){
    console.log("El año no es 2016, realmente es " + year);
}

//and
if(year >= 2000 && year <=2022){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

//or, las instrucciones que estén dentro de paréntesis se ejecutan primero

if(year ==2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado");
}

