'use strict'
/* 
Mostrar todos los números impares que hay entre dos números introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce un número"),0)
var numero2 = parseInt(prompt("Introduce un número mayor"),0)

document.write("Los números impares que existen entre " +numero1+ " y "+numero2+" son:"+ "<br/>")
for(var i = numero1; i <= numero2; i++){
    while(numero1 < numero2){
        numero1 ++;

        if(numero1%2 !=0){
            document.write(numero1+"<br/>");
        }
    };
};