'use strict'
/* 
While se parece a for, pero es menos estricto, 
nota: tener cuidado de aumentar el contador, por que se puede crear un bucle infinito.
Se puede cortar la ejecución del bucle con un break
*/

var year = 2018;
while(year != 1951){
    console.log("Estamos en el año "+year);
//cuando la iteración llegue a 2000 se va a detener 
    if(year == 2000){
        break;
    };
    year--;
}

/* 
do while, primero ejecuta un bloque de código y luego hace el bucle, ejemplo.
*/
var years = 30;

//hacer un alert 
do{
    alert("Solo cuando sea diferente a 20");
//restar 1 a years
    years--;
//mientras years sea mayor a 25, es decir de 30 va restar hasta llegar a 25
}while(years > 25);

