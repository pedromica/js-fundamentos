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
