'use strict'
/* Parámetros  REST y SPRED*/

//REST obtiene el resto de parametos
function reptiles (rep1,rep2,...resto_de_reptiles){
    console.log("Reptil 1: ", rep1);
    console.log("Reptil 2: ", rep2);
    console.log(resto_de_reptiles);
}

reptiles("anaconda", "cobra", "boa", "calcabel", "mamba", "ferdelance", "coralillo", "sincuate");

//SPRED expande un array

function simios (simio1,simio2){
    console.log("Simio 1: ", simio1);
    console.log("Siio 2: ", simio2);
}

var monos = ["Titi", "Jaimico"];

simios(...monos, "Mandril", "Orangutan", "Gorila", "Chimpance", "Gibon", "Aullador")

