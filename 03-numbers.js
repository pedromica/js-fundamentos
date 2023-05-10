var two = 2;
var twoWithDecimals = 2.5;
var negative = -2;


// Suma
var sum = 4 + 6;
console.log(`La suma vale : ${sum}`);

// Resta
var substract = 4 - 6;
console.log(`La resta vale : ${substract}`);

// Multiplicación
var multiply = 4 * 6;
console.log(`La multiplicación vale : ${multiply}`);

// División
var divide = 40 / 4;
console.log(`La división vale : ${divide}`);

// División con decimales
var divideWithDecimals = 25 / 4;
console.log(`La división con decimales vale : ${divideWithDecimals}`);

// Resto
var rest = 25 % 4;
console.log(`El resto vale : ${rest}`);

// Potencia

var power = 5**2
console.log(`La potencia vale: ${power}`);

/* Siempre tendrán preferencia las divisiones y multiplicaciones
Si queremos hacer una suma o resta primero, utilizamos paréntesis */

var complexCalculus = 2 + (2 * 6) + (10 * 5) / 2 ; /* Parentesis tener en cuenta */
console.log(complexCalculus); 

var numberAsString = '30'
var number = 39
console.log (numberAsString + number); /* Resultado 3039 Tipo String y Number */

console.log (+numberAsString + number); /* Truco. delante del String un + */

const numberAsNumber = Number(numberAsString); /*  */
// parseInt
// parseFloat
console.log (number + numberAsNumber);

console.log('------------------------------')
console.log('------------------------------')

// NaN (Not a Number) 
var notValidNumber = Number ('_');
console.log(`El numero no válido es: ${notValidNumber}`);
var salary = 1000 * notValidNumber
console.log (`Es el número NaN?: ${Number.isNaN(notValidNumber)}`);
console.log (`El salario es: ${salary}`);

//Ejemplo Nan Not a Number

var nanNumber1 = Number.isNaN(30);
var nanNumber2 = Number.isNaN(NaN);
var nanNumber3 = Number("_____");
var nanNumber4 = Number.isNaN("30");
console.log(`Valores es NaN: ${nanNumber1}`);
console.log(`Valores es NaN: ${nanNumber2}`);
console.log(`Valores es NaN: ${nanNumber3}`);
console.log(`Valores es NaN: ${nanNumber4}`);




