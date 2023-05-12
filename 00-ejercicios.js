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



