//Recapitulemos: Los condicionales nos permiten crear caminos en nuestro código dadas unas condiciones

/* 

var age = 30
var canParticipate = false

if (age <= 30 ) {
    canParticipate = true
}

console.log(`Puede participar el usuario? ${canParticipate}`); 

*/

var yearsToRenew = 0;
var driverAge = 61;

// 18 o más y 50 o menos => 10
// mas de 50 y menos o igual a 75 =>5
// más de 75 años => 1

/* 

if (driverAge >= 18 && driverAge <= 50) {
    yearsToRenew = 10;
}

if (driverAge > 50 && driverAge <=75) {
    yearsToRenew = 5
}

if (driverAge >75) {
    yearsToRenew = 1
}

console.log (`Se tiene que renovar el carnet cada ${yearsToRenew}`); 

*/

var myName = "Juan";

if (myName === "Pedro") {
  console.log("Eres el más mejor");
} else {
  console.log("Eres un cagado.");
}

console.log("----------------------------");

var time = 99999;
var record = "";

if (time < 8000) {
  record = "Workd Record";
} else if (time < 10000) {
  record = "Olympic Record";
} else if (time < 12000) {
  record = "Personal Best";
} else {
  record = "No record";
}

console.log(`El record es: ${record}`);

var city = "Madrid";
var hasCar = false;

if (city === "Madrid" && hasCar === false) {
  console.log("Va en Metro");
}
console.log ('--------------------------------')
console.log ('--------------------------------')
console.log ('--------------------------------')
/* Ejercicios else if */

/* Escribir un programa que tome un número como entrada e imprima en la consola si el número es positivo, negativo o cero: */

let num = -5
if (num > 0){
    console.log ('El número es positivo');
} else if (num < 0 ){
    console.log ('El número es negativo');
} else {
    console.log ('Si no es negativo ni positivo el número es 0')
}

/* Escribir un programa que tome dos números como entrada e imprima en la consola si el primer número es mayor, menor o igual al segundo número: */

let numberOne = -100
let numberTwo = 20

if (numberOne > numberTwo) {
    console.log(`El ${numberOne} es mayor que ${numberTwo}`);
} else if (numberOne < numberTwo) {
    console.log(`El ${numberTwo} es mayor que el ${numberOne}`);
} else  {
    console.log (`Son iguales... ${numberOne} = ${numberTwo}`);
}


//Escribir un programa que tome un número como entrada e imprima en la consola si el número es par o impar:

let numParImpar = 16;

if (numParImpar % 2 === 0){
    console.log(`El ${numParImpar} es Par`);
} else {
    console.log(`El ${numParImpar} es Impar`);
}


// Escribir un programa que tome una cadena como entrada e imprima en la consola si la cadena es corta, mediana o larga:

let frase = 'mas de 12345678910121212';

if (frase.length < 6) {
    console.log ('La frase es corta');
} else if (frase.length <= 12) {
    console.log ('La frase es mediana');
} else if (frase.length > 12) {
    console.log ('Es cojonuda');
}    

