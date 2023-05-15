/* Mini-ejercicios */

//! Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.

let myFavoriteHero = "Hulk";

//! Crea una variable llamada x, asigna el valor 50 a ella.

let x = 50;

//! Crea una variable llamada h con el valor 5 y otra y con el valor 10.

let h = 5;
let y = 10;

//! Crea una otra variable z y asignale el valor de h + y.

let z = h + y ;
console.log (z);

//! Dado el siguiente javascript, cambia el valor de la propiedad age a 250.

const character = { name: 'Jack Frost', age: 10 };
console.log(character);

character.age = 250
console.log(character);

//! Declara 3 variables con los nombres y valores siguientes:
//? firstName = 'Jon';
//? astName = 'Snow';
//? age = 24;

let firstName = 'Jon'
let astName = 'Snow'
let age = 24

//! Guarda los valores en una variable sentence con la siguiente estructura:

var sentence = `Soy ${firstName} ${astName} tengo ${age} años y me gustan los lobos.`
console.log(sentence);

//! Dado el siguiente javascript, guarda en una variable la suma del precio de ambos juguetes.

const toy1 = { name: 'Buss myYear', price: 19 };
const toy2 = { name: 'Rallo mcKing', price: 29 };

var precioToys = toy1.price + toy2.price;
console.log (precioToys);

/* Mini-Reto */

//! Crea una variable llamada planet y asígnale el valor "Tierra"

let planet = 'Tierra'

//! Crea una variable llamada isInnerPlanet y asígnale el valor true (la Tierra es un planeta interno)

let isInnerPlanet = true

//! Crea una variable llamada hasAtmosphere y asígnale el valor true (la Tierra tiene atmósfera)

let hasAtmosphere = true

//! Utiliza un operador lógico && (AND) para combinar las variables isInnerPlanet y hasAtmosphere en una expresión lógica que evalúe a true. Almacena el resultado en una variable llamada isHabitable.

let isHabitable = isInnerPlanet && hasAtmosphere

//! Utiliza una declaración console.log para imprimir el valor de la variable isHabitable en la consola. Debería mostrarse true.

console.log (isHabitable);

/* Mini-reto => Condicioanl */

//! Crea una variable llamada character y asígnale el valor "Legolas"
//! Crea una variable llamada race y asígnale el valor "Elfo"
//! Crea una variable llamada hasRing y asígnale el valor false (Legolas no tiene el Anillo Único)
//! Crea una variable llamada isArcher y asígnale el valor true (Legolas es un arquero)
//! Utiliza un condicional if para evaluar si hasRing es true. Si lo es, imprime en la consola el mensaje "Legolas es el portador del Anillo Único"
//! Utiliza else if para evaluar si isArcher es true. Si lo es, imprime en la consola el mensaje "Legolas es un arquero experto"
//! Utiliza else para imprimir en la consola el mensaje "Legolas es un guerrero valiente"
console.log('------Mini-Reto--------');


let character1 = 'Legolas'
let race = 'Elfo'
let hasRing = false
let isArcher = true

if (hasRing == true){
    console.log(`${character1} es el portador del Anillo Único`)
} else if (hasRing == false){
    console.log(`${character1} no tiene el anillo de poder`);
}

if(isArcher == !true){
    console.log (`${character1} es un arquero expertO`)
} else {
    console.log(`${character1} es un guerrero Valiente`)
}


console.log('------EJERCICIO-3------------');

//! 1.1 Multiplica 10 por 5 y muestra el resultado mediante console.

var multiplicacion = 10 * 5;
console.log (`Resultado de la multiplicación es ${multiplicacion}`);

//! 1.2 Divide 10 por 2 y muestra el resultado en un console.

var divide = 10 / 2;
console.log (`Resultado de la división es ${divide}`);

//! 1.3 Muestra mediante un console el resto de dividir 15 por 9.

var resto = 15 % 9;
console.log (`Resultado del es ${resto}`);

//! 1.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.

var p = 10
var j = 5

var o = p + j;

console.log (o);

//! 1.5 Usa el correcto operador de asignación que resultará en i = 50, teniendo dos variables c = 10 y m = 5.

var c = 10 
var m = 5
var i = (c * m);
console.log(i);
console.log('------FIN-EJERCICIO-3--------');

console.log('------EJERCICIO-4------------');

//! 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola. const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(`Muestro por consola a ${avengers[0]}`)

//! 1.2 Cambia el primer elemento de avengers a "IRONMAN" const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0] = 'IRONMAN'
console.log(avengers);

//! 1.3 console numero de elementos en el array usando la propiedad correcta de Array.

console.log(avengers.length);

//! 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array, const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];


/* console.log(rickAndMortyCharacters);
rickAndMortyCharacters.push('Morty', 'Summer');
console.log(rickAndMortyCharacters); */

//! 1.5 Elimina el último elemento del array y muestra el primero y el último por consola. 

/* const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
console.log(rickAndMortyCharacters);
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters); */

//! 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
console.log(rickAndMortyCharacters)
rickAndMortyCharacters.splice(2,2);
console.log(rickAndMortyCharacters);


console.log('------FIN-EJERCICIO-4--------');

console.log('------EJERCICIO-5------------');

// * * En base al código siguiente, muestra los mensajes correctos por consola.

const number1 = 10; 
const number2 = 20; 
const number3 = 2;

//ejemplo 
    if(number1 === 10)  {
    console.log('number1 es estrictamente igual a 10') 
}

    if (number2 / number1) {
        console.log ('number2 dividido entre number1 es igual a 2')
    }

    if (number1 || number2) {
        console.log(`${number1} es estrictamente distinto a ${number2}`)
    }

    if (number3 * 5 == number1) {
        console.log (`${number3} por 5 es igual a ${number1}`);
    }

    if (number3 * 5 === number1 || number1 === number2) {
        console.log (`${number3} por 5 es igual a ${number1} Y ${number1} es igual a ${number2}`)
    }

    if (number2 /2 == number1 || number1 /5 == number3) {
        console.log (`${number2} entre 2 es igual a ${number1} O ${number1} entre 5 es igual a ${number3}` );
    }

console.log('------FIN-EJERCICIO-5--------');

