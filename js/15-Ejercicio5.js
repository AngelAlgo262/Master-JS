'use strict'

/* Mostrar todos los números divisores de un numero que el usuario  indique*/

var numero1 = parseInt(prompt("Introduce un número"),0) 

document.write("Todos los números divisorios de "+numero1+" son:"+"<br/>")

for(var i = 1; i<= numero1; i++){

    if(numero1%i == 0){
        document.write(i+"<br/>");
    }
    
}